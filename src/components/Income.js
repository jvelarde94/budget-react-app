import { React, useState } from "react";
import { Typography, FormControl, TextField, Button } from "@mui/material";

const Income = ({ onChange }) => {
  const [inputProps, setInputProps] = useState({
    inputMode: "numeric",
    pattern: "[0-9]*",
  });

  return (
    <div className="income-form">
      {/* <Typography variant="h4">Income</Typography> */}
      <FormControl>
        <TextField
          id="annual-salary"
          className="salary-input"
          label="Annual Salary ($)"
          variant="filled"
          inputProps={inputProps}
          onChange={onChange}
        />
      </FormControl>
    </div>
  );
};

export default Income;
