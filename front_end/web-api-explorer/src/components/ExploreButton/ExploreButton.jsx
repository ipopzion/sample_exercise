import React from "react";
import styles from "./explorebutton.style";

const ExploreButton = ({ handleClick, cta }) => {
  return (
    <button style={styles.button} onClick={handleClick}>
      {cta}
    </button>
  );
};

export default ExploreButton;
