import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';
import './AboutUs.css';

// Import local images
import gallery1Img from '../assets/images/gallery-1.png';
import gallery2Img from '../assets/images/gallery-2.png';
import gallery3Img from '../assets/images/gallery-3.png';
import chefVikramImg from '../assets/images/chef-vikram.png';
import chefAditiImg from '../assets/images/chef-aditi.png';
import awardIcon from '../assets/images/award-icon.png';
import aboutHeroImg from '../assets/images/about-hero.png';
import interiorWideImg from '../assets/images/interior-wide.png';
import featureSteakImg from '../assets/images/feature-steak.png';
import chefPortraitImg from '../assets/images/chef-portrait.png';
import cuisineDetailImg from '../assets/images/cuisine-detail.png';



const AboutUs = () => {
    // FAQ State
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        { question: "How Do I Book A Table?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { question: "Does The Restaurant Have Private Dining Room?", answer: "Yes, we have two private dining rooms available for booking." },
        { question: "Is The Restaurant Wheelchair Accessible?", answer: "Yes, our entire establishment is wheelchair accessible." },
        { question: "Can I bring my own wine?", answer: "We have a corkage fee of $25 per bottle." }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <div className="about-page">
                <Hero
                    title="About Us"
                    breadcrumbParent="Home"
                    breadcrumbCurrent="About Us"
                />

                {/* Intro Section */}
                <section className="about-intro-section">
                    <div className="container">
                        <div className="intro-content-wrapper">
                            <div className="intro-image-col">
                                <div className="intro-image-wrapper">
                                    <img src={aboutHeroImg} alt="Dining Experience" />
                                    <div className="since-badge">
                                        <span>Since</span>
                                        <strong>1995</strong>
                                    </div>
                                    <div className="decorative-star star-1">✦</div>
                                    <div className="decorative-star star-2">✦</div>
                                </div>
                            </div>
                            <div className="intro-text-col">
                                <div className="section-header-left">
                                    <div className="header-icons-left">
                                        <span>♦</span><span>♦</span><span>♦</span>
                                    </div>
                                    <span className="section-tag">ABOUT US</span>
                                </div>
                                <h2 className="section-title">A Culinary Journey Through <br /><span className="highlight">India's Rich Heritage</span></h2>
                                <p className="section-desc">
                                    At Saffron & Spice, we believe that food is not just a meal, but a celebration of culture. For over three decades, we have been serving authentic Indian flavors, blending traditional recipes with modern elegance to create unforgettable dining experiences.
                                </p>
                                <div className="stats-row">
                                    <div className="stat-item">
                                        <h4>5-Star</h4>
                                        <p>Authentic Taste</p>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat-item">
                                        <h4>60,000+</h4>
                                        <p>Happy Guests</p>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="stat-item">
                                        <h4>99%</h4>
                                        <p>Guest Satisfaction</p>
                                    </div>
                                </div>
                                <div className="signature-area">
                                    <div className="signature">Anjali Gupta</div>
                                    <div className="signature-title">Anjali Gupta • Founder</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video / Feature Section */}
                <section className="feature-video-section">
                    <div className="container">
                        <div className="feature-grid">
                            <div className="feature-card orange-card">
                                <div className="feature-header">
                                    <div className="feature-icon">🚀</div>
                                    <h3>Our Vision</h3>
                                </div>
                                <p>To bring the true essence of Indian hospitality and cuisine to the world, creating a space where every guest feels like family.</p>
                            </div>
                            <div className="feature-card white-card">
                                <div className="feature-header">
                                    <div className="feature-icon">👁</div>
                                    <h3>Our Mission</h3>
                                </div>
                                <p>To encourage the exploration of Indian spices and flavors through innovative dishes that honor our culinary roots while embracing the future.</p>
                            </div>
                            <div className="feature-image-wide">
                                <img src={interiorWideImg} alt="Restaurant Vibe" />
                                <div className="play-button-overlay">▶</div>
                                <div className="video-stats-overlay">
                                    <div className="v-stat">
                                        <h4>150+</h4>
                                        <p>Team Members</p>
                                    </div>
                                    <div className="v-stat-divider"></div>
                                    <div className="v-stat">
                                        <h4>60,000+</h4>
                                        <p>Happy Guests</p>
                                    </div>
                                    <div className="v-stat-divider"></div>
                                    <div className="v-stat">
                                        <h4>99%</h4>
                                        <p>Guest Satisfaction</p>
                                    </div>
                                    <div className="v-stat-divider"></div>
                                    <div className="v-stat">
                                        <h4>18+</h4>
                                        <p>Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="why-choose-us-section">
                    <div className="container">
                        <div className="section-header text-center wcu-header-refined">
                            <div className="header-icons-center">
                                <span>♦</span><span>♦</span><span>♦</span>
                            </div>
                            <span className="section-tag">WHY CHOOSE US</span>
                            <h2 className="section-title">Why <span className="highlight">Dine With Us?</span></h2>
                        </div>

                        <div className="wcu-wrapper">
                            <div className="wcu-image-col">
                                <div className="wcu-images-container">
                                    <div className="wcu-img-1">
                                        <img src={featureSteakImg} alt="Dining" />
                                        <div className="review-badge-card">
                                            <div className="review-avatars">
                                                <img src={chefPortraitImg} alt="User" />
                                                <img src={chefVikramImg} alt="User" />
                                                <img src={chefAditiImg} alt="User" />
                                                <div className="add-avatar">+</div>
                                            </div>
                                            <div className="review-text">
                                                <span className="star-val">4.9 Star</span>
                                                <span className="review-label">Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wcu-img-2">
                                        <img src={cuisineDetailImg} alt="Cuisine" />
                                    </div>
                                </div>
                            </div>
                            <div className="wcu-text-col">
                                <p className="section-desc">
                                    We take pride in our meticulous attention to detail, from the selection of the freshest ingredients to the warm and welcoming atmosphere of our restaurant.
                                </p>

                                <div className="wcu-stats">
                                    <div className="wcu-stat-item">
                                        <h4>20+</h4>
                                        <p>Expert Chefs</p>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="wcu-stat-item">
                                        <h4>125+</h4>
                                        <p>Seating Options</p>
                                    </div>
                                    <div className="stat-divider"></div>
                                    <div className="wcu-stat-item">
                                        <h4>60+</h4>
                                        <p>Awards</p>
                                    </div>
                                </div>

                                <ul className="wcu-checklist">
                                    <li><span className="check-icon">✔</span> Luxurious AC Dining & Comfortable Seating</li>
                                    <li><span className="check-icon">✔</span> Unrivaled Service, Remarkable Experience</li>
                                    <li><span className="check-icon">✔</span> Where Comfort Meets Exquisite Cuisine</li>
                                </ul>

                                <button className="btn-primary wcu-btn">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="testimonials-section-dark">
                    <div className="container">
                        <div className="section-header text-center">
                            <div className="header-icons"><span>♦</span><span>♦</span><span>♦</span></div>
                            <div className="sub-title">TESTIMONIALS</div>
                            <h2 className="main-title">What Our Clients Say <span className="highlight">About Us</span></h2>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testi-card">
                                <div className="stars">★★★★★</div>
                                <p>"Everyone was friendly and the food was delicious!"</p>
                                <div className="user-profile">
                                    <img src={chefAditiImg} alt="User" />
                                    <div>
                                        <h5>Theresa Webb</h5>
                                        <span>Food Critic</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-card">
                                <div className="stars">★★★★★</div>
                                <p>"The most authentic Paneer Tikka I've tasted outside of Delhi. A must-visit!"</p>
                                <div className="user-profile">
                                    <img src={chefPortraitImg} alt="User" />
                                    <div>
                                        <h5>Priya Sharma</h5>
                                        <span>Food Blogger</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-card">
                                <div className="stars">★★★★★</div>
                                <p>"Incredible ambiance and the spices were perfectly balanced. Highly recommended."</p>
                                <div className="user-profile">
                                    <img src={chefVikramImg} alt="User" />
                                    <div>
                                        <h5>Rahul Verma</h5>
                                        <span>Regular Guest</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reservation */}
                <Reservation />

                {/* Awards */}
                <section className="awards-section">
                    <div className="container">
                        <div className="section-header text-center awards-header-refined">
                            <div className="header-icons-center">
                                <span>♦</span><span>♦</span><span>♦</span>
                            </div>
                            <span className="section-tag">OUR AWARD</span>
                            <h2 className="section-title">
                                Our Journey to <span className="highlight">Award</span>
                                <br />
                                <span className="highlight">Winning Success</span>
                            </h2>
                            <div className="bg-text-overlay">OUR AWARD</div>
                        </div>

                        <div className="awards-grid">
                            <div className="award-card active-card">
                                <div className="card-bg-num">01</div>
                                <div className="award-icon-wrapper">
                                    <img src={awardIcon} alt="Award" />
                                </div>
                                <h3>Best Indian Cuisine</h3>
                                <div className="award-year">2025</div>
                                <p>Recognized for authentic flavors and traditional cooking techniques.</p>
                            </div>
                            <div className="award-card">
                                <div className="card-bg-num">02</div>
                                <div className="award-icon-wrapper">
                                    <img src={awardIcon} alt="Award" />
                                </div>
                                <h3>Outstanding Chef Award</h3>
                                <div className="award-year">2024</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                            <div className="award-card">
                                <div className="card-bg-num">03</div>
                                <div className="award-icon-wrapper">
                                    <img src={awardIcon} alt="Award" />
                                </div>
                                <h3>Top-Rated Restaurant Award</h3>
                                <div className="award-year">2023</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                            <div className="award-card">
                                <div className="card-bg-num">04</div>
                                <div className="award-icon-wrapper">
                                    <img src={awardIcon} alt="Award" />
                                </div>
                                <h3>Professional Service</h3>
                                <div className="award-year">2022</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet The Chef (Preview) */}
                <section className="chef-preview-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <div className="sub-title">MEET THE CHEF</div>
                            <h2 className="main-title"><span className="highlight">The Master</span> Behind the Menu</h2>
                        </div>
                        <div className="chef-preview-grid">
                            <div className="chef-card-simple">
                                <img src={chefPortraitImg} alt="Chef" />
                                <h3>Leslie Alexander</h3>
                                <span>Executive Chef</span>
                            </div>
                            <div className="chef-card-simple">
                                <img src={chefVikramImg} alt="Chef" />
                                <h3>Robert Fox</h3>
                                <span>Sous Chef</span>
                            </div>
                            <div className="chef-card-simple">
                                <img src={chefAditiImg} alt="Chef" />
                                <h3>Esther Howard</h3>
                                <span>Pastry Chef</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Preview */}
                <section className="gallery-preview-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <div className="sub-title">OUR GALLERY</div>
                            <h2 className="main-title">Great <span className="highlight">Glimpse Our Dining Experience</span></h2>
                        </div>
                        <div className="gallery-preview-images">
                            <img src={gallery1Img} alt="Dining" />
                            <img src={gallery2Img} alt="Toast" />
                            <img src={gallery3Img} alt="Interior" />
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="faq-section">
                    <div className="container">
                        <div className="section-header text-center faq-header-refined">
                            <div className="header-icons-center">
                                <span>♦</span><span>♦</span><span>♦</span>
                            </div>
                            <span className="section-tag">FAQS</span>
                            <h2 className="section-title">Question? <span className="highlight">Look here.</span></h2>
                            <div className="bg-text-overlay">FAQS</div>
                        </div>

                        <div className="faq-wrapper">
                            <div className="faq-column">
                                <div className="faq-list">
                                    {faqs.map((faq, index) => (
                                        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => toggleFaq(index)}>
                                            <div className="faq-question">
                                                <h4>{faq.question}</h4>
                                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                                            </div>
                                            <div className="faq-answer">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="faq-sidebar">
                                <div className="faq-contact-card">
                                    <div className="chat-icon-wrapper">
                                        💬
                                    </div>
                                    <h3>You have different questions?</h3>
                                    <p>Our team will answer all your questions. We ensure a quick response.</p>
                                    <button className="btn-primary">Contact Us</button>
                                </div>
                                <div className="faq-service-card">
                                    <div className="service-icon">
                                        📞
                                    </div>
                                    <div>
                                        <span>Your Comfort, Our Priority</span>
                                        <h3>24/7 Service</h3>
                                        <p>(000) 000-0000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
