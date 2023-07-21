import React from "react";
import styles from "./explorebutton.style";

const ExploreButton = ({ handleClick }) => {
  return (
    <button style={styles.button} onClick={handleClick}>
      Explore web APIs
    </button>
  );
};

export default ExploreButton;
