import React, { useState } from "react";
import styles from "./apicard.style";
import useFetch from "../../services/useFetch";

const ApiCard = ({ apiName }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [endPoint, setEndpoint] = useState(null);
  const { data, isLoading, error } = useFetch(endPoint);
  const info = Object.values(data["apis"] ?? {})?.[0]?.["info"];

  const toggleOpen = () => {
    if (!cardOpen && !data.length) {
      setEndpoint(`${apiName}.json`);
    }
    setCardOpen(!cardOpen);
  };

  return (
    <div style={styles.card(cardOpen)}>
      <div onClick={toggleOpen} style={styles.cardTop}>
        <div>{apiName}</div>
        <div style={styles.dropDownButton(cardOpen)}>^</div>
      </div>
      {cardOpen && (
        <div style={styles.details}>
          {isLoading ? (
            <div style={styles.title}>Loading</div>
          ) : error ? (
            <div style={styles.title}>Error</div>
          ) : (
            <>
              <img
                src={info?.["x-logo"]["url"]}
                alt={apiName}
                style={styles.icon}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://apis.guru/assets/images/logo.svg";
                }}
              />
              <div style={styles.title}>{info?.title}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ApiCard;
