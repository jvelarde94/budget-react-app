import { React, useState } from "react";
import "@fontsource/roboto/500.css";
import Header from "./components/Header";
import Budget from "./components/Budget";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
// import Leftover from "./components/Leftover";
// import Savings from "./components/Savings";
// import Networth from "./components/Networth";

function App() {
  // Initialize each state used across the app
  const [monthlyBudget, setMonthlyBudget] = useState(
    {
      needs: 0,
      wants: 0,
      savings: 0,
    },);
  const [expenses, setExpenses] = useState([])
  const [needsOriginalVal, setNeedsOriginalVal] = useState(0);
  const [wantsOriginalVal, setWantsOriginalVal] = useState(0);

  // Validate input for salary, then calculate budget based on input
  const validateIncome = (e) => {
    const value = e.target.value;
    const pattern = /^[1-9]\d*(\.\d+)?$/;
    const result = pattern.test(value);

    // Check if input matches regex (numbers only)
    if (!(value.length === 0) && result === true) {
      // Perform calculations using provided number and set budget variables with fixed decimal to two places
      let needs = ((value * 0.5) / 12).toFixed(2);
      let wants = ((value * 0.3) / 12).toFixed(2);
      let savings = ((value * 0.2) / 12).toFixed(2);
      
      // Set original values for needs and wants to use for calculations later.
      // Cannot use monthly budget value due to changing amount with later calculations.
      setNeedsOriginalVal(needs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      setWantsOriginalVal(wants.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

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

  const addExpense = (expenses) => {
    setExpenses(expenses)

    // Adjust monthly budget
    if (expenses && monthlyBudget) {
      // TODO: Create logic for different arrays for Desires and Needs
      // const needsExpenses = []
      // const desiresExpenses = []

      // Create array to hold all expense values
      const expensesArray = []
      {expenses.map((expense) => {
        expensesArray.push(expense.amount)
      })}
      const sumExpensesPerYear = (expensesArray.reduce((prev, current) => prev + current)) * 12

      // let needsAdj = (parseFloat((needsOriginalVal).replace(',', '')) - sumExpensesPerYear).toFixed(2);
      let wantsAdj = (parseFloat((wantsOriginalVal).replace(',', '')) - sumExpensesPerYear).toFixed(2);

      setMonthlyBudget({
        needs: monthlyBudget.needs,
        wants: wantsAdj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        savings: monthlyBudget.savings
      })
    }

  }

  // TODO: use useEffect() with dependency on expensesArray to update budget
  // This will be for instance of changing annual salary when expenses are already set
  // useEffect(() => {
  //   console.log(expensesArray.length)
  //   if (expensesArray.length > 0) {
  //     const sumExpensesPerYear = (expensesArray.reduce((prev, current) => prev + current)) * 12
  //     // let needsAdj = (parseFloat((needsOriginalVal).replace(',', '')) - sumExpensesPerYear).toFixed(2);
  //     let wantsAdj = (parseFloat((wantsOriginalVal).replace(',', '')) - sumExpensesPerYear).toFixed(2);

  //     setMonthlyBudget({
  //       needs: monthlyBudget.needs,
  //       wants: wantsAdj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  //       savings: monthlyBudget.savings
  //     })
  //   }
  // }, expensesArray)

  return (
    <div className="container">
      <Header />
      <Income onChange={validateIncome} />
      <Budget income={monthlyBudget} />
      <Expenses expenses={expenses} onAdd={addExpense}/>
      {/* <Leftover /> */}
      {/* <Savings /> */}
    </div>
  );
}

export default App;
