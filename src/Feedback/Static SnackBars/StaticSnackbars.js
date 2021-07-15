import React from "react";

import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import WarningIcon from "./../SnackBars/SnackBars_image/WarningIcon.svg";
import ErrorIcon from "./../SnackBars/SnackBars_image/ErrorIcon.svg";
import SuccessIcon from "./../SnackBars/SnackBars_image/SuccessIcon.svg";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const WarningStyle = makeStyles((theme) => ({
  root: {
    width: 513,
    height: 106,
    backgroundColor: "rgba(250,235,191,0.4)",
    fontSize: 14,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(133,98,11)",
    borderRadius: 3,
    textAlign: "left",
    color: "rgb(0,0,0)",
    "& .MuiAlert-icon": {
      backgroundImage: `url(${WarningIcon})`,
      color: "transparent",
      backgroundRepeat: "no-repeat",
      marginTop: 10,
      marginLeft: 3,
      marginRight: 7,
      fontSize: 16,
    },
    "& .MuiSvgIcon-fontSizeSmall ": {
      fontSize: 30,
    },
    "& .MuiAlert-message": {
      padding: "9px 0",
    },
  },
}));

const ErrorStyle = makeStyles((theme) => ({
  root: {
    width: 513,
    height: 106,
    backgroundColor: "rgba(224, 0, 0, 0.15)",
    fontSize: 14,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(224, 0, 0)",
    borderRadius: 3,
    textAlign: "left",
    color: "rgb(0,0,0)",
    "& .MuiAlert-icon": {
      backgroundImage: `url(${ErrorIcon})`,
      color: "transparent",
      backgroundRepeat: "no-repeat",
      marginTop: 10,
      marginLeft: 3,
      marginRight: 7,
      fontSize: 16,
    },
    "& .MuiSvgIcon-fontSizeSmall ": {
      fontSize: 30,
    },
    "& .MuiAlert-message": {
      padding: "9px 0",
    },
  },
}));

const SuccessStyle = makeStyles((theme) => ({
  root: {
    width: 513,
    height: 106,
    backgroundColor: "rgba(0, 133, 0, 0.15)",
    fontSize: 14,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(0, 133, 0)",
    borderRadius: 3,
    textAlign: "left",
    color: "rgb(0,0,0)",
    "& .MuiAlert-icon": {
      backgroundImage: `url(${SuccessIcon})`,
      color: "transparent",
      backgroundRepeat: "no-repeat",
      marginTop: 10,
      marginLeft: 3,
      marginRight: 7,
      fontSize: 16,
    },
    "& .MuiSvgIcon-fontSizeSmall ": {
      fontSize: 30,
    },
    "& .MuiAlert-message": {
      padding: "9px 0",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",

    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export function StaticSnackBars() {
  const classes = useStyles();
  const warningclass = WarningStyle();
  const erroclass = ErrorStyle();
  const successclass = SuccessStyle();

  return (
    <div>
      <div className={classes.root}>

        <Alert
          className={warningclass.root}
        >
          This is a warning message! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus eget eleifend turpis. Nunc vitae semper
          turpis, id sagittis est. Nam molestie felis vitae massa rhoncus, sit
          amet venenatis libero porta
        </Alert>
      </div>

      <div style={{ marginTop: 30 }}>
        <div className={classes.root}>


          <Alert
            className={erroclass.root}
          >
            This is a error message! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus eget eleifend turpis. Nunc vitae semper
            turpis, id sagittis est. Nam molestie felis vitae massa rhoncus, sit
            amet venenatis libero porta
          </Alert>
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <div className={classes.root}>

          <Alert
            className={successclass.root}
          >
            This is a success message! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus eget eleifend turpis. Nunc vitae semper
            turpis, id sagittis est. Nam molestie felis vitae massa rhoncus, sit
            amet venenatis libero porta
          </Alert>
        </div>
      </div>
    </div>
  );
}
