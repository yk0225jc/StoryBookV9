import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import WarningIcon from "./SnackBars_image/WarningIcon.svg";
import ErrorIcon from "./SnackBars_image/ErrorIcon.svg";
import SuccessIcon from "./SnackBars_image/SuccessIcon.svg";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const WarningStyle = makeStyles((theme) => ({
  root: {
    width: 300,
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
    width: 300,
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
    width: 300,
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

export function CustomizedSnackbars() {
  const classes = useStyles();
  const warningclass = WarningStyle();
  const erroclass = ErrorStyle();
  const successclass = SuccessStyle();

  const [warnopen, setwarnopen] = React.useState(false);
  const [erroropen, seterroropen] = React.useState(false);
  const [successopen, setsuccessopen] = React.useState(false);

  //handle warning
  const handleWarningClick = () => {
    setwarnopen(true);
  };

  const handleWarningClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setwarnopen(false);
  };

  //handle error
  const handleErroOpen = () => {
    seterroropen(true);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    seterroropen(false);
  };

  //handle Success
  const handleSuccessOpen = () => {
    setsuccessopen(true);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setsuccessopen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <Button variant="outlined" onClick={handleWarningClick}>
          Click to open warn snackbar
        </Button>
        <Snackbar
          open={warnopen}
          autoHideDuration={20000}
          onClose={handleWarningClose}
        >
          <Alert
            className={warningclass.root}
            open={warnopen}
            onClose={handleWarningClose}
          >
            This is a warning message!
          </Alert>
        </Snackbar>

        <Alert
          className={warningclass.root}
          open={warnopen}
          onClose={handleWarningClose}
        >
          This is a warning message!
        </Alert>
      </div>

      <div style={{ marginTop: 30 }}>
        <div className={classes.root}>
          <Button variant="outlined" onClick={handleErroOpen}>
            Click to open error snackbar
          </Button>
          <Snackbar
            open={erroropen}
            autoHideDuration={20000}
            onClose={handleErrorClose}
          >
            <Alert
              className={erroclass.root}
              open={erroropen}
              onClose={handleErrorClose}
            >
              This is a error message!
            </Alert>
          </Snackbar>

          <Alert
            className={erroclass.root}
            open={erroropen}
            onClose={handleErrorClose}
          >
            This is a error message!
          </Alert>
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <div className={classes.root}>
          <Button variant="outlined" onClick={handleSuccessOpen}>
            Click to open Success snackbar
          </Button>
          <Snackbar
            open={successopen}
            autoHideDuration={20000}
            onClose={handleSuccessClose}
          >
            <Alert
              className={successclass.root}
              open={successopen}
              onClose={handleSuccessClose}
            >
              This is a success message!
            </Alert>
          </Snackbar>

          <Alert
            className={successclass.root}
            open={successopen}
            onClose={handleSuccessClose}
          >
            This is a success message!
          </Alert>
        </div>
      </div>


    </div>
  );
}
