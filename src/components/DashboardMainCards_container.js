/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ContainerCard_2 from "./ContainerCard_2";
import DashboardCard1 from "./DashBoardCard1";
import DashBoardCard2 from "./DashBoardCard2";
import DashBoardCard3 from "./DashBoardCard3";
import styles from "../ComponentStyles/DashboardMain_cards_container.module.css";

const DashboardMain_cards_container = () => {
  return (
    <div>
      <div className={styles.leftSide}>
        <div style={{ display: "flex" }}>
          <DashboardCard1 />
          <DashBoardCard2 />
          <DashBoardCard3 />
        </div>
        <ContainerCard_2 />
      </div>
    </div>
  );
};

export default DashboardMain_cards_container;
