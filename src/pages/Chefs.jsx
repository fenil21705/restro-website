import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Chefs.css';

import chefVikramImg from '../assets/images/chef-vikram.png';
import chefAditiImg from '../assets/images/chef-aditi.png';
import chefRajeshImg from '../assets/images/chef-rajesh.png';

const Chefs = () => {
    const [visibleChefs, setVisibleChefs] = useState(6);

    const chefs = [
        {
            id: 1,
            name: "Vikram Oberoi",
            role: "Executive Chef",
            image: "/assets/chef-vikram.png"
        },
        {
            id: 2,
            name: "Aditi Sharma",
            role: "Head of Curries",
            image: "/assets/chef-aditi.png"
        },
        {
            id: 3,
            name: "Rajesh Kumar",
            role: "Tandoor Master",
            image: "/assets/chef-rajesh.png"
        },
        {
            id: 4,
            name: "Ananya Patel",
            role: "Chef de Cuisine",
            image: chefAditiImg
        },
        {
            id: 5,
            name: "Sanjay Singh",
            role: "Sous Chef",
            image: chefVikramImg
        },
        {
            id: 6,
            name: "Meera Reddy",
            role: "Pastry Chef",
            image: chefAditiImg
        },
        {
            id: 7,
            name: "Arjun Das",
            role: "Chef de Cuisine",
            image: chefRajeshImg
        },
        {
            id: 8,
            name: "Priya Nair",
            role: "Sous Chef",
            image: chefAditiImg
        },
        {
            id: 9,
            name: "Karan Malhotra",
            role: "Pastry Chef",
            image: chefVikramImg
        }
    ];

    const handleLoadMore = () => {
        setVisibleChefs(prev => prev + 3);
    };

    return (
        <>
            <Header />
            <div className="chefs-page">
                <Hero
                    title="Our Chef"
                    breadcrumbParent="Home"
                    breadcrumbCurrent="Our Chef"
                />

                <section className="chefs-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <div className="header-content">
                                <div className="header-icons">
                                    <span>♦</span><span>♦</span><span>♦</span>
                                </div>
                                <div className="sub-title">MEET THE CHEF</div>
                                <h2 className="main-title"><span className="highlight">The Master</span> Behind the Menu</h2>
                            </div>
                        </div>

                        <div className="chefs-grid">
                            {chefs.slice(0, visibleChefs).map((chef) => (
                                <div className="chef-card" key={chef.id}>
                                    <div className="chef-image-wrapper">
                                        <img src={chef.image} alt={chef.name} className="chef-image" />
                                        <div className="chef-social-overlay">
                                            {/* Facebook */}
                                            <a href="#" className="social-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                            </a>
                                            {/* Twitter/X - Using generic shape or specific if available, here using simple path */}
                                            <a href="#" className="social-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                            </a>
                                            {/* Pinterest */}
                                            <a href="#" className="social-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.493-.69-2.433-2.864-2.433-4.624 0-3.761 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.83 0 4.056-2.553 7.327-6.095 7.327-1.192 0-2.317-.619-2.702-1.352l-.734 2.796c-.266 1.036-.989 2.336-1.472 3.033 1.1.332 2.29.512 3.518.512 6.627 0 12.001-5.368 12.001-11.987C24.018 5.367 18.646 0 12.017 0z" /></svg>
                                            </a>
                                            {/* Instagram */}
                                            <a href="#" className="social-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="chef-info text-center">
                                        <h3 className="chef-name">{chef.name}</h3>
                                        <p className="chef-role">{chef.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center" style={{ marginTop: '60px' }}>
                            {visibleChefs < chefs.length && (
                                <button className="load-more-btn" onClick={handleLoadMore}>
                                    LOAD MORE
                                </button>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Chefs;
