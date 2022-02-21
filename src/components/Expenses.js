import {React, useState} from "react";
import { Typography } from "@mui/material";
import Expense from "./Expense";

/* TODO:
  - Create input fields, with ability to add/remove
  - Display in single column, until certain limit is reached (10?), then split into two columns
  - Pass input numbers to calculate leftover amounts for Leftover section
  - Make checkbox to mark if labeled "needs" or "desired"
  - Add delete button next to each item
*/

const Expenses = ({expenses, onAdd}) => {
  const [expense, setExpense] = useState('')
  const [expAmt, setExpAmt] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd([...expenses, {name: expense, amount: parseInt(expAmt, 10)}])
    setExpense('')
    setExpAmt('')
    document.getElementById("expense-type").focus();
  }

  return (
    <div className="expenses">
      <Typography variant="h4" className="box-title">Expenses</Typography>

      <div className="expenses-box">
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
