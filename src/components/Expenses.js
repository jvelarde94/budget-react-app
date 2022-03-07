import {React, useState} from "react";
import { Typography, TextField, FormControl, Button} from "@mui/material";
import Expense from "./Expense";

/* TODO:
  - Create input fields, with ability to add/remove
  - Display in single column, until certain limit is reached (10?), then split into two columns
  - Pass input numbers to calculate leftover amounts for Leftover section
  - Make checkbox to mark if labeled "needs" or "desired"
  - Add delete button next to each item
*/

const Expenses = ({expenses, onAdd, onDelete}) => {
  const [inputProps, setInputProps] = useState({
    type: "number",
    step: ".01",
  });
  const [expense, setExpense] = useState('')
  const [expAmt, setExpAmt] = useState('')
  const [expType, setExpType] = useState('')
  

  const onSubmit = (e) => {
    e.preventDefault();

    // If value entered, pass expenses entries to App
    if (e.target[0].value !== "" && e.target[1].value !== "") {
      onAdd([...expenses, {id: expenses.length, name: expense, amount: parseInt(expAmt, 10), type: expType}])
    }

    // Reset to blank for new entry
    setExpense('')
    setExpAmt('')

    // Place focus on expense name for quicker new entry
    document.getElementById("expense-type").focus();
  }

  return (
    <div className="expenses">
      <Typography variant="h4">Monthly Expenses</Typography>

      <div className="expenses-box">
        <Expense expenses={expenses} expType={expType} onDelete={onDelete}/>
        <hr/>
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
          <br />
          <input required type="radio" id="expense-want" name="expense-type" value="want" 
          onClick={
            (e) => {
              setExpType('want')
            }
          }/>
          <label htmlFor="expense-want">Want</label><br />
          <input type="radio" id="expense-need" name="expense-type" value="need" 
          onClick={
            (e) => {
              setExpType('need')
            } 
          }/>
          <label htmlFor="expense-need">Need</label><br />
          <Button variant="outlined" color="success" type="submit" className="add-expense-button">Add expense</Button>
        </form>
        {/* <FormControl>
          <TextField
            id="expense-amt"
            className="salary-input"
            label="Amount ($)"
            variant="standard"
            inputProps={inputProps}
            onChange={(e) => setExpense(e.target.value)}
          />
        </FormControl> */}
      </div>
    </div>
  );
};

export default Expenses;
