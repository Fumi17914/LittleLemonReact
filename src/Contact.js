import React from 'react';
import './Contact.css';
import './Header.js'

const Contact = () => {
  return (
    <div id="contact" className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us:</p>
      <ul>
        <li>Email: contact@littlelemon.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Lemon Street, Citrus City, CC 12345</li>
      </ul>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
