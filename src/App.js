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
  const [monthlyBudget, setMonthlyBudget] = useState(
    {
      needs: 0,
      wants: 0,
      savings: 0,
    },
  );

  // Validate input for salary, then calculate budget based on input
  const validateIncome = (e) => {
    const value = e.target.value;
    const pattern = /^\d+$/;
    const result = pattern.test(value);

    // Check if input matches regex (numbers only)
    if (!(value.length === 0) && result === true) {
      // Perform calculations using provided number and set budget variables with fixed decimal to two places
      let needs = ((value * 0.5) / 12).toFixed(2);
      let wants = ((value * 0.3) / 12).toFixed(2);
      let savings = ((value * 0.2) / 12).toFixed(2);
      
      // Set budget with conversion to string to add in comma
      setMonthlyBudget(
        {
          needs: needs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          wants: wants.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          savings: savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        },
      );

    } else {
      // If nothing is in field, set budget to 0
      setMonthlyBudget(
        {
          needs: 0,
          wants: 0,
          savings: 0,
        },
      );

      // TODO: Print error message above or beneath input field
    }
  };

  return (
    <div className="container">
      <Header />
      <Income onChange={validateIncome} />
      <Budget income={monthlyBudget} />
      <Expenses />
      <Leftover />
      <Savings />
    </div>
  );
}

export default App;
