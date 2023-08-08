import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import MenuItems from "./Menu_items";
import Bottom from "./Bottom";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 481) {
        setShowSideBar(false);
      } else {
        setShowSideBar(true);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Sidebar style
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

  // Render sidebar content conditionally based on showSideBar state
  const sidebarContent = showSideBar && (
    <div className='max-sm:bg-slate-600 ' style={sidebarStyle}>
      <Logo />
      <MenuItems />
      <Bottom />
    </div>
  );

  return (
    <>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {sidebarContent}
    </>
  );
};

export default Sidebar;
