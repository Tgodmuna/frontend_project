/* eslint-disable react/jsx-pascal-case */
import React from "react";
import TopNavBar from "./TopNavBar";
import Main_cards_container from "./Main_cards_container";

const MainContainer = () => {
  return (
    <div>
      <div>
        <TopNavBar />
        <Main_cards_container />{" "}
      </div>
    </div>
  );
};

export default MainContainer;
