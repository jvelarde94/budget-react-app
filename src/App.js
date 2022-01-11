import { React, useState } from "react";
import "@fontsource/roboto/500.css";
import Header from "./components/Header";
import Budget from "./components/Budget";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import Leftover from "./components/Leftover";
import Savings from "./components/Savings";
import Networth from "./components/Networth";

function App() {
  const [budget, setBudget] = useState([
    {
      needs: 0,
      wants: 0,
      savings: 0,
    },
  ]);

  // Validate input for salary, then calculate budget based on input
  const validateIncome = (e) => {
    const value = e.target.value;
    const pattern = /^\d+$/;
    const result = pattern.test(value);

    // Check if input matches regex (numbers only)
    if (!(value.length === 0) && result === true) {
      // Perform calculations using provided number
      setBudget([
        {
          needs: value * 0.5,
          wants: value * 0.3,
          savings: value * 0.2,
        },
      ]);

      console.log(budget);
    } else {
      // TODO: Print error message above or beneath input field
    }
  };

  return (
    <div className="container">
      <Header />
      <Income onBlur={validateIncome} />
      <Budget />
      <Expenses />
      <Leftover />
      <Savings />
    </div>
  );
}

export default App;
