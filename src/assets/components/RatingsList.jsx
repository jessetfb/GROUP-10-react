import React, { useState } from 'react';
import Rating from './Rating.jsx';
 import AverageRating from './AverageRating.jsx';

function RatingsList() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [rate, setRate] = useState(0);
  const [ratings, setRatings] = useState([]);

  function handleRate() {
    setRatings([...ratings, { name, content, rate }]);
    setName('');
    setContent('');
    setRate(0);
  }

  return (
    <div className="ratings">
      <h1>Rating List</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          value={rate}
          min={1}
          max={5}
          onChange={(e) => setRate(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleRate}>Submit Rating</button>
      <AverageRating ratings={ratings} />
      <div>
        {ratings.map((rating, index) => (
          <Rating key={index} name={rating.name} content={rating.content} rate={rating.rate} />
        ))}
      </div>
    </div>
  );
}

export default RatingsList;
