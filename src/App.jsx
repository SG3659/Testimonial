import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

function App() {
  return (
    <div>
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <div>
          <Testimonial reviews={reviews} />
        </div>
      </div>
    </div>
  );
}

export default App;
