import React, { useState } from "react";
import styles from "./apicard.style";
import useFetch from "../../services/useFetch";
import ApiPage from "../ApiPage/ApiPage";

const ApiCard = ({ apiName }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [endPoint, setEndpoint] = useState(null);
  const [showPage, setShowPage] = useState(false);

  const { data, isLoading, error } = useFetch(endPoint);
  const info = Object.values(data["apis"] ?? {})?.[0];

  const toggleOpen = () => {
    if (!cardOpen && !data.length) {
      setEndpoint(`${apiName}.json`);
    }
    setCardOpen(!cardOpen);
  };

  const togglePage = () => {
    setShowPage(!showPage);
  };

  return (
    <div style={styles.card(cardOpen)}>
      <div onClick={toggleOpen} style={styles.cardTop}>
        <div>{apiName}</div>
        <div style={styles.dropDownButton(cardOpen)}>^</div>
      </div>
      {cardOpen && (
        <div style={styles.details} onClick={togglePage}>
          {isLoading ? (
            <div style={styles.title}>Loading</div>
          ) : error ? (
            <div style={styles.title}>Error</div>
          ) : (
            <>
              <img
                src={info?.info?.["x-logo"]["url"]}
                alt={apiName}
                style={styles.icon}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://apis.guru/assets/images/logo.svg";
                }}
              />
              <div style={styles.title}>{info?.info?.title}</div>
            </>
          )}
        </div>
      )}
      {cardOpen && showPage && <ApiPage info={info} togglePage={togglePage} />}
    </div>
  );
};

export default ApiCard;
