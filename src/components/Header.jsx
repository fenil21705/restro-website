import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <div className="logo-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 5C17.6569 5 19 6.34315 19 8C19 9.17 18.34 10.18 17.39 10.71C17.77 11.23 18 11.85 18 12.5V17H6V12.5C6 11.85 6.23 11.23 6.61 10.71C5.66 10.18 5 9.17 5 8C5 6.34315 6.34315 5 8 5C8.32 5 8.63 5.06 8.91 5.18C9.34 3.9 10.56 3 12 3C13.44 3 14.66 3.9 15.09 5.18C15.37 5.06 15.68 5 16 5ZM6 19H18V21H6V19Z" />
                        </svg>
                    </div>
                    <div className="logo-text">
                        <span className="logo-main">Restro.</span>
                        <span className="logo-sub">RESTAURANT</span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
                        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
                        <li><Link to="/chefs" onClick={() => setIsMenuOpen(false)}>Our Chefs</Link></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                        {/* Mobile Only CTA in Nav */}
                        <li className="mobile-only-cta">
                            <Link to="/book-table" className="book-btn-mobile" onClick={() => setIsMenuOpen(false)}>Book A Table</Link>
                        </li>
                    </ul>
                </nav>

                <div className="header-right">
                    <Link to="/book-table" className="book-btn">Book A Table</Link>
                </div>

                {/* Overlay for mobile menu */}
                {isMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
            </div>
        </header>
    );
};

export default Header;
