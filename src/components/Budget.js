import React from "react";
import { Typography } from "@mui/material";

const Budget = ({
  needs,
  wants,
  savings,
  overallSavings,
  needsOriginalVal,
  wantsOriginalVal,
}) => {
  return (
    <div className="budget">
      {/* <Typography variant="h4">Monthly Budget</Typography> */}
      <h2 className="title">Monthly Budget</h2>
      <div className="budget-box">
        <p>
          <span className="needs">Needs </span>
          <span className="info">(50%): </span>
          <span className="result">${needs}</span>
          <br />
          <span className="original-val">
            {" "}
            (Original amount: ${needsOriginalVal}){" "}
          </span>
        </p>
        <p>
          <span className="wants"> Wants </span>
          <span className="info">(30%): </span>
          <span className="result">${wants}</span>
          <br />
          <span className="original-val">
            {" "}
            (Original amount: ${wantsOriginalVal}){" "}
          </span>
        </p>
        <p className="savings-amount">
          <span className="savings">Savings </span>
          <span className="info">(20%): </span>
          <span className="result">${savings}</span>
          {/* <span className="original-val"> (Original amount: ${}) </span> */}
        </p>
        <hr />
        <h3 className="overall-savings">Overall Savings: ${overallSavings}</h3>
      </div>
    </div>
  );
};

export default Budget;
