import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
    return (
        <>
            <Header />
            <Hero title="Gallery" breadcrumbCurrent="Gallery" />
            <GalleryGrid />
            <Footer />
        </>
    );
};

export default Gallery;
