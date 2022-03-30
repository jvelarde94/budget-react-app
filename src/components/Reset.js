import {React, useState} from "react";
import Button from "@mui/material/Button";
import Tooltip from '@mui/material/Tooltip';

const Reset = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  const tooltipStyle = {
    display: hover ? "block" : "none"
  }

  return (
    <div className="reset">
      {/* <img className="img" src="./rs-goblin.png"/> */}
      <Tooltip 
        placement="top" 
        title="This will reset everything!"
      >
        <Button
          variant="contained"
          color="error"
          className="reset-data"
          onClick={onClick}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          Reset
        </Button>
      </Tooltip>
    </div>
  );
};

export default Reset;
