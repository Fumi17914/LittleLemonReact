import React, { useState } from 'react';
import './Book.css';
import { Link } from 'react-router-dom';

const Book = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    guests: '1',
    time: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your reservation has been submitted!');
    // Aquí podrías manejar el envío de los datos al servidor o alguna otra lógica
  };

  return (
    <div className="book-page">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit} className="book-form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="guests">Number of Guests:</label>
        <select
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        >
          {Array.from({ length: 11 }, (_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>

        <label htmlFor="time">Select a Date and Time:</label>
        <input
          type="datetime-local"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="comments">Comments (Allergies, etc.):</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />

        <button type="submit">Submit Reservation</button>
      </form>

      <div className="large-party-warning">
        <p>If your party has more than 10 guests, please <Link to="/contact">contact us</Link> directly for a reservation.</p>
      </div>

    </div>
  );
};

export default Book;
