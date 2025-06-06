import React from 'react';
import './Card.css'; // Import the CSS

const Card = ({ title, description }) => {
  return (
    <div className="card">
     
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
