import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Little Lemon</div>
      <button 
        className="menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        ☰
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
        <li><Link to="/home">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/book">Book a Table</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


