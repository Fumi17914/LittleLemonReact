import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainContent from './Maincontent';
import Footer from './Footer';
import Contact from './Contact';
import Book from './Book'
import About from './About'
import Menu from './Menu'
import './App.css';

function App() {
  
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<MainContent />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;


