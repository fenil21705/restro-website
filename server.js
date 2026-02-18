import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

// Resolve __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Data File Path
const DATA_FILE = path.join(__dirname, 'reservations.json');

// Initialize Data File if not exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

import supabase from './supabaseClient.js';

// ... (imports remain same except removing fs and local file paths if not needed for anything else)
// Wait, I should import supabase first. I'll just rewrite the whole file content block to be safe or use replace_file_content carefully.
// Actually, since I'm confusing the imports, let's rewrite the routes.

// API Routes
console.log('Setting up routes...');

// Middleware logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// GET all reservations (Optional, for admin check)
app.get('/api/reservations', async (req, res) => {
    const { data, error } = await supabase
        .from('reservations')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// POST new reservation
app.post('/api/reserve', async (req, res) => {
    const newReservation = req.body;

    // Simple validation
    if (!newReservation.name || !newReservation.email || !newReservation.phone) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Add timestamp and status
    // Supabase handles ID and createdAt automatically, but we can pass status.
    const { data, error } = await supabase
        .from('reservations')
        .insert([{
            name: newReservation.name,
            email: newReservation.email,
            phone: newReservation.phone,
            guests: newReservation.guests,
            date: newReservation.date,
            time: newReservation.time,
            requests: newReservation.requests,
            status: 'Pending'
        }])
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Reservation successful!', reservation: data[0] });
});

// PUT update reservation status
app.put('/api/reservations/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    // First fetch old status to check for changes (if email logic needed)
    const { data: oldData, error: fetchError } = await supabase
        .from('reservations')
        .select('status, email, name, date, time, guests')
        .eq('id', id)
        .single();

    if (fetchError) {
        return res.status(500).json({ error: fetchError.message });
    }

    const oldStatus = oldData.status;

    const { data, error } = await supabase
        .from('reservations')
        .update({ status: status })
        .eq('id', id)
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    // Send Email if status changed to Confirmed or Cancelled
    if (status !== oldStatus && (status === 'Confirmed' || status === 'Cancelled')) {
        sendEmail(oldData, status);
    }

    res.json({ message: 'Reservation updated', reservation: data[0] });
});

// ... (Email Configuration remains same)

const sendEmail = (reservation, status) => {
    // ... (same as before)
    const isConfirmed = status === 'Confirmed';
    const subject = isConfirmed ? 'Reservation Confirmed - Restro.' : 'Reservation Cancelled - Restro.';

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: ${isConfirmed ? '#4CAF50' : '#F44336'};">${subject}</h2>
            <p>Dear ${reservation.name},</p>
            <p>Your reservation at <strong>Restro.</strong> has been <strong>${status}</strong>.</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Date:</strong> ${reservation.date}</p>
                <p><strong>Time:</strong> ${reservation.time}</p>
                <p><strong>Guests:</strong> ${reservation.guests}</p>
            </div>

            <p>${isConfirmed ? 'We look forward to serving you!' : 'We hope to see you another time.'}</p>
            <p>Best Regards,<br>Restro. Team</p>
        </div>
    `;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: reservation.email,
        subject: subject,
        html: htmlContent
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};


// GET all contact messages
app.get('/api/contacts', async (req, res) => {
    const { data, error } = await supabase
        .from('contacts')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// POST new contact message
app.post('/api/contact', async (req, res) => {
    const newMessage = req.body;

    // Simple validation
    if (!newMessage.firstName || !newMessage.email || !newMessage.message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await supabase
        .from('contacts')
        .insert([{
            first_name: newMessage.firstName,
            last_name: newMessage.lastName,
            email: newMessage.email,
            phone: newMessage.phone,
            subject: newMessage.subject,
            message: newMessage.message,
            status: 'Unread'
        }])
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Message sent successfully!', contact: data[0] });
});

// PUT update contact status
app.put('/api/contacts/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
        .from('contacts')
        .update({ status: status })
        .eq('id', id)
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Message updated', contact: data[0] });
});

// POST reply to contact message
app.post('/api/contacts/:id/reply', async (req, res) => {
    const { id } = req.params;
    const { replyMessage } = req.body;

    if (!replyMessage) {
        return res.status(400).json({ error: 'Reply message is required' });
    }

    // Fetch contact details for email
    const { data: contact, error: fetchError } = await supabase
        .from('contacts')
        .select('*')
        .eq('id', id)
        .single();

    if (fetchError) {
        return res.status(500).json({ error: 'Message not found' });
    }

    // Send Email
    // Note: 'contact' object keys from Supabase are snake_case (first_name), but our email function might expect different or we adapt.
    // Let's adapt the email function or the object.

    // Create a normalized contact object for the email function if needed, or update sendReplyEmail to usage snake_case
    // My previous sendReplyEmail used contact.firstName. Supabase returns first_name.
    // I will adhere to what Supabase returns.

    const sendReplyEmailV2 = (contactData, replyMsg, cb) => {
        const subject = `Re: ${contactData.subject} - Restro.`;
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                <h2 style="color: #4CAF50;">Response from Restro.</h2>
                <p>Dear ${contactData.first_name},</p>
                <p>${replyMsg}</p>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; color: #777; font-size: 13px;">
                    <p><strong>Original Message:</strong></p>
                    <p><em>"${contactData.message}"</em></p>
                </div>

                <p>Best Regards,<br>Restro. Team</p>
            </div>
        `;
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: contactData.email,
            subject: subject,
            html: htmlContent
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) cb(error);
            else {
                console.log('Reply Email sent:', info.response);
                cb(null);
            }
        });
    };

    sendReplyEmailV2(contact, replyMessage, async (emailErr) => {
        if (emailErr) {
            console.error("Email failed", emailErr);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        // Update status to Replied
        const { data: updatedData, error: updateError } = await supabase
            .from('contacts')
            .update({ status: 'Replied' })
            .eq('id', id)
            .select();

        if (updateError) {
            return res.status(500).json({ error: 'Failed to update status' });
        }

        res.json({ message: 'Reply sent successfully!', contact: updatedData[0] });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
