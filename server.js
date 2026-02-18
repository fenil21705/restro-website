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

// API Routes
console.log('Setting up routes...');

// Middleware logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// GET all reservations (Optional, for admin check)
app.get('/api/reservations', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// POST new reservation
app.post('/api/reserve', (req, res) => {
    const newReservation = req.body;

    // Simple validation
    if (!newReservation.name || !newReservation.email || !newReservation.phone) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Add timestamp and status
    newReservation.id = Date.now();
    newReservation.createdAt = new Date().toISOString();
    newReservation.status = 'Pending'; // Default status

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        const reservations = JSON.parse(data);
        reservations.push(newReservation);

        fs.writeFile(DATA_FILE, JSON.stringify(reservations, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save reservation' });
            }
            res.status(201).json({ message: 'Reservation successful!', reservation: newReservation });
        });
    });
});

// PUT update reservation status
app.put('/api/reservations/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        let reservations = JSON.parse(data);
        const index = reservations.findIndex(r => r.id == id);

        if (index === -1) {
            return res.status(404).json({ error: 'Reservation not found' });
        }

        const oldStatus = reservations[index].status;
        reservations[index].status = status;

        fs.writeFile(DATA_FILE, JSON.stringify(reservations, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update reservation' });
            }

            // Send Email if status changed to Confirmed or Cancelled
            if (status !== oldStatus && (status === 'Confirmed' || status === 'Cancelled')) {
                sendEmail(reservations[index], status);
            }

            res.json({ message: 'Reservation updated', reservation: reservations[index] });
        });
    });
});

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = (reservation, status) => {
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

// Contact Us Data File Path
const CONTACT_FILE = path.join(__dirname, 'contacts.json');

// Initialize Contact Data File if not exists
if (!fs.existsSync(CONTACT_FILE)) {
    fs.writeFileSync(CONTACT_FILE, JSON.stringify([], null, 2));
}

// GET all contact messages
app.get('/api/contacts', (req, res) => {
    fs.readFile(CONTACT_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read contact data' });
        }
        res.json(JSON.parse(data));
    });
});

// POST new contact message
app.post('/api/contact', (req, res) => {
    const newMessage = req.body;

    // Simple validation
    if (!newMessage.firstName || !newMessage.email || !newMessage.message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Add timestamp and ID
    newMessage.id = Date.now();
    newMessage.createdAt = new Date().toISOString();
    newMessage.status = 'Unread'; // Default status

    fs.readFile(CONTACT_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read contact data' });
        }

        const messages = JSON.parse(data);
        messages.push(newMessage);

        fs.writeFile(CONTACT_FILE, JSON.stringify(messages, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save message' });
            }
            res.status(201).json({ message: 'Message sent successfully!', contact: newMessage });
        });
    });
});

// PUT update contact status
app.put('/api/contacts/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    fs.readFile(CONTACT_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        let messages = JSON.parse(data);
        const index = messages.findIndex(m => m.id == id);

        if (index === -1) {
            return res.status(404).json({ error: 'Message not found' });
        }

        messages[index].status = status;

        fs.writeFile(CONTACT_FILE, JSON.stringify(messages, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update message' });
            }
            res.json({ message: 'Message updated', contact: messages[index] });
        });
    });
});

// POST reply to contact message
app.post('/api/contacts/:id/reply', (req, res) => {
    const { id } = req.params;
    const { replyMessage } = req.body;

    if (!replyMessage) {
        return res.status(400).json({ error: 'Reply message is required' });
    }

    fs.readFile(CONTACT_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        let messages = JSON.parse(data);
        const index = messages.findIndex(m => m.id == id);

        if (index === -1) {
            return res.status(404).json({ error: 'Message not found' });
        }

        // Send Email
        const contact = messages[index];
        sendReplyEmail(contact, replyMessage, (emailErr) => {
            if (emailErr) {
                console.error("Email failed", emailErr);
                return res.status(500).json({ error: 'Failed to send email' });
            }

            // Update status to Replied
            messages[index].status = 'Replied';

            fs.writeFile(CONTACT_FILE, JSON.stringify(messages, null, 2), (writeErr) => {
                if (writeErr) {
                    return res.status(500).json({ error: 'Failed to update status' });
                }
                res.json({ message: 'Reply sent successfully!', contact: messages[index] });
            });
        });
    });
});

const sendReplyEmail = (contact, replyMessage, callback) => {
    const subject = `Re: ${contact.subject} - Restro.`;

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: #4CAF50;">Response from Restro.</h2>
            <p>Dear ${contact.firstName},</p>
            <p>${replyMessage}</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; color: #777; font-size: 13px;">
                <p><strong>Original Message:</strong></p>
                <p><em>"${contact.message}"</em></p>
            </div>

            <p>Best Regards,<br>Restro. Team</p>
        </div>
    `;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: contact.email,
        subject: subject,
        html: htmlContent
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            callback(error);
        } else {
            console.log('Reply Email sent:', info.response);
            callback(null);
        }
    });
};

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
