import React from "react";
import { Typography } from "@mui/material";

/* TODO:
  - Calculate and display difference (budget - leftovers)
*/

const Savings = () => {
  return (
    <div className="savings">
      <Typography variant="h4">Savings</Typography>
      <div className="savings-box">
        <h4>Total Savings:</h4>
      </div>
    </div>
  );
};

export default Savings;
