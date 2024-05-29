
export const AverageRating = ({ ratings }) => {
    // Calculate the average rating rounded up
    const averageRate = Math.ceil(
      ratings.reduce((sum, rating) => sum + rating.rate, 0) / ratings.length
    );
  
    // Create an array of 5 elements representing the stars
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
    return (
      <div className="ratings__average">
        {/* Map over the stars array and render a filled or empty star based on the averageRate */}
        <div className="stars">
          {stars.map((star) => (
            <span key={star}>
              {star <= averageRate ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>
    );
  };