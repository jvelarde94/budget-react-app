import { React, useState, useEffect } from "react";
import "@fontsource/roboto/500.css";

import Header from "./components/Header";
import Budget from "./components/Budget";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import Reset from "./components/Reset";

function App() {
  // Initialize each state used across the app
  const [modalShow, setModalShow] = useState(false);
  const [needs, setNeeds] = useState("0");
  const [wants, setWants] = useState("0");
  const [savings, setSavings] = useState("0");
  const [expenses, setExpenses] = useState([]);
  const [needsOriginalVal, setNeedsOriginalVal] = useState("0");
  const [wantsOriginalVal, setWantsOriginalVal] = useState("0");
  const [savingsOriginalVal, setSavingsOriginalVal] = useState("0");
  const [overallSavings, setOverallSavings] = useState("0");

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
      let overallSavings =
        parseFloat(needs) + parseFloat(wants) + parseFloat(savings);

      // Set original values for needs and wants to use for calculations later.
      // Cannot use monthly budget value due to changing amount with later calculations.
      setNeedsOriginalVal(
        needs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      setWantsOriginalVal(
        wants.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      setSavingsOriginalVal(
        savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      // setOverallSavings()
      // console.log(needs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      // console.log(needsOriginalVal)

      // Set budget with conversion to string to add in comma
      setNeeds(needs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      setWants(wants.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      setSavings(savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      setOverallSavings(
        overallSavings.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    } else {
      // If nothing is in field, set budget to 0
      setNeeds('0');
      setNeedsOriginalVal('0');
      setWants('0');
      setWantsOriginalVal('0');
      setSavings('0');
      setOverallSavings('0');

      // TODO: Print error message above or beneath input field
    }
  };

  // Add expenses to expenses state array
  const addExpense = (expenses) => {
    console.log(expenses);
    if (expenses === 0) {
      return null;
    }
    setExpenses(expenses);
  };

  const deleteExpense = (expenses) => {
    if (expenses.length !== 0) {
      setExpenses([...expenses]);
    } else {
      setExpenses([]);
    }
  };

  // Adjust budget when expenses state is updated
  useEffect(() => {
    const needsExpensesVals = [];
    const wantsExpensesVals = [];

    // console.log('useEffect expenses:', expenses)

    if (typeof expenses !== "undefined" && expenses.length !== 0) {
      expenses.map((expense) => {
        // If expense type is "need"
        if (expense.type == "need") {
          needsExpensesVals.push(expense.amount);
          if (needsExpensesVals.length !== 0) {
            const sumNeedsExpensesPerYear = needsExpensesVals.reduce(
              (prev, current) => prev + current
            );

            if (
              typeof sumNeedsExpensesPerYear !== "undefined" &&
              sumNeedsExpensesPerYear !== null
            ) {
              const needsAdj = (
                parseFloat(needsOriginalVal.replace(",", "")) -
                sumNeedsExpensesPerYear
              ).toFixed(2);
              setNeeds(
                needsAdj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
              // console.log('1st useEffect needs: ', needs)

              const overallSavingsCalc =
                parseFloat(needsAdj.replace(",", "")) +
                parseFloat(wants.replace(",", "")) +
                parseFloat(savings.replace(",", ""));
                if (typeof overallSavingsCalc !== 'undefined') {
                  console.log(
                    needsAdj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    overallSavingsCalc.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  );
                }
              setOverallSavings(
                overallSavingsCalc
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
            }
          } else {
            setNeeds(needsOriginalVal);
          }
        }
        // If expense type is "want"
        else if (expense.type === "want") {
          wantsExpensesVals.push(expense.amount);
          if (wantsExpensesVals.length !== 0) {
            const sumWantsExpensesPerYear = wantsExpensesVals.reduce(
              (prev, current) => prev + current
            );

            if (
              typeof sumWantsExpensesPerYear !== "undefined" &&
              sumWantsExpensesPerYear !== null
            ) {
              const wantsAdj = (
                parseFloat(wantsOriginalVal.replace(",", "")) -
                sumWantsExpensesPerYear
              ).toFixed(2);
              setWants(
                wantsAdj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
              // console.log('1st useEffect wants: ', wants)

              const overallSavingsCalc =
                parseFloat(needs.replace(",", "")) +
                parseFloat(wantsAdj.replace(",", "")) +
                parseFloat(savings.replace(",", ""));
              setOverallSavings(
                overallSavingsCalc
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
            }
          } else {
            setWants(wantsOriginalVal);
          }
        }
      });
    }
    // If expenses are empty
    else {
      setNeeds(needsOriginalVal);
      setWants(wantsOriginalVal);

      // Set overall savings amount when there are no expenses (Avoids error on page load)
      setOverallSavings(
        parseFloat(needsOriginalVal.replace(",", "")) +
          parseFloat(wantsOriginalVal.replace(",", "")) +
          parseFloat(savingsOriginalVal.replace(",", ""))
      );
    }
  }, [expenses]);

  const clearAll = () => {
    if (
      window.confirm(
        "Are you sure you would like to reset all information on this page?"
      ) === true
    ) {
      document.getElementById("annual-salary").value = "";
      setNeeds("0");
      setWants("0");
      setSavings("0");
      setExpenses([]);
      setNeedsOriginalVal("0");
      setWantsOriginalVal("0");
      setSavingsOriginalVal("0");
      setOverallSavings("0");
    }
  };

  // Information modal
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="container flex-row justify-content-center">
      <Header />
      <Reset onClick={clearAll} />
      <Income onChange={validateIncome} />
      <div className="row">
        <div className="col-sm-6">
          <Expenses
            expenses={expenses}
            onAdd={addExpense}
            onDelete={deleteExpense}
          />
        </div>
        <div className="col-sm-6">
          <Budget
            needs={needs}
            wants={wants}
            savings={savings}
            overallSavings={overallSavings}
            needsOriginalVal={needsOriginalVal}
            wantsOriginalVal={wantsOriginalVal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
