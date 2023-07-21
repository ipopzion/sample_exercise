import React, { useState } from "react";
import styles from "./apicard.style";

const ApiCard = ({ apiContent }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const toggleOpen = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <div style={styles.card(cardOpen)}>
      <div onClick={toggleOpen} style={styles.cardTop}>
        <div>{apiContent.name}</div>
        <div style={styles.dropDownButton(cardOpen)}>^</div>
      </div>
      <div style={styles.detail(cardOpen)}>{apiContent.detail}</div>
    </div>
  );
};

export default ApiCard;
