import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { gray } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

import "./RadioButton.css";

const GreenRadio = withStyles({
  root: {
    color: gray,
    "&$checked": {
      color: "rgb(22,143,22)",
    },
  },
  icon: {
    backgroundColor: "white",


},

  checked: {},
})((props) => <Radio color="default" {...props} />);

export function RadioButton1() {
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
