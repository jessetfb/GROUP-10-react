import React from 'react';
import { AverageRating } from './assets/components/AverageRating';
import { Rating } from './assets/components/Rating';
import RatingsList from './assets/components/RatingsList';

const App = () => {
  // Sample ratings data
  const initialRatings = [
    {
      name: 'John Doe',
      content: 'Nice thing!',
      rate: 5,
    },
    {
      name: 'Jane Smith',
      content: 'Awesome!',
      rate: 4,
    },
    {
      name: 'Bob Johnson',
      content: 'Good product',
      rate: 3,
    },
  ];

  return (
    <div>
      <h1>Star Ratings</h1>
      <RatingsList ratings={initialRatings} />
    </div>
  );
};

export default App;