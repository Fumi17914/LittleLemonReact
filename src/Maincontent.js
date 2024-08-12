import React from 'react';
import './Maincontent.css';

function MainContent() {
  return (
    <main id="home" className="main-content">
      <section className="hero">
        <img src="https://media.istockphoto.com/id/1398765336/es/foto/lim%C3%B3n-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=8h71YxYWM_TO8l9XFA_X6GAU1iATu_QHEokaGpwBVmI=" alt="Little Lemon Restaurant" />
      </section>
      <section className="dishes">
        <h2>Our Signature Dishes with Lemon</h2>
        <div className="dish-list">
          <div className="dish">
            <img src="https://media.istockphoto.com/id/821062550/es/foto/espaguetis-caseros-albahaca-lim%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=OR9VJsFG0crWRrDXbNw1zwTfXrKzNOkCnFDmXXeqIhI=" alt="Pasta with Lemon" />
            <p>Pasta with Lemon</p>
          </div>
          <div className="dish">
            <img src="https://media.istockphoto.com/id/1182647585/es/foto/ensalada-de-verduras-con-at%C3%BAn-y-aguacate.jpg?s=2048x2048&w=is&k=20&c=xmzZY0gUOEKJN7ad9tBo7P74IvU_DPdgGlvF4tJNzEY=" alt="Salad with Lemon" />
            <p>Salad with Lemon</p>
          </div>
          <div className="dish">
            <img src="https://media.istockphoto.com/id/467639228/es/foto/caseras-conjunto-de-pollo-con-hierbas-y-lim%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=9Fqqi4QQ585gRPaJg1dcSNHL_IxKf6axu-AQPa_xjXg=" alt="Chicken with Lemon" />
            <p>Chicken with Lemon</p>
          </div>
          <div className="dish">
            <img src="https://media.istockphoto.com/id/155908717/es/foto/pastel-de-lima.jpg?s=2048x2048&w=is&k=20&c=vuQz42DzhXhH1nc_9HmxBymo7dxAzQ7XWCUX-Ah6K5U=" alt="Lemon Dessert" />
            <p>Lemon Dessert</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;

