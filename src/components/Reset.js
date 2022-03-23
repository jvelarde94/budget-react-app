import React from "react";
import Button from "@mui/material/Button";

const Reset = ({ onClick }) => {
  return (
    <div className="reset">
      {/* <img className="img" src="./rs-goblin.png"/> */}
      <Button
        variant="outlined"
        color="error"
        className="reset-data"
        onClick={onClick}
      >
        The reset button
      </Button>
    </div>
  );
};

export default Reset;
