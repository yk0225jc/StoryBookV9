import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import "./SerachBars.css";
import UPC from '../..//Design System/Icons/Non-MUI Icons/Icon_Images/upc.png'
import Mic from './SearchBar_image/mic.svg'
import Divider from './SearchBar_image/divider.svg'
import SearchIcon from '@material-ui/icons/Search';


export const CssTextField = withStyles({
  root: {
    width: 758,
    fontSize: 14,
    padding: "6px 2px 2px 7px",
    marginTop: 18,

    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(21px, -6px) scale(0.75)",
      backgroundColor: "white",
      borderRadius: 5,
      padding: "3px 5px 0px 5px",
      fontSize: 18,
    },
    "&.MuiInputLabel-outlined": {
      paddingLeft: "9px !important",
    },
    "& label#TextValid-label": {
      borderRadius: "3px",
      paddingTop: "3px",
      paddingButtom: "3px",
    },

    "&.MuiOutlinedInput-input":{
      padding : 0,
    }
  },
})(TextField);

export class SearchInital extends Component {
  constructor(props) {
    super(props);
    this.state = { helperText: "", error: false };
  }

  onChange(event) {
    if (event.target.value === "error") {
      this.setState({
        helperText: "The Search Field cannot be empty",
        error: true,
      });
    } else if (event.target.value === "valid") {
      this.setState({ helperText: "", error: false });
    }
  }

  render() {
    return (
      <div>
        <div className="searchFieldBackground">
          <CssTextField
            helperText={this.state.helperText}
            onChange={this.onChange.bind(this)}
            error={this.state.error}
            id="TextField"
            label="Search"
            variant="outlined"
          />

          <KeyboardArrowLeftIcon   id="searchLeftArrow" />
          <CameraAltIcon id= "camera" />
          <img id= 'upc' src={UPC} alt='' />
          <img id= 'mic' src={Mic} alt='' />
          <img id= 'divider' src={Divider} alt='' />
          <SearchIcon id='searchIcon' />
        </div>
      </div>
    );
  }
}
