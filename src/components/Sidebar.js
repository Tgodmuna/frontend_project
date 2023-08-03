import React, { useState } from "react";
// import Logo from "./Logo";
import MenuItems from "./Menu_items";
import Bottom from "./Bottom";
import styles from ''

const Sidebar = () => {
 
// side bar style
  const sidebarStyle = { 
    width: 296,
    height: 1024,
    position: "relative",
    background: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
  };

  

  return (
    <div style={sidebarStyle}>
      {/* logo */}
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
      <MenuItems />
      <Bottom />
    </div>
  );
};

export default Sidebar;
