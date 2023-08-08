import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import "../ComponentStyles/DashBoard.css";
import Main_cards_container from "./Main_cards_container";

const DashBoardStyles = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#FAF5FA",
  padding:'0 0 25rem 0'
  // width: "135rem",
};

const Dashboard = () => {
  return (
    <div className='dashboard-container' style={DashBoardStyles}>
       <Sidebar />
      <div className='center-component'>
        <Main_cards_container />
      </div>
    </div>
  );
};

export default Dashboard;
