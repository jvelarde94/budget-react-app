import React from "react";
import { Typography } from "@mui/material";

const Budget = ({ budget }) => {
  const doSomething = () => {
    console.log(budget);
  };

  return (
    <div className="budget" onClick={doSomething}>
      <Typography variant="h4">Budget</Typography>

      {/* <div className="budget-info"> */}
      {/* <div>{budget}</div> */}
      {/* </div> */}
    </div>
  );
};

export default Budget;
