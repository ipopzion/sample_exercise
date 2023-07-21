import React from "react";
import styles from "./sidepanel.style";
import ApiCard from "../ApiCard/ApiCard";

const SidePanel = ({ panelOpen, toggleOpen }) => {
  const mockApi = {
    name: "adobe.com",
    detail: "Adobe Experience Manager (AEM) API",
  };
  return (
    <div style={styles.mainPanel(panelOpen)}>
      <div style={styles.leftOfPanel} onClick={toggleOpen}></div>
      <div style={styles.rightOfPanel}>
        <h2 style={styles.selectProviderMessage}>Select Provider</h2>
        <ApiCard apiContent={mockApi} />
      </div>
    </div>
  );
};

export default SidePanel;
