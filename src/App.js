import { React, useState, useEffect} from "react";
import "@fontsource/roboto/500.css";
import Header from "./components/Header";
import Budget from "./components/Budget";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import Reset from "./components/Reset";
// import Leftover from "./components/Leftover";
// import Savings from "./components/Savings";
// import Networth from "./components/Networth";

function App() {
  // Initialize each state used across the app
  const [needs, setNeeds] = useState(0)
  const [wants, setWants] = useState(0)
  const [savings, setSavings] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [needsOriginalVal, setNeedsOriginalVal] = useState(0);
  const [wantsOriginalVal, setWantsOriginalVal] = useState(0);
  const [savingsOriginalVal, setSavingsOriginalVal] = useState(0);

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
      setSavingsOriginalVal(savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

      // Set budget with conversion to string to add in comma
      setNeeds(needs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      setWants(wants.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      setSavings(savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } 
    else {
      // If nothing is in field, set budget to 0
      setNeeds(0);
      setWants(0);
      setSavings(0);

      // TODO: Print error message above or beneath input field
    }
  };

  // Add expenses to expenses state array
  const addExpense = (expenses) => {
    if (expenses === 0) {
      return null
    }
    setExpenses(expenses)
    adjustBudget(needs, wants, savings, expenses)
  }
  
  // Adjust monthly budget based on expenses
  const adjustBudget = (needs, wants, savings, expenses) => {
    if (expenses.length !== 0) {
      // Create separate array for needs expenses
      const needsExpensesVals = []
      {expenses.map((expense) => {
        if (expense.type == 'need') {
          needsExpensesVals.push(expense.amount)
        }
      })}

      // Create separate array for wants expenses
      const wantsExpensesVals = []
      {expenses.map((expense) => {
        if (expense.type === 'want') {
          wantsExpensesVals.push(expense.amount)
        }
      })}

      // Get sum for needs and wants expenses
      if (needsExpensesVals.length !== 0) {
        const sumNeedsExpensesPerYear = (needsExpensesVals.reduce((prev, current) => prev + current))
        const needsAdj = (parseFloat((needsOriginalVal).replace(',', '')) - sumNeedsExpensesPerYear).toFixed(2);
        setNeeds(needsAdj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      }

      if (wantsExpensesVals.length !== 0) {
        const sumWantsExpensesPerYear = (wantsExpensesVals.reduce((prev, current) => prev + current))
        const wantsAdj = (parseFloat((wantsOriginalVal).replace(',', '')) - sumWantsExpensesPerYear).toFixed(2);
        setWants(wantsAdj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      }

    }
  }

  const clearAll = () => {
    if (window.confirm("Are you sure you would like to reset all information?") === true) {
      document.getElementById('annual-salary').value='';
      setNeeds(0)
      setWants(0)
      setSavings(0)
      setExpenses([])
      setNeedsOriginalVal(0)
      setWantsOriginalVal(0)
      setSavingsOriginalVal(0)
    }
  }

  return (
    <div className="container">
      <Header />
      <Income onChange={validateIncome}/>
      <Expenses expenses={expenses} onAdd={addExpense}/>
      <Budget /*income={monthlyBudget}*/ needs={needs} wants={wants} savings={savings} />
      <Reset onClick={clearAll} />
    </div>
  );
}

export default App;
