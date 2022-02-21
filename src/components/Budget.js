import React from "react";
import Income from "./Income";
import { Typography } from "@mui/material";

const Budget = ({income}) => {

  return (
    <div className="budget">
      <Typography variant="h4" className="box-title">Monthly Budget</Typography>
      <div className="budget-box">
        <p>
          <span className={`key needs`}>Needs </span>
          <span className="info">(50%): </span>
          <span className="result">${income.needs}</span>
        </p>
        <p>
          <span className={`key wants`}> Desires </span>
          <span className="info">(30%): </span>
          <span className="result">${income.wants}</span>
        </p>
        <p>
          <span className={`key savings`}>Savings </span>
          <span className="info">(20%): </span>
          <span className="result">${income.savings}</span>
        </p>
      </div>
    </div>
  );
};

export default Budget;
