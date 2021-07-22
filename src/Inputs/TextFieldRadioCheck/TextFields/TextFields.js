import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./TextFields.css";

export const CssTextField = withStyles({
  root: {
    width: 300,
    height: 48,
    fontSize: 14,
    padding: "2px 2px 2px 10px",

    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(21px, -6px) scale(0.75)",
      backgroundColor: "white",
    },

    "& input:focus": {
      borderWidth: "2px",
      borderRadius: 3,
      boxShadow: "0px 0px 5px rgb(11 145 207 / 35%)",
    },

    "& input:valid": {
      borderColor: "rgba(0, 133, 0, 1)",
      borderWidth: 2,
    },
    "& input:invalid": {
      borderColor: "rgba(153, 0, 0, 1)",
      borderWidth: 2,
    },
  },
})(TextField);

export class TextfieldValidation extends Component {
  constructor(props) {
    super(props);
    this.state = { helperText: "", error: false };
  }

  onChange(event) {
    if (event.target.value === "error") {
      this.setState({
        helperText: "Description of what needs to be fixed.",
        error: true,
      });
    } else if (event.target.value === "valid") {
      this.setState({ helperText: "", error: false });
    }
  }

  render() {
    return (
      <CssTextField
        helperText={this.state.helperText}
        onChange={this.onChange.bind(this)}
        error={this.state.error}
        id="TextValid"
        label="Label"
        variant="outlined"
      />
    );
  }
}
