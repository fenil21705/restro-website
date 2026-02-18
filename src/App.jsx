import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookTable from './pages/BookTable';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

import Chefs from './pages/Chefs';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/chefs" element={<Chefs />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
