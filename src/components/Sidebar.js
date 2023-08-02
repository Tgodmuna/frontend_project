import React, { useState } from "react";
import Logo from "./Logo";
import MenuItems from "./Menu_items";
import Bottom from "./Bottom";

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
      
          <Logo />
          <MenuItems />
          <Bottom />
      
    </div>
  );
};

export default Sidebar;
