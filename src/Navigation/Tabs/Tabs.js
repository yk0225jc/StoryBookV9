import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./Tabs.css";
import Tab1Image from "./Tabs_image/tab1image.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(255, 255, 255)",
    width: 1200,
    height: 48,
    boxShadow: "rgb(0 0 0 / 35%) 1px 1px 4px",
    "& .MuiAppBar-colorPrimary": {
      color: " #333333",
      backgroundColor: "rgb(255, 255, 255)",
    },
    "&.PrivateTabIndicator-colorSecondary": {
      backgroundColor: "rgb(11, 145, 207)",
    },
  },
  textFont: {
    color: "black",
    opacity: 1,
    "&.MuiTab-root": {
      padding: "6px 0px",
      minWidth: 130,
    },
  },

  tabPanel: {
    backgroundColor: "white",
  },
}));

export function Tabs1() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          TabIndicatorProps={{
            style: { backgroundColor: "rgb(11, 145, 207)", height: "4px" }, //Change Underline color and height
          }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            className={classes.textFont}
            label="Description"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.textFont}
            label="Key Specs "
            {...a11yProps(1)}
          />
          <Tab className={classes.textFont} label="Reviews" {...a11yProps(2)} />
          <Tab className={classes.textFont} label="Q & A" {...a11yProps(3)} />
          <Tab
            className={classes.textFont}
            label="Accessories"
            {...a11yProps(4)}
          />
          <Tab className={classes.textFont} label="Compare" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        Description Content of tab group here.
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        Key Specs Content of tab group here.
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        Reviews Content of tab group here.
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        Q & A Content of tab group here.
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        Accessories Content of tab group here.
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={5}>
        Compare Content of tab group here.
      </TabPanel>

      <img src={Tab1Image} alt="" />
    </div>
  );
}

export const PdpTab = () => {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "rgb(255, 255, 255)",
      width: 1200,
      height: 48,
      boxShadow: "rgb(0 0 0 / 35%) 1px 1px 4px",
      "& .MuiAppBar-colorPrimary": {
        color: " #333333",
        backgroundColor: "rgb(255, 255, 255)",
      },
      "&.PrivateTabIndicator-colorSecondary": {
        backgroundColor: "rgb(11, 145, 207)",
      },
    },
    textFont: {
      color: "black",
      opacity: 1,
      "&.MuiTab-root": {
        padding: "6px 0px",
        minWidth: 130,
      },
    },

    tabPanel: {
      backgroundColor: "white",
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          TabIndicatorProps={{
            style: { backgroundColor: "rgb(11, 145, 207)", height: "4px" }, //Change Underline color and height
          }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            className={classes.textFont}
            label="Description"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.textFont}
            label="Key Specs "
            {...a11yProps(1)}
          />
          <Tab className={classes.textFont} label="Reviews" {...a11yProps(2)} />
          <Tab className={classes.textFont} label="Q & A" {...a11yProps(3)} />
          <Tab
            className={classes.textFont}
            label="Accessories"
            {...a11yProps(4)}
          />
          <Tab className={classes.textFont} label="Compare" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel style= {{marginTop: 30 ,height: 200}} className={classes.tabPanel} >
        Compare Content of tab group here.
      </TabPanel>
      <TabPanel style= {{marginTop: 30,height: 200}} className={classes.tabPanel} >
        Compare Content of tab group here.
      </TabPanel>

    </div>
  );
};
