import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import './RadioButton.css'

const GreenRadio = withStyles({
  root: {
    color: "rgb(0,133,0)",
    backgroundColor: 'white',
    padding: "0px",
    margin: "0px",
    left: "10px",
    top: "10px",
    "&$checked": {
      color: "rgb(0,133,0)",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div id="greenhitarea">
        <GreenRadio
          checked={selectedValue === "c"}
          onChange={handleChange}
          value="c"
          name="radio-button-demo"
          inputProps={{ "aria-label": "C" }}
        />

      </div>
    </div>
  );
}
