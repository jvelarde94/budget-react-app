import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      {/* <Typography variant="h3">Super Simple Budget Tool Manager 9000</Typography> */}
      {/* <h1 className="header-title">
        Super Simple Budget Manager Tool
        <span className="version-number">
          {" "}
          (v9000.1
          <img src="vegeta-over-9000.png" className="img" />)
        </span>
      </h1>
      <span className="small-funny-text">By Jeremy Velarde</span> */}


      <div className="header-title">
        <span>Super Simple</span><br/> 
        <span>Budget Manager</span><br/> 
        <span>Tool</span>
      </div>
        <span className="version-number">
          {" "}
          v9000.1
          <img src="vegeta-over-9000.png" className="img" />
        </span>
        <span className="small-funny-text">By Jeremy Velarde</span>
    </div>
  );
};

export default Header;
