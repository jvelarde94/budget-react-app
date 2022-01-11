import { React, useState } from "react";
import { Typography, FormControl, TextField, Button } from "@mui/material";

const Income = ({ onBlur }) => {
  const [inputProps, setInputProps] = useState({
    inputMode: "numeric",
    pattern: "[0-9]*",
  });
  // const [budget, setBudget] = useState([
  //   {
  //     needs: 0,
  //     wants: 0,
  //     savings: 0,
  //   },
  // ]);

  // const validateIncome = (e) => {
  //   const value = e.target.value;
  //   const pattern = /^\d+$/;
  //   const result = pattern.test(value);

  //   // Check if input matches regex (numbers only)
  //   if (!(value.length === 0) && result === true) {
  //     // Perform calculations using provided number
  //     setBudget([
  //       {
  //         needs: value * 0.5,
  //         wants: value * 0.3,
  //         savings: value * 0.2,
  //       },
  //     ]);

  //     console.log(budget);
  //   } else {
  //     // TODO: Print error message above or beneath input field
  //   }
  // };

  return (
    <div className="income-form">
      <Typography variant="h4">Income</Typography>
      <FormControl>
        <TextField
          id="annual-salary"
          className="salary-input"
          label="Annual Salary ($)"
          variant="filled"
          inputProps={inputProps}
          // onBlur={validateIncome}
          onBlur={onBlur}
        />
        {/* <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={submit}
        >
          Calculate
        </Button> */}
      </FormControl>
      {/* <p>{budget}</p> */}
    </div>
  );
};

export default Income;
