import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: 'Select',
        date: '',
        time: '',
        requests: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Booking your table...' });

        try {
            const response = await fetch('http://localhost:5000/api/reserve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Table Booked Successfully! We will confirm via email.' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    guests: 'Select',
                    date: '',
                    time: '',
                    requests: ''
                });
            } else {
                setStatus({ type: 'error', message: 'Booking failed. Please try again.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'error', message: 'Server error. Please ensure backend is running.' });
        }
    };

    return (
        <section className="reservation-section">
            <div className="container">
                <div className="section-header text-center">

                    <div className="header-content">
                        <div className="header-icons">
                            <span>♦</span><span>♦</span><span>♦</span>
                        </div>
                        <div className="sub-title">RESERVE A TABLE</div>
                        <h2 className="main-title">Dine With Us <span className="highlight">— Reserve Now</span></h2>
                    </div>
                </div>

                <div className="reservation-content">
                    {/* Left Side: Form */}
                    <div className="reservation-form-container">
                        <form className="reservation-form" onSubmit={handleSubmit}>
                            {status.message && (
                                <div className={`form-status ${status.type}`} style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', textAlign: 'center', backgroundColor: status.type === 'success' ? '#d4edda' : status.type === 'error' ? '#f8d7da' : '#e2e3e5', color: status.type === 'success' ? '#155724' : status.type === 'error' ? '#721c24' : '#383d41' }}>
                                    {status.message}
                                </div>
                            )}

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name *</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ex. John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone Number*</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <label>Number of Guests*</label>
                                    <select name="guests" value={formData.guests} onChange={handleChange} required>
                                        <option value="Select" disabled>Select</option>
                                        <option value="2 People">2 People</option>
                                        <option value="3 People">3 People</option>
                                        <option value="4 People">4 People</option>
                                        <option value="5+ People">5+ People</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date of Reservation*</label>
                                    <div className="input-with-icon">
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="date-input"
                                            onClick={(e) => e.target.showPicker()}
                                            required
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Time of Reservation*</label>
                                    <div className="input-with-icon">
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="time-input"
                                            onClick={(e) => e.target.showPicker()}
                                            required
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Special Requests</label>
                                <textarea name="requests" value={formData.requests} onChange={handleChange} placeholder="Enter Here"></textarea>
                            </div>

                            <button type="submit" className="btn-primary submit-btn">BOOK A TABLE</button>
                        </form>
                    </div>

                    {/* Right Side: Info Card */}
                    <div className="info-card">
                        {/* Background decorative patterns could be added via CSS */}
                        <div className="info-item">
                            <h3>Address</h3>
                            <p>Saffron & Spice Restaurant</p>
                            <p>123, Food Street, New Delhi, India</p>
                        </div>

                        <div className="info-item">
                            <h3>Contact</h3>
                            <p>Phone : +91 98765 43210</p>
                            <p>Email : reservations@saffronspice.in</p>
                        </div>

                        <div className="info-item">
                            <h3>Open Time</h3>
                            <p>Monday - Friday <span className="time-range">: 11:00 AM - 10:00 PM</span></p>
                            <p>Saturday - Sunday <span className="time-range">: 09:00 AM - 11:00 PM</span></p>
                        </div>

                        <div className="info-item">
                            <h3>Stay Connected</h3>
                            <div className="social-icons">
                                <a href="#" className="social-icon facebook">f</a>
                                <a href="#" className="social-icon twitter">t</a>
                                <a href="#" className="social-icon pinterest">p</a>
                                <a href="#" className="social-icon instagram">i</a>
                                <a href="#" className="social-icon youtube">y</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
