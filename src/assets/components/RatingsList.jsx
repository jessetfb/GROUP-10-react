// RatingsList component
import React from "react";
import { AverageRating } from "./AverageRating";
import { Rating } from "./Rating";
// RatingsList component
const RatingsList = ({ ratings }) => {
    // State to store the updated ratings
    const [updatedRatings, setUpdatedRatings] = React.useState(ratings);
  
    // Function to handle rate change
    const handleRateChange = (index, newRate) => {
      const newRatings = [...updatedRatings];
      newRatings[index].rate = newRate;
      setUpdatedRatings(newRatings);
    };
  
    return (
      <div className="ratings">
        {/* Render the AverageRating component passing the updated ratings as a prop */}
        <AverageRating ratings={updatedRatings} />
  
        {/* Map over the ratings array and render a Rating component for each rating */}
        {updatedRatings.map((rating, index) => (
          <Rating
            key={index}
            name={rating.name}
            rate={rating.rate}
            content={rating.content}
            onRateChange={(newRate) => handleRateChange(index, newRate)}
          />
        ))}
      </div>
    );
  };
  
  export default RatingsList;