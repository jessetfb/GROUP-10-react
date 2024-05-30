import React from 'react';

function Rating({ name, content, rate }) {
  const renderStars = () => {
    const filledStars = '★'.repeat(rate);
    const emptyStars = '☆'.repeat(5 - rate);
    return (
      <>
        {filledStars.split('').map((star, index) => (
          <span key={index}>{star}</span>
        ))}
        {emptyStars.split('').map((star, index) => (
          <span key={index + rate}>{star}</span>
        ))}
      </>
    );
  };

  return (
    <div className="ratings__item">
      <h3>{name}</h3>
      <div>{renderStars()}</div>
      <p>{content}</p>
    </div>
  );
}

export default Rating;