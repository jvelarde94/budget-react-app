import { React, useState } from "react";
import { Typography, FormControl, TextField, Button } from "@mui/material";

const Income = () => {
  const [inputProps, setInputProps] = useState({
    inputMode: "numeric",
    pattern: "[0-9]*",
  });

  const validateIncome = (e) => {
    const value = e.target.value;
    console.log("onchange - validate income:", value);
  };

  //   const submit = (e) => {
  //     console.log(e);
  //   };

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
          onChange={validateIncome}
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
    </div>
  );
};

export default Income;
