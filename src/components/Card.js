import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Card = (props) => {
  let review = props.review;
  return (
    <div>
      <div>
        <img src={review.image} />
      </div>
      <div>
        <p>{review.name}</p>
      </div>

      <div>
        <p>{review.job}</p>
      </div>

      <div>
        <p>{review.text}</p>
      </div>

      <div>
        <button>left</button>
      </div>

      <div>
        <button>right</button>
      </div>

      <div>
        <button>surprise me</button>
      </div>
    </div>
  );
};
