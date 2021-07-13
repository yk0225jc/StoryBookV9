import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./TextFields.css";

export const CssTextField = withStyles({
  root: {
    "& label.Mui-focused fieldset": {
      color: "rgba(11, 145, 207, 1)",
    },
    "& input:valid": {
      borderColor: "rgba(0, 133, 0, 1)",
      borderWidth: 2,
    },
    "& input:invalid": {
      borderColor: "rgba(153, 0, 0, 1)",
      borderWidth: 2,
    },

    // "& .MuiInput-underline:after": {
    //   borderBottomColor: "rgba(11, 145, 207, 1)",
    // },
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {
    //     borderColor: "rgba(121, 121, 121, 1)",
    //   },
    //   // "&:hover fieldset": {
    //   //   borderColor: "rgba(121, 121, 121, 1)",
    //   // },
    //   // "&.Mui-focused fieldset": {
    //   //   borderColor: "rgba(11, 145, 207, 1)",
    //   // },
    // },
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
        label="Placeholder+Label"
        variant="outlined"
      />
    );
  }
}
