import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";



const useStyles = makeStyles({
  list: {
    minWidth: 250,
    width: 354,
    padding: "0px",
    "&.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiPaper-elevation16":{
      width: 200,
    }

  },
  fullList: {
    width: "auto",
  },
  yellowHeader: {
    backgroundColor: "rgba(245, 177, 0, 1)",
    width: "auto",
    height: 4,
    
  },
  closePosition: {
    position: "absolute",
    left: 330,
    top: 8,
  },  
  closeX : {
    fontWeight: 700,
    fontSize: 16,
    backgroundColor: " transparent",
    borderWidth: 0,
    opacity: 0.4,
  }
});

export function Drawer1() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {


    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.yellowHeader}>
        <span></span>
      </div>

      <List>
        <ListItem >
          <ListItemText primary={<h3>H3 Subhead</h3>} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Title1", "Title2", "Title3"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <div className={classes.closePosition}>
            <button className = {classes.closeX}>X</button>
        </div>
    </div>
  );

  return (
    <div>
      {["left", "right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="outlined" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
