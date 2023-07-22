import React from "react";
import styles from "./sidepanel.style";
import ApiCard from "../ApiCard/ApiCard";
import useFetch from "../../services/useFetch";

const SidePanel = ({ panelOpen, toggleOpen }) => {
  const { data, isLoading, error } = useFetch("providers.json");

  return (
    <div style={styles.mainPanel(panelOpen)}>
      <div style={styles.leftOfPanel} onClick={toggleOpen}></div>
      <div style={styles.rightOfPanel}>
        <h2 style={styles.selectProviderMessage}>Select Provider</h2>
        <>
          {isLoading ? (
            <div>Loading</div>
          ) : error ? (
            <div>Error</div>
          ) : (
            data?.data?.map((d) => <ApiCard apiName={d} />)
          )}
        </>
      </div>
    </div>
  );
};

export default SidePanel;
