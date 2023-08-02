import React from "react";
import styles from "../ComponentStyles/LogoStyle.module.css";

const Logo = () => {
  return (
    <div style={{ width: 123.49, height: 52, position: "relative" }}>
      <div className={styles.Logo}>
        <div
          className={styles.Logo_icon}
          id={""}
          style={{ width: 43.33, height: 43.33, position: "relative" }}>
          <img src='/assets/Graph.svg' alt='graph' />
        </div>

        <div className={styles.Logo_Title} id={"Logo_title"}>
          <p>metrix</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
