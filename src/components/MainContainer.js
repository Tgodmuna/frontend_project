/* eslint-disable react/jsx-pascal-case */
import React from "react";
import TopNavBar from "./TopNavBar";
import Main_cards_container from "./Main_cards_container";
import DashBoard_rightSummary from "./DashBoard_rightSummary";

const MainContainer = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgb(255, 255, 255)",
    margin: "1rem 1rem 0 0",
    width: "72.5rem",
  };

  const leftSideStyle = {
    flex: 1,
    marginRight: "20px",
  };

  const rightSideStyle = {
    flexShrink: 0,
    width: "47%",
    // marginTop:'1rem'
  };

  return (
    <div
      style={{
        width: 1144,
        alignSelf: "stretch",
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 28,
        display: "flex",
      }}>
      <div style={leftSideStyle}>
        <TopNavBar />
        <Main_cards_container />
      </div>
      <div style={rightSideStyle}>
        <DashBoard_rightSummary />
      </div>
    </div>
  );
};

export default MainContainer;
