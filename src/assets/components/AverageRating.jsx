import React from 'react';

function AverageRating({ ratings }) {
  const calculateAverage = () => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating.rate, 0);
    return Math.ceil(sum / ratings.length);
  };

  const averageRate = calculateAverage();
  const renderStars = () => {
    const filledStars = '★'.repeat(averageRate);
    const emptyStars = '☆'.repeat(5 - averageRate);
    return (
      <>
        {filledStars.split('').map((star, index) => (
          <span key={index}>{star}</span>
        ))}
        {emptyStars.split('').map((star, index) => (
          <span key={index + averageRate}>{star}</span>
        ))}
      </>
    );
  };

  return (
    <div className="ratings__average">
      <h3>Average Rating</h3>
      <div>{renderStars()}</div>
    </div>
  );
}

export default AverageRating;