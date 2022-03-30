import { React, useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  RadioGroup,
  Radio,
} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Expense from "./Expense";

/* TODO:
  - Create input fields, with ability to add/remove
  - Display in single column, until certain limit is reached (10?), then split into two columns
  - Pass input numbers to calculate leftover amounts for Leftover section
  - Make checkbox to mark if labeled "needs" or "desired"
  - Add delete button next to each item
*/

const Expenses = ({ expenses, onAdd, onDelete }) => {
  const [inputProps, setInputProps] = useState({
    type: "number",
    step: ".01",
  });
  const [expense, setExpense] = useState("");
  const [expAmt, setExpAmt] = useState("");
  const [expType, setExpType] = useState("");
  const [keyCounter, updateKeyCounter] = useState(1);

  const showAddExpenses = (e) => {
    let form = document.getElementById("expenses-form");
    if (form.className.includes("hide")) {
      e.target.innerHTML = "Hide";
      form.classList.toggle("show");
      form.classList.toggle("hide");
    } else {
      e.target.innerHTML = "Add expenses";
      form.classList.toggle("show");
      form.classList.toggle("hide");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // If value entered, pass expenses entries to App
    if (e.target[0].value !== "" && e.target[1].value !== "") {
      let keyCounterIncr = keyCounter + 1;
      onAdd([
        ...expenses,
        {
          id: keyCounter,
          name: expense,
          amount: parseInt(expAmt, 10),
          type: expType,
        },
      ]);
      updateKeyCounter(keyCounterIncr);
    }

    // Reset to blank for new entry
    setExpense("");
    setExpAmt("");

    // Place focus on expense name for quicker new entry
    document.getElementById("expense-type").value = null;
    document.getElementById("expense-type").focus();
  };

  return (
    <div className="expenses">
      {/* <Typography variant="h4">Monthly Expenses</Typography> */}
      <div className="title">
        <h2>Monthly Expenses </h2>
        <Tooltip
          placement="right" 
          title='
            After entering your annual income above, add your monthly expenses and categorize each expense as either a "Need" or "Want." 
            This will update your monthly budget, found to the right. 
          '
        >
          <HelpIcon color="action" sx={{ fontSize: 18 }}/>
        </Tooltip>
      </div>

      <div className="expenses-box">
        <Expense expenses={expenses} expType={expType} onDelete={onDelete} />
        <hr id="expense-form-divider" className="expense-divider hide" />
        <div className="add-expenses-collapsible expenses-form-container">
          <form id="expenses-form" className="hide" onSubmit={onSubmit}>
            <FormControl>
              <TextField
                id="expense-type"
                className="expense-input-field"
                type="text"
                label="Expense name"
                // variant="outlined"
                variant="filled"
                onChange={(e) => setExpense(e.target.value)}
              />
              <TextField
                id="expense-amt"
                className="expense-input-field"
                type="number"
                label="Amount ($)"
                // variant="outlined"
                variant="filled"
                value={expAmt}
                onChange={(e) => setExpAmt(e.target.value)}
              />
              <div className="radio-buttons-group">
                <FormLabel id="expense-type-radio-buttons-group-label">
                  <h5>Expense Type:</h5>
                </FormLabel>
                <RadioGroup
                  className="radio-buttons"
                  row
                  aria-labelledby="expense-type-radio-buttons-group-label"
                  // defaultValue="need"
                  name="expense-type"
                >
                  <FormControlLabel
                    id="expense-need"
                    value="need"
                    // name="expense-type"
                    control={<Radio />}
                    label="Need"
                    onClick={(e) => {
                      setExpType("need");
                    }}
                  />
                  <FormControlLabel
                    id="expense-want"
                    // name="expense-type"
                    value="want"
                    control={<Radio />}
                    label="Want"
                    onClick={(e) => {
                      setExpType("want");
                    }}
                  />
                </RadioGroup>
              </div>
            </FormControl>
            <div className="add-expense-button">
              <Button
                variant="outlined"
                color="success"
                size="medium"
                type="submit"
              >
                Add expense
              </Button>
            </div>
          </form>
          <div className="show-hide-expenses-form-button">
            <Tooltip 
              placement="right"
              title="Show me the money (loss)!"
            >
              <Button
                variant="outlined"
                color="secondary"
                size="medium"
                onClick={showAddExpenses}
              >
                Add expenses
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
