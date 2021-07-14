import React from "react";
import { makeStyles } from '@material-ui/core/styles';


import './Buttons.css'
import {ContainerButton, ProcessingButton} from './Buttons'
import {CircularLoading} from './Circular'



export function SubmitButton() {
//   const [disable, setDisable] = React.useState(false);
  return (
    <ContainerButton >
      Submit
    </ContainerButton>
  );
}
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  export  function CustomizedProgressBars() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CircularLoading />
        <br />
      </div>
    );
  }
  
  export function LoadingButton (){
    return (
        <ProcessingButton >
        <p id='processing'>Processing</p>
          
        </ProcessingButton>
      );
  }