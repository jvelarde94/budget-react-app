import React from "react";
import { Typography } from "@mui/material";

/* TODO:
  - create input fields, with ability to add more input fields
  - display in single column, until certain limit is reached (10?), then split into two columns
  - pass input numbers to calculate leftover amounts for Leftover section
*/

const Expenses = () => {
  return (
    <div className="expenses">
      <Typography variant="h4">Expenses</Typography>
    </div>
  );
};

export default Expenses;
