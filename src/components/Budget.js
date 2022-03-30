import React from "react";
import { Typography } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';

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
      <div className="title">
        <h2>Monthly Budget </h2>
        <Tooltip
          placement="right" 
          title='
            This is your monthly budget based on your income. Needs is 50% of your income, Wants is 30%, and Savings is 20%. 
            These numbers will update as you add monthly expenses. Your overall savings is a combination of Savings and any leftover money from "Wants" or "Needs."
          '
        >
          <HelpIcon color="action" sx={{ fontSize: 18 }}/>
        </Tooltip>
      </div>
      <div className="budget-box">
        <div className="needs-section">
          <p>
            <span className="needs">Needs </span>
            <span className="info">(50%): </span>
            <span className="dollar"> $</span>
            <span className="result">{needs}</span>
            <br />
            <span className="original-val">
              {" "}
              (Original amount: ${needsOriginalVal}){" "}
            </span>
          </p>
          <hr className="budget-divider"/>
        </div>
        <div className="wants-section">
          <p>
            <span className="wants">Wants </span>
            <span className="info">(30%): </span>
            <span className="dollar"> $</span>
            <span className="result">{wants}</span>
            <br />
            <span className="original-val">
              {" "}
              (Original amount: ${wantsOriginalVal}){" "}
            </span>
          </p>
          <hr className="budget-divider"/>
        </div>
        <div className="savings-section">
          <p>
            <span className="savings">Savings </span>
            <span className="info">(20%): </span>
            <span className="dollar"> $</span>
            <span className="result">{savings}</span>
            {/* <span className="original-val"> (Original amount: ${}) </span> */}
          </p>
        <hr className="budget-divider"/>
        </div>
        <div className="overall-savings-section">
          <h3 className="overall-savings">Overall Savings:</h3>
          <span className="overall-savings-dollar">$</span>
          <span className="overall-savings-result">{overallSavings}</span>
          
        </div>
      </div>
    </div>
  );
};

export default Budget;
