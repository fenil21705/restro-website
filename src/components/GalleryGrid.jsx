import React, { useState } from 'react';
import './GalleryGrid.css';

const GalleryGrid = () => {
    // Extended list of images to demonstrate Load More
    const allImages = [
        "/assets/home-hero.png",
        "/assets/paneer-butter-masala.png",
        "/assets/veg-biryani.png",
        "/assets/masala-dosa.png",
        "/assets/paneer-tikka.png",
        "/assets/mushroom-rogan-josh.png",
        "/assets/dal-makhani.png",
        "/assets/palak-paneer.png",
        "/assets/veg-samosa.png",
        "/assets/onion-bhaji.png",
        "/assets/papdi-chaat.png",
        "/assets/reservation-bg.png",
        "/assets/garlic-naan.png",
        "/assets/about-hero.png"
    ];

    const [visibleCount, setVisibleCount] = useState(10); // Initial 10 images match the pattern

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4); // Load 4 more at a time
    };

    // Helper to determine span based on pattern: 3 - 2 - 2 - 3
    // Indices:
    // 0, 1, 2 -> span 2 (in 6 col grid)
    // 3, 4    -> span 3
    // 5, 6    -> span 3
    // 7, 8, 9 -> span 2
    // Pattern repeats every 10? Or just manual for now.
    // 10, 11 (if 2) -> span 3
    const getSpanClass = (index) => {
        const patternIndex = index % 10;
        if (patternIndex >= 3 && patternIndex <= 6) {
            return 'span-3'; // Wide
        }
        return 'span-2'; // Normal
    };

    return (
        <section className="gallery-section">
            <div className="section-header text-center">

                <div className="header-content">
                    <div className="header-icons">
                        <span>♦</span><span>♦</span><span>♦</span>
                    </div>
                    <div className="sub-title">GALLERY</div>
                    <h2 className="main-title"><span className="highlight">Image</span> Gallery</h2>
                </div>
            </div>

            <div className="container">
                <div className="gallery-grid">
                    {allImages.slice(0, visibleCount).map((img, index) => (
                        <div key={index} className={`gallery-item ${getSpanClass(index)}`}>
                            <img src={img} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {visibleCount < allImages.length && (
                    <div className="text-center mt-4">
                        <button
                            className="btn-primary load-more-btn"
                            onClick={handleLoadMore}
                        >
                            LOAD MORE
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GalleryGrid;
