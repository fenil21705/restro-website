import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message Sent Successfully!' });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'error', message: 'Server error. Please ensure backend is running.' });
        }
    };

    return (
        <>
            <Header />
            <div className="contact-page">
                <Hero
                    title="Contact Us"
                    breadcrumbParent="Home"
                    breadcrumbCurrent="Contact Us"
                />

                <section className="contact-section">
                    <div className="container">
                        {/* Section Header */}
                        <div className="section-header text-center">
                            <div className="header-content">
                                <div className="header-icons">
                                    <span>♦</span><span>♦</span><span>♦</span>
                                </div>
                                <div className="sub-title">CONTACT US</div>
                                <h2 className="main-title">Get in <span className="highlight">Touch with Us</span></h2>
                            </div>
                        </div>

                        {/* Content Area: Form + Image */}
                        <div className="contact-content">
                            {/* Left: Form */}
                            <div className="contact-form-container">
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    {status.message && (
                                        <div className={`form-status ${status.type}`} style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', textAlign: 'center', backgroundColor: status.type === 'success' ? '#d4edda' : status.type === 'error' ? '#f8d7da' : '#e2e3e5', color: status.type === 'success' ? '#155724' : status.type === 'error' ? '#721c24' : '#383d41' }}>
                                            {status.message}
                                        </div>
                                    )}

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>First Name *</label>
                                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Ex. John" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name *</label>
                                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Ex. Doe" required />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email *</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone *</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Subject *</label>
                                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter here.." required />
                                    </div>

                                    <div className="form-group">
                                        <label>Your Message *</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter here.." required></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary submit-btn">Send a Message</button>
                                </form>
                            </div>

                            {/* Right: Image */}
                            <div className="contact-image-container">
                                <img
                                    src="/assets/reservation-bg.png"
                                    alt="Dining Experience"
                                    className="contact-feature-image"
                                />
                                {/* Decorative sparkle placeholder */}
                                {/* Decorative sparkles */}
                                <div className="decorative-sparkles">
                                    <svg className="sparkle-lg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C12 0 13.5 8.5 24 12C13.5 15.5 12 24 12 24C12 24 10.5 15.5 0 12C10.5 8.5 12 0 12 0Z" />
                                    </svg>
                                    <svg className="sparkle-md" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C12 0 13.5 8.5 24 12C13.5 15.5 12 24 12 24C12 24 10.5 15.5 0 12C10.5 8.5 12 0 12 0Z" />
                                    </svg>
                                    <svg className="sparkle-sm" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C12 0 13.5 8.5 24 12C13.5 15.5 12 24 12 24C12 24 10.5 15.5 0 12C10.5 8.5 12 0 12 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="info-cards-grid">
                            <div className="info-card-item">
                                <div className="icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <h3>Address</h3>
                                <p>PP Savani University</p>
                            </div>

                            <div className="info-card-item">
                                <div className="icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.35-.63.24-1.01a17.58 17.58 0 0 1-.56-3.53c-.06-.55-.52-.97-1.07-.97H4.49c-.58 0-1.05.47-1.04 1.05C3.56 14.15 12.85 23.44 22.95 22.5c.58.01 1.05-.46 1.05-1.04v-3.41c0-.55-.42-1.01-.97-1.07z" />
                                    </svg>
                                </div>
                                <h3>Phone</h3>
                                <p>+0123-456-789</p>
                            </div>

                            <div className="info-card-item">
                                <div className="icon-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <h3>Email</h3>
                                <p>example@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <div className="map-section">
                    <div className="container">
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=PP+Savani+University&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="450"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Restaurant Location"
                            ></iframe>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
