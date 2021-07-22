import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";


import "./DropDownMenus.css";
import triangle from "./DropDown_image/triangle.svg";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    width: 354,
    height: "auto",
    "&.MuiPaper-rounded": {
      borderRadius: 0,
    },
  },
  yellowHeader: {
    backgroundColor: "rgba(245, 177, 0, 1)",
    width: 354,
    height: 4,
  },
  dropdownMenus: {
    width: 318,
    "&.MuiListItem-gutters": {
      paddingRight: 0,
      paddingLeft: 0,
    },
    "&.MuiTypography-body1": {
      fontSize: 14,
    },
  },

  closePosition: {
    position: "relative",
    left: 305,
    top: -4,
    opacity: 0.4,
    display: "flex",
  },
  closeX: {
    fontWeight: 700,
    fontSize: 16,
    backgroundColor: " transparent",
    borderWidth: 0,
  },
  yellowTriangle: {
    transform: "rotate(135deg)",
    position: "relative",
    left: "50px",
    top: "19px",
  },
});

export const Dropdownmenus1 = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleShow = () => (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShow(!show);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleShow()}>Open Menu</Button>

      {show ? (
        <div>
          <img className={classes.yellowTriangle} src={triangle} alt="" />
          <Card className={classes.root}>
            <div className={classes.yellowHeader}>
              <span></span>
            </div>
            <CardContent>
              <div className={classes.closePosition}>
                <button className={classes.closeX}>X</button>
              </div>
              <a
                style={{
                  fontSize: "12px",
                  color: "#1460AA",
                  display: "flex",
                  marginTop: "-26px",
                }}
                href="/"
              >
                &lt; Back
              </a>
              <h3 style={{ margin: "0px 0px 0px 0px" }}>H3 Subhead</h3>

              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
              >
                <ListItem
                  className={classes.dropdownMenus}
                  button
                  onClick={handleClick}
                >
                  <ListItemText primary="Link with additional sublinks" />
                  {open ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </ListItem>
                <Collapse in={open} unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Sublink 1" />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button className={classes.dropdownMenus}>
                  <ListItemText
                    button
                    primary="Link without additional sublinks"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  );
};
