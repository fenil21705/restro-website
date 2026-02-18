import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top-overlay"></div> {/* For the ripped paper effect if needed, or simple curve */}
            <div className="container footer-content">
                <div className="footer-col">
                    <div className="footer-logo">
                        <div className="logo-icon-small">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}>
                                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                                <line x1="6" y1="17" x2="18" y2="17" />
                            </svg>
                        </div>
                        <div className="logo-text-col">
                            <span className="logo-main">Restro.</span>
                            <span className="logo-sub">RESTAURANT</span>
                        </div>
                    </div>
                    <p className="footer-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                    <div className="footer-socials">
                        <span className="f-icon">f</span>
                        <span className="f-icon">t</span>
                        <span className="f-icon">p</span>
                        <span className="f-icon">i</span>
                        <span className="f-icon">y</span>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Links</h3>
                    <ul className="footer-links">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Our Staff</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <ul className="contact-list">
                        <li>(000) 000-0000</li>
                        <li>example@gmail.com</li>
                        <li>PP Savani University</li>
                    </ul>
                </div>

                <div className="footer-col newsletter-col">
                    <h3>Get the latest information</h3>
                    <div className="newsletter-box">
                        <input type="email" placeholder="Email address" />
                        <button className="send-btn">➤</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <span>Copyright © 2025 <span className="highlight">Restro.</span> Website. All Rights Reserved.</span>
                    <div className="bottom-links">
                        <a href="#">User Terms & Conditions</a> | <a href="#">Privacy Policy</a> | <Link to="/admin">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
