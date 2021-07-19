import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import './Breadcrumbs.css'

const usestyles = makeStyles((theme) => ({
  root: {
    color: "#000000",

    "'&:active'": {
      color: "#000000",
      fontWeight: 700,
    },

  },
}));


const usestyles2 = makeStyles((theme) => ({
    root: {
      color: "white",
  
      "'&:active'": {
        color: "#000000",
        fontWeight: 700,
      },
  
    },
  }));
  

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export function BreadcrumbOnWhite() {
  const classes = usestyles();
  return (
    <Breadcrumbs className={classes.root} aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Northern Tool
      </Link>
      <Link 
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        Page Name
      </Link>
      <b>
      <Link color="inherit" href="/" onClick={handleClick}>
        Current Page Name
      </Link>
      </b>
    </Breadcrumbs>
  );
}

export function BreadcrumbsOnBlack() {
    const classes = usestyles2();
    return (
        <div className="blackbackground">
      <Breadcrumbs className={classes.root} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Northern Tool
        </Link>
        <Link 
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Page Name
        </Link>
        <b>
        <Link color="inherit" href="/" onClick={handleClick}>
          Current Page Name
        </Link>
        </b>
      </Breadcrumbs>
      </div>
    );
}
