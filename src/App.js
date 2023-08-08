/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import React, { useState } from "react";
import DashBoard from "./components/DashBoard";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import TopNavBar from "./components/TopNavBar";
import Main_cards_container from "./components/Main_cards_container";
import DashBoard_rightSummary from "./components/DashBoard_rightSummary";
import ContainerCard_2 from "./components/ContainerCard_2";
export const Datacontext = React.createContext();

function App() {
  const [AppData, setAppData] = useState({
    icons: {
      LogoImage: "./assets/Graph.svg",
      week: "./assets/week",
    },
    custormers: 1250,
    all_orders: 450,
    pending: 5,
    completed: 445,
    images: {},
    volume: 450,
  });

  // Weekly sales data (Monday to Saturday)
  const [barchart, setbarchart] = useState([
    { week: "Mon", value: 25 },
    { week: "Tue", value: 50 },
    { week: "Wed", value: 75 },
    { week: "Thu", value: 30 },
    { week: "Fri", value: 90 },
    { week: "Sat", value: 60 },
    { week: "1d ", value: 60 },
    { week: "2d ", value: 34 },
  ]);

  //API context wrapper
  return (
    <Datacontext.Provider value={barchart}>
      <div className='App'>
        <Sidebar/>
      </div>
    </Datacontext.Provider>
  );
}

export default App;
