import React, { useState } from "react";
import "../styles/Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating">
      <p>Курска баа бериңиз:</p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "filled" : ""}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      {rating > 0 && <p>Рахмат! {rating} жылдыз бердиңиз.</p>}
    </div>
  );
};

export default Rating;
