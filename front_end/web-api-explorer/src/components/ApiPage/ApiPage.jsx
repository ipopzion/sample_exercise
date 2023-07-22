import React from "react";
import styles from "./apipage.style";
import ExploreButton from "../ExploreButton/ExploreButton";

const ApiPage = ({ info, togglePage }) => {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        <img
          src={info?.info?.["x-logo"]["url"]}
          alt={info?.info?.title}
          style={styles.titleIcon}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "https://apis.guru/assets/images/logo.svg";
          }}
        />
        <h1 style={styles.title}>{info?.info?.title}</h1>
      </div>
      <div style={styles.content}>
        <h2 style={styles.subtitle}>Description</h2>
        <p>{info?.info?.description}</p>
        <h2 style={styles.subtitle}>Swagger</h2>
        <p>{info?.swaggerUrl}</p>
        <h2 style={styles.subtitle}>Contact</h2>
        <table>
          <tr>
            <td style={styles.tablefield}>Email</td>
            <td>{info?.info?.contact?.email}</td>
          </tr>
          <tr>
            <td style={styles.tablefield}>Name</td>
            <td>{info?.info?.contact?.name}</td>
          </tr>
          <tr>
            <td style={styles.tablefield}>Url</td>
            <td>{info?.info?.contact?.url}</td>
          </tr>
        </table>
      </div>
      <ExploreButton handleClick={togglePage} cta="Explore more APIs" />
    </div>
  );
};

export default ApiPage;
