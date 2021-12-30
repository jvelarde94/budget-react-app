import React from "react";
import "@fontsource/roboto/500.css";
import Header from "./components/Header";
import Budget from "./components/Budget";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import Leftover from "./components/Leftover";
import Savings from "./components/Savings";
import Networth from "./components/Networth";

function App() {
  return (
    <div className="container">
      <Header />
      <Income />
      <Budget />
      <Expenses />
      <Leftover />
      <Savings />
    </div>
  );
}

export default App;
