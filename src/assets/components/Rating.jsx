import React from 'react';

// Rating component
export const Rating = ({ name, rate, content, onRateChange }) => {
    // Create an array of 5 elements representing the stars
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
    // Function to handle star click
    const handleStarClick = (newRate) => {
      onRateChange(newRate);
    };
  
    return (
      <div className="ratings__item">
        {/* Display the name in h3 tags */}
        <h3>{name}</h3>
  
        {/* Map over the stars array and render a filled or empty star based on the rate */}
        <div className="stars">
          {stars.map((star) => (
            <span
              key={star}
              className={`star ${star <= rate ? 'filled' : 'empty'}`}
              onClick={() => handleStarClick(star)}
            >
              {star <= rate ? "★" : "☆"}
            </span>
          ))}
        </div>
  
        {/* Display the content in p tags */}
        <p>{content}</p>
      </div>
    );
  };