import { React, useState } from "react";
import { Typography, FormControl, TextField, Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

const Income = ({ onChange }) => {
  const [inputProps, setInputProps] = useState({
    type: "number",
    step: ".01",
  });

  return (
    <div className="income-form">
      {/* <Typography variant="h4">Income</Typography> */}
      <div className="title">
        <h2>Income </h2>
        <Tooltip
          placement="right" 
          title='
            Enter your annual salary (after-tax preferred for better accuracy). If you are paid hourly, please calculate using:
            (rate * hoursPerWeek * 52), then enter your result here.
          '
        >
          <HelpIcon color="action" sx={{ fontSize: 18 }}/>
        </Tooltip>
      </div>
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
