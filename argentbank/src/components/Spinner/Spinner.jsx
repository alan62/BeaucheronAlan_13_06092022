import React from "react";
import "./spinner.css";
/**
 * Spinner
 * @returns {ReactElement}
 */
const Spinner = () => {
  return (
    <section className="spinnerContainer">
      <span className="firstLetter">L</span>
      <span className="secondLetter">o</span>
      <span className="thirdLetter">a</span>
      <span className="fourthLetter">d</span>
      <span className="fifthLetter">i</span>
      <span className="sixthLetter">n</span>
      <span className="seventhLetter">g</span>
    </section>
  );
};

export default Spinner;
