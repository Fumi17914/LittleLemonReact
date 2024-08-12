import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="main-content">
      <h1>Today's Specials</h1>
      <ul className="dish-list">
        <li className="dish">
          <h2>Lemon Pasta</h2>
          <img src="https://media.istockphoto.com/id/821062550/es/foto/espaguetis-caseros-albahaca-lim%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=OR9VJsFG0crWRrDXbNw1zwTfXrKzNOkCnFDmXXeqIhI=" alt="Lemon Pasta" className="menu-image" />
          <p>A delightful dish of al dente pasta tossed in a zesty lemon sauce, topped with fresh parsley and parmesan cheese.</p>
        </li>
        <li className="dish">
          <h2>Lemon Salad</h2>
          <img src="https://media.istockphoto.com/id/1182647585/es/foto/ensalada-de-verduras-con-at%C3%BAn-y-aguacate.jpg?s=2048x2048&w=is&k=20&c=xmzZY0gUOEKJN7ad9tBo7P74IvU_DPdgGlvF4tJNzEY=" alt="Lemon Salad" className="menu-image" />
          <p>A refreshing salad with crisp greens, cherry tomatoes, and a tangy lemon vinaigrette, garnished with lemon zest.</p>
        </li>
        <li className="dish">
          <h2>Lemon Chicken</h2>
          <img src="https://media.istockphoto.com/id/467639228/es/foto/caseras-conjunto-de-pollo-con-hierbas-y-lim%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=9Fqqi4QQ585gRPaJg1dcSNHL_IxKf6axu-AQPa_xjXg=" alt="Lemon Chicken" className="menu-image" />
          <p>Grilled chicken breast marinated in lemon juice, served with roasted vegetables and a side of lemon butter sauce.</p>
        </li>
        <li className="dish">
          <h2>Lemon Mousse</h2>
          <img src="https://media.istockphoto.com/id/155908717/es/foto/pastel-de-lima.jpg?s=2048x2048&w=is&k=20&c=vuQz42DzhXhH1nc_9HmxBymo7dxAzQ7XWCUX-Ah6K5U=" alt="Lemon Mousse" className="menu-image" />
          <p>A light and airy lemon mousse, perfectly sweet and tangy, served with a dollop of whipped cream.</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
