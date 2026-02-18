import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

import homeAboutImg from '../assets/images/home-about.png';
import gallery1Img from '../assets/images/gallery-1.png';
import gallery2Img from '../assets/images/gallery-2.png';
import gallery3Img from '../assets/images/gallery-3.png';
import chefVikramImg from '../assets/images/chef-vikram.png';
import chefAditiImg from '../assets/images/chef-aditi.png';
import chefRajeshImg from '../assets/images/chef-rajesh.png';

// Internal component for Menu Items to keep file clean
const MenuPreviewItemComponent = ({ image, name, price, desc, tag }) => {
    return (
        <div className="home-menu-item">
            <div className="h-item-thumb">
                <img src={image} alt={name} />
            </div>
            <div className="h-item-details">
                <div className="h-item-header">
                    <h4>{name}</h4>
                    <div className="h-spacer"></div>
                    <span className="h-price">{price}</span>
                </div>
                <p className="h-desc">{desc}</p>
                <div className="h-tag-row">
                    {tag && <span className="h-tag">{tag}</span>}
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <Header />

            {/* 1. Home Hero Section */}
            <section className="home-hero">
                <div className="home-hero-overlay"></div>

                {/* Rotating Badge */}
                <div className="hero-badge-container" onClick={() => navigate('/contact')}>
                    <div className="hero-badge-circle">
                        <svg viewBox="0 0 100 100" width="100" height="100">
                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                            <text fontSize="11" letterSpacing="2" fill="#fff">
                                <textPath href="#circlePath" startOffset="0%">
                                    GET IN TOUCH • GET IN TOUCH •
                                </textPath>
                            </text>
                        </svg>
                        <div className="badge-center-icon">
                            <span>↗</span>
                        </div>
                    </div>
                </div>

                <div className="container home-hero-content text-center">
                    <div className="hero-decor-wrapper">
                        <span className="decor-diamonds">♦ ♦ ♦</span>
                        <span className="hero-sub-tag">WHERE SPICE MEETS TRADITION</span>
                        <span className="decor-diamonds">♦ ♦ ♦</span>
                    </div>

                    <h1 className="home-hero-title">Authentic Indian Flavors & <br />Timeless Memories</h1>
                    <p className="home-hero-desc">Experience the true essence of India with our carefully crafted dishes, rich with aromatic spices and centuries of culinary heritage.</p>

                    <button className="book-btn hero-cta-btn" onClick={() => navigate('/menu')}>VIEW FULL MENU</button>

                    <div className="hero-decor-bottom">
                        <div className="scroll-indicator"></div>
                    </div>
                </div>
            </section>

            {/* 2. About Preview Section */}
            <section className="home-about-section">
                <div className="container">
                    <div className="home-about-wrapper">
                        <div className="about-img-col">
                            {/* Circular Image Layout */}
                            <div className="home-about-img-box circular-img">
                                <img src={homeAboutImg} alt="About Us" className="main-img" />
                            </div>
                        </div>
                        <div className="about-text-col">
                            <div className="section-header-left">
                                <div className="header-icons-left">
                                    <span>♦</span><span>♦</span><span>♦</span>
                                </div>
                                <span className="section-tag">ABOUT US</span>
                            </div>
                            <h2 className="section-title">A Culinary Journey Through <br /><span className="highlight">India's Rich Heritage</span></h2>
                            <p className="section-desc">At Saffron & Spice, we bring you the vibrant flavors of India. Our chefs champion locally sourced ingredients and authentic spices to create dishes that tell a story of tradition and innovation. From the clay ovens of Punjab to the coastal curries of Kerala, experience a symphony of taste.</p>

                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <h4>25+</h4>
                                    <span>Years of Excellence</span>
                                </div>
                                <div className="highlight-item">
                                    <h4>150+</h4>
                                    <span>Vibrant Dishes</span>
                                </div>
                                <div className="highlight-item">
                                    <h4>95%</h4>
                                    <span>Satisfaction</span>
                                </div>
                            </div>

                            <button className="book-btn" onClick={() => navigate('/about')} style={{ background: 'transparent', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Featured Menu Section */}
            <section className="home-menu-section text-center">
                <div className="container">
                    <div className="header-icons-center">
                        <span>♦</span><span>♦</span><span>♦</span>
                    </div>
                    <div className="section-tag" style={{ marginTop: '10px' }}>FOOD MENU</div>
                    <h2 className="section-title">Our <span className="highlight">Signature Dishes</span></h2>

                    <div className="home-menu-grid">
                        {/* Column 1 */}
                        <div className="home-menu-col">
                            <div className="home-menu-items">
                                <MenuPreviewItemComponent
                                    image="/assets/paneer-butter-masala.png"
                                    name="Paneer Butter Masala"
                                    price="₹380"
                                    desc="Fresh cottage cheese simmered in a rich, creamy tomato and butter sauce."
                                    tag="POPULAR"
                                />
                                <MenuPreviewItemComponent
                                    image="/assets/veg-biryani.png"
                                    name="Vegetable Dum Biryani"
                                    price="₹420"
                                    desc="Fragrant basmati rice cooked with seasonal vegetables and exotic spices."
                                    tag=""
                                />
                                <MenuPreviewItemComponent
                                    image="/assets/paneer-tikka.png"
                                    name="Paneer Tikka"
                                    price="₹350"
                                    desc="Grilled cottage cheese cubes marinated in yogurt and spices."
                                    tag="VEG"
                                />
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="home-menu-col">
                            <div className="home-menu-items" style={{ marginTop: '0px' }}>
                                <MenuPreviewItemComponent
                                    image="/assets/masala-dosa.png"
                                    name="Masala Dosa"
                                    price="₹250"
                                    desc="Crispy rice crepe filled with spiced potato masala, served with chutney."
                                    tag="SOUTH INDIAN"
                                />
                                <MenuPreviewItemComponent
                                    image="/assets/mushroom-rogan-josh.png"
                                    name="Mushroom Rogan Josh"
                                    price="₹450"
                                    desc="Aromatic Kashmiri mushroom curry with vibrant red chili and yogurt sauce."
                                    tag="SPICY"
                                />
                                <MenuPreviewItemComponent
                                    image={gallery1Img}
                                    name="Garlic Naan"
                                    price="₹80"
                                    desc="Soft Indian bread baked in a clay oven, brushed with garlic butter."
                                    tag=""
                                />
                            </div>
                        </div>
                    </div>
                    <button className="book-btn" onClick={() => navigate('/menu')} style={{ marginTop: '40px', background: 'var(--color-primary)', color: '#fff', border: 'none' }}>View Full Menu</button>
                </div>
            </section>


            {/* 4. Why Choose Us */}
            <section className="home-wcu-section">
                <div className="container text-center">
                    <div className="header-icons-center">
                        <span>♦</span><span>♦</span><span>♦</span>
                    </div>
                    <div className="section-tag">WHY CHOOSE US</div>
                    <h2 className="section-title">Experience <span className="highlight">The Best</span></h2>

                    <div className="wcu-grid">
                        <div className="wcu-card">
                            <span className="wcu-icon">🌿</span>
                            <h4>Fresh Ingredients</h4>
                            <p>Locally sourced, daily prepared ingredients for the freshest taste.</p>
                        </div>
                        <div className="wcu-card">
                            <span className="wcu-icon">👨‍🍳</span>
                            <h4>Expert Chefs</h4>
                            <p>Award-winning culinary team bringing global flavors to your plate.</p>
                        </div>
                        <div className="wcu-card">
                            <span className="wcu-icon">🕯️</span>
                            <h4>Perfect Ambience</h4>
                            <p>Romantic & modern atmosphere designed for unforgettable moments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Reservation CTA Banner */}
            <section className="home-reservation-banner">
                <div className="container res-banner-content">
                    <h2>Dine With Us – Reserve Your Table Today</h2>
                    <button className="book-btn" onClick={() => navigate('/book-table')} style={{ background: 'var(--color-primary)', color: '#fff', border: 'none' }}>Reserve Now</button>
                </div>
            </section>

            {/* 6. Meet The Chef Section */}
            <section className="home-chef-section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="header-icons-center">
                            <span>♦</span><span>♦</span><span>♦</span>
                        </div>
                        <div className="section-tag">OUR CHEFS</div>
                        <h2 className="section-title">The <span className="highlight">Masters Behind Our Menu</span></h2>
                    </div>
                    <div className="home-chef-grid">
                        <div className="chef-card">
                            <div className="chef-img-box">
                                <img src={chefVikramImg} alt="Chef" />
                                <div className="chef-socials">
                                    <span>FB</span><span>TW</span><span>IG</span>
                                </div>
                            </div>
                            <h3>Vikram Oberoi</h3>
                            <span className="chef-role">EXECUTIVE CHEF</span>
                        </div>
                        <div className="chef-card">
                            <div className="chef-img-box">
                                <img src={chefAditiImg} alt="Chef" />
                                <div className="chef-socials">
                                    <span>FB</span><span>TW</span><span>IG</span>
                                </div>
                            </div>
                            <h3>Aditi Sharma</h3>
                            <span className="chef-role">HEAD OF CURRIES</span>
                        </div>
                        <div className="chef-card">
                            <div className="chef-img-box">
                                <img src={chefRajeshImg} alt="Chef" />
                                <div className="chef-socials">
                                    <span>FB</span><span>TW</span><span>IG</span>
                                </div>
                            </div>
                            <h3>Rajesh Kumar</h3>
                            <span className="chef-role">TANDOOR MASTER</span>
                        </div>
                    </div>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <button className="book-btn" onClick={() => navigate('/chefs')} style={{ background: 'transparent', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>View All Chefs</button>
                    </div>
                </div>
            </section>

            {/* 7. Gallery Preview */}
            <section className="home-gallery-section">
                <div className="container">
                    <div className="header-icons-center">
                        <span>♦</span><span>♦</span><span>♦</span>
                    </div>
                    <div className="section-tag">GALLERY</div>
                    <h2 className="section-title">A Glimpse of Our <span className="highlight">Dining Experience</span></h2>

                    <div className="gallery-grid-home">
                        <div className="gallery-item-home"><img src={gallery1Img} alt="Gallery" /></div>
                        <div className="gallery-item-home"><img src={gallery2Img} alt="Gallery" /></div>
                        <div className="gallery-item-home"><img src={gallery3Img} alt="Gallery" /></div>
                        <div className="gallery-item-home"><img src={gallery1Img} alt="Gallery" /></div>
                        <div className="gallery-item-home"><img src={gallery2Img} alt="Gallery" /></div>
                        <div className="gallery-item-home"><img src={gallery3Img} alt="Gallery" /></div>
                    </div>
                    <button className="book-btn" onClick={() => navigate('/gallery')} style={{ background: 'var(--color-primary)', color: '#fff', border: 'none' }}>View Gallery</button>
                </div>
            </section>

            {/* 8. Testimonials Section */}
            <section className="home-testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="header-icons-center">
                            <span>♦</span><span>♦</span><span>♦</span>
                        </div>
                        <div className="section-tag">TESTIMONIALS</div>
                        <h2 className="section-title" style={{ color: '#fff' }}>What Our Clients Say <br /><span className="highlight">About Us</span></h2>
                    </div>
                    <div className="testi-grid">
                        <div className="testi-card-home">
                            <div className="stars">★★★★★</div>
                            <p>"The most authentic Indian food I've had. The paneer butter masala is absolute perfection, and the ambiance makes it a night to remember."</p>
                            <div className="testi-user">
                                <img src={chefVikramImg} alt="User" />
                                <div className="testi-info">
                                    <h4>Arjun Patel</h4>
                                    <span>Food Critic</span>
                                </div>
                                <span className="quote-icon">“</span>
                            </div>
                        </div>
                        <div className="testi-card-home">
                            <div className="stars">★★★★★</div>
                            <p>"A gem of a restaurant! The spices are perfectly balanced, and the service is warm and welcoming. Highly recommend the Biryani."</p>
                            <div className="testi-user">
                                <img src={chefAditiImg} alt="User" />
                                <div className="testi-info">
                                    <h4>Sarah Jenkins</h4>
                                    <span>Regular Guest</span>
                                </div>
                                <span className="quote-icon">“</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Contact & Footer CTA */}
            <section className="home-contact-cta">
                <div className="container cta-content">
                    <div>
                        <h2 style={{ fontSize: '40px', lineHeight: '1.2' }}>Ready for an <br /><span className="highlight">Unforgettable Meal?</span></h2>
                        <p style={{ marginTop: '15px', color: 'rgba(255,255,255,0.8)' }}>Book your table now and experience the taste of excellence.</p>
                    </div>
                    <button className="book-btn" onClick={() => navigate('/book-table')} style={{ background: 'var(--color-primary)', color: '#fff', border: 'none' }}>Book a Table</button>
                </div>
            </section>

            {/* Follow Us Section */}
            <section className="home-follow-section text-center">
                <div className="container">
                    <div className="header-icons-center">
                        <span>♦</span><span>♦</span><span>♦</span>
                    </div>
                    <div className="section-tag" style={{ marginTop: '10px' }}>FOLLOW US</div>
                    <h2 className="section-title">Follow Us On <span className="highlight">Instagram</span></h2>
                    <div className="insta-grid">
                        <img src={gallery1Img} alt="Insta" />
                        <img src={gallery2Img} alt="Insta" />
                        <img src={gallery3Img} alt="Insta" />
                        <img src={gallery1Img} alt="Insta" />
                        <img src={gallery2Img} alt="Insta" />
                        <img src={gallery3Img} alt="Insta" />
                    </div>
                    <button className="book-btn" style={{ marginTop: '40px', background: 'var(--color-primary)', color: '#fff', border: 'none' }}>FOLLOW US</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
