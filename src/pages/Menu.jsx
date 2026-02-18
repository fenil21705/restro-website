import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Menu.css';

import gulabJamunImg from '../assets/images/dessert-gulab-jamun.png';
import masalaChaiImg from '../assets/images/masala-chai.png';
import gallery1Img from '../assets/images/gallery-1.png';
import gallery2Img from '../assets/images/gallery-2.png';
import gallery3Img from '../assets/images/gallery-3.png';


const Menu = () => {
    return (
        <div className="menu-page">
            <Header />
            <Hero
                title="Our Menu"
                breadcrumbCurrent="Menu"
            />

            <section className="menu-intro-section text-center">
                <div className="container">
                    <div className="header-icons-center">
                        <span>♦</span><span>♦</span><span>♦</span>
                    </div>
                    <div className="menu-intro-tag">FOOD MENU</div>
                    <h2 className="menu-intro-title">Timeless <span className="highlight">Culinary Delights</span></h2>
                </div>
            </section>

            {/* Menu Sections */}
            <div className="menu-sections-container">
                {/* 1. Starters & Appetizers */}
                <section className="menu-section">
                    <div className="container">
                        <div className="ribbon-wrapper">
                            <div className="ribbon-header">Starters & Appetizers</div>
                        </div>
                        <div className="menu-content-grid">
                            <div className="menu-items-col">
                                <MenuItem
                                    image="/assets/veg-samosa.png"
                                    name="Vegetable Samosa"
                                    desc="Crispy pastry filled with spiced potatoes and peas."
                                    price="₹150"
                                    tag="CLASSIC"
                                />
                                <MenuItem
                                    image="/assets/paneer-tikka.png"
                                    name="Paneer Tikka"
                                    desc="Cottage cheese cubes marinated in yogurt and spices, grilled to perfection."
                                    price="₹320"
                                    tag="POPULAR"
                                />
                                <MenuItem
                                    image="/assets/onion-bhaji.png"
                                    name="Onion Bhaji"
                                    desc="Crispy onion fritters served with tamarind chutney."
                                    price="₹180"
                                    tag=""
                                />
                                <MenuItem
                                    image="/assets/papdi-chaat.png"
                                    name="Papdi Chaat"
                                    desc="Street food snack with crispy wafers, chickpeas, yogurt, and chutney."
                                    price="₹160"
                                    tag="STREET FOOD"
                                />
                                <MenuItem
                                    image="/assets/paneer-tikka.png"
                                    name="Paneer Tikka"
                                    desc="Fresh cottage cheese cubes marinated in spices and yogurt, roasted in tandoor."
                                    price="₹350"
                                    tag="CHEF SPECIAL"
                                />
                            </div>
                            <div className="menu-image-col">
                                <div className="menu-arch-image">
                                    <img src="/assets/veg-samosa.png" alt="Starters" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Main Course (Reversed) */}
                <section className="menu-section section-reversed">
                    <div className="container">
                        <div className="ribbon-wrapper right-ribbon">
                            <div className="ribbon-header">Main Course</div>
                        </div>
                        <div className="menu-content-grid">
                            <div className="menu-image-col">
                                <div className="menu-arch-image">
                                    <img src="/assets/dal-makhani.png" alt="Main Course" />
                                </div>
                            </div>
                            <div className="menu-items-col">
                                <MenuItem
                                    image="/assets/paneer-butter-masala.png"
                                    name="Paneer Butter Masala"
                                    desc="Cottage cheese cubes in a rich, mildly spiced tomato cream sauce."
                                    price="₹380"
                                    tag="BESTSELLER"
                                />
                                <MenuItem
                                    image="/assets/dal-makhani.png"
                                    name="Dal Makhani"
                                    desc="Whole black lentils cooked with butter and cream."
                                    price="₹340"
                                    tag="VEG"
                                />
                                <MenuItem
                                    image="/assets/veg-biryani.png"
                                    name="Vegetable Biryani"
                                    desc="Aromatic basmati rice cooked with mixed vegetables and exotic spices."
                                    price="₹420"
                                    tag="MUST TRY"
                                />
                                <MenuItem
                                    image="/assets/palak-paneer.png"
                                    name="Palak Paneer"
                                    desc="Cottage cheese in a smooth spinach gravy."
                                    price="₹360"
                                    tag=""
                                />
                                <MenuItem
                                    image="/assets/garlic-naan.png"
                                    name="Garlic Naan"
                                    desc="Leavened bread baked in a clay oven with garlic."
                                    price="₹80"
                                    tag=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Desserts */}
                <section className="menu-section">
                    <div className="container">
                        <div className="ribbon-wrapper">
                            <div className="ribbon-header">Desserts</div>
                        </div>
                        <div className="menu-content-grid">
                            <div className="menu-items-col">
                                <MenuItem
                                    image={gulabJamunImg}
                                    name="Gulab Jamun"
                                    desc="Fried dough balls soaked in sweet rose syrup."
                                    price="₹120"
                                    tag="CLASSIC"
                                />
                                <MenuItem
                                    image={gallery1Img}
                                    name="Rasmalai"
                                    desc="Soft cottage cheese dumplings in sweetened milk."
                                    price="₹150"
                                    tag="POPULAR"
                                />
                                <MenuItem
                                    image={gallery2Img}
                                    name="Gajar Ka Halwa"
                                    desc="Warm carrot pudding with nuts and cardamom."
                                    price="₹140"
                                    tag="SEASONAL"
                                />
                                <MenuItem
                                    image={gallery3Img}
                                    name="Pista Kulfi"
                                    desc="Traditional Indian ice cream with pistachios."
                                    price="₹100"
                                    tag=""
                                />
                                <MenuItem
                                    image={gulabJamunImg}
                                    name="Mango Cheese Cake"
                                    desc="Fusion dessert with Alphonso mango pulp."
                                    price="₹280"
                                    tag="CHEF SPECIAL"
                                />
                            </div>
                            <div className="menu-image-col">
                                <div className="menu-arch-image">
                                    <img src={gulabJamunImg} alt="Desserts" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Beverages (Reversed) */}
                <section className="menu-section section-reversed">
                    <div className="container">
                        <div className="ribbon-wrapper right-ribbon">
                            <div className="ribbon-header">Beverages</div>
                        </div>
                        <div className="menu-content-grid">
                            <div className="menu-image-col">
                                <div className="menu-arch-image">
                                    <img src={masalaChaiImg} alt="Beverages" />
                                </div>
                            </div>
                            <div className="menu-items-col">
                                <MenuItem
                                    image={masalaChaiImg}
                                    name="Mango Lassi"
                                    desc="Yogurt-based drink blended with mango pulp."
                                    price="₹120"
                                    tag="REFRESHING"
                                />
                                <MenuItem
                                    image={masalaChaiImg}
                                    name="Masala Chai"
                                    desc="Spiced Indian tea brewed with milk and ginger."
                                    price="₹60"
                                    tag="HOT"
                                />
                                <MenuItem
                                    image={gallery1Img}
                                    name="Thandai"
                                    desc="Cooling milk drink with nuts and saffron."
                                    price="₹180"
                                    tag="HOLI SPECIAL"
                                />
                                <MenuItem
                                    image={gallery2Img}
                                    name="Fresh Lime Soda"
                                    desc="Sweet or salted sparkling lime juice."
                                    price="₹80"
                                    tag=""
                                />
                                <MenuItem
                                    image={gallery3Img}
                                    name="Indian Coffee"
                                    desc="Filter coffee served hot and frothy."
                                    price="₹90"
                                    tag=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center" style={{ marginBottom: '80px' }}>
                    <button className="book-btn" style={{ background: 'transparent', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>LOAD MORE</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const MenuItem = ({ image, name, desc, price, tag }) => {
    return (
        <div className="menu-item-card">
            <div className="item-thumb">
                <img src={image} alt={name} />
            </div>
            <div className="item-details">
                <div className="item-header">
                    <h4 className="item-name">{name}</h4>
                    <div className="item-spacer"></div>
                    <span className="item-price">{price}</span>
                </div>
                <p className="item-desc">{desc}</p>
                <div className="item-footer">
                    {tag && <span className="item-tag">{tag}</span>}
                </div>
            </div>
        </div>
    );
};

export default Menu;
