import {React, useState} from "react";
import Button from "@mui/material/Button";
import Tooltip from '@mui/material/Tooltip';

const Reset = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  const tooltipStyle = {
    display: hover ? "block" : "none"
  }

  return (
    <div className="row">
      <div className="reset d-flex">
        {/* <img className="img" src="./rs-goblin.png"/> */}
        <Tooltip 
          title="This will reset everything and make it all go away."
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
    </div>
  );
};

export default Reset;
