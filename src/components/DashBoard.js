import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import "../ComponentStyles/DashBoard.css";

const DashBoardStyles = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#FAF5FA",
  // width: "135rem",
};

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='dashboard-container' style={DashBoardStyles}>
      <div
        className={`hamburger-icon ${showSidebar ? "hidden" : ""}`}
        onClick={ toggleSidebar }>
        |||
      </div>
      {showSidebar && <Sidebar />}
      <div className='center-component'>
        <MainContainer />
      </div>
    </div>
  );
};

export default Dashboard;
