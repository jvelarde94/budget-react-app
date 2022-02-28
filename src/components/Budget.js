import React from "react";
import { Typography } from "@mui/material";

const Budget = ({needs, wants, savings, needsOriginalVal, wantsOriginalVal}) => {
  return (
    <div className="budget">
      <Typography variant="h4">Monthly Budget</Typography>
      <div className="budget-box">
        <p>
          <span className={`key needs`}>Needs </span>
          <span className="info">(50%): </span>
          <span className="result">${needs}</span>
          <span className="original-val"> (Original amount: ${needsOriginalVal}) </span>
        </p>
        <p>
          <span className={`key wants`}> Wants </span>
          <span className="info">(30%): </span>
          <span className="result">${wants}</span>
          <span className="original-val"> (Original amount: ${wantsOriginalVal}) </span>
        </p>
        <p className="savings-amount">
          <span className={`key savings`}>Savings </span>
          <span className="info">(20%): </span>
          <span className="result">${savings}</span>
          {/* <span className="original-val"> (Original amount: ${}) </span> */}
        </p>
      </div>
    </div>
  );
};

export default Budget;
