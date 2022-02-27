import React from "react";
import { Typography } from "@mui/material";

const Budget = ({needs, wants, savings}) => {
  return (
    <div className="budget">
      <Typography variant="h4">Monthly Budget</Typography>
      <div className="budget-box">
        <p>
          <span className={`key needs`}>Needs </span>
          <span className="info">(50%): </span>
          <span className="result">${needs}</span>
        </p>
        <p>
          <span className={`key wants`}> Wants </span>
          <span className="info">(30%): </span>
          <span className="result">${wants}</span>
        </p>
        <p>
          <span className={`key savings`}>Savings </span>
          <span className="info">(20%): </span>
          <span className="result">${savings}</span>
        </p>
      </div>
    </div>
  );
};

export default Budget;
