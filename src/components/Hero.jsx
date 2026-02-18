import React from 'react';
import './Hero.css';

const Hero = ({ title = "Book a Table", breadcrumbParent = "Home", breadcrumbCurrent = "Book a Table", bgImage }) => {
    return (
        <section
            className="hero"
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">{title}</h1>
                <div className="breadcrumbs">
                    <span>{breadcrumbParent}</span>
                    <span className="separator">|</span>
                    <span className="current">{breadcrumbCurrent}</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
