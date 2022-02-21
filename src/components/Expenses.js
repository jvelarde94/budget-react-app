import {React, useState} from "react";
import { Typography } from "@mui/material";
import Expense from "./Expense";

/* TODO:
  - Create input fields, with ability to add/remove
  - Display in single column, until certain limit is reached (10?), then split into two columns
  - Pass input numbers to calculate leftover amounts for Leftover section
*/

const Expenses = ({expenses, onAdd}) => {
  const [expense, setExpense] = useState('')
  const [expAmt, setExpAmt] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd([...expenses, { name: expense, amount: expAmt }])
    setExpense('')
    setExpAmt(0)
    document.getElementById("expense-type").focus();
  }

  return (
    <div className="expenses">
      <Typography variant="h4">Expenses</Typography>

      <div className="expenses-box">
        {/* <div className="expense-row ">
          <span className="expense-label">{expenses[0].name}: </span>
          <span className="expense-amount">{expenses[0].amount}</span>
        </div> */}
        <Expense expenses={expenses}/>
        <form className="expense-form" onSubmit={onSubmit}>
          <input 
            id="expense-type" 
            type="text"
            placeholder="Name" 
            value={expense} 
            onChange={(e) => setExpense(e.target.value)}
          />
          <input 
            id="expense-amt" 
            type="number"
            placeholder="Amount ($)" 
            value={expAmt} 
            onChange={(e) => setExpAmt(e.target.value)}
          />
          <input type="submit" className="add-expense-button" value="Add expense" />
        </form>
      </div>
    </div>
  );
};

export default Expenses;
