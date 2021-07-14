import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const ContainerButton = withStyles({
    root: {
      textTransform: "none",
      fontSize: 18,
      lineHeight: "24px",
      width: "125px",
      height: "56px",
      border: "none",
      color: "#FFFFFF",
      fontWeight: 700,
      backgroundColor: "rgba(153, 0, 0, 1)",
      boxShadow: "0px 3px 6px rgb(0 0 0 / 35%)",
      borderColor: "#0063cc",
      borderRadius: 3,
      fontFamily: ["Arial Bold", "Arial", "sans-serif"].join(","),
      "&:hover": {
        backgroundColor: "rgba(140, 0, 0, 1);",
        boxShadow: "0px 0px 6px rgb(0 0 0 / 35%)",
      },
    },
  })(Button);




  export const ProcessingButton = withStyles({
    root: {
      textTransform: "none",
      fontSize: 20,
      
      lineHeight: "24px",
      width: "187px",
      height: "53px",
      border: "2px",
      color: "rgb(244,244,244)",
      fontWeight: 600,
      backgroundColor: "rgba(128, 128, 128, 1)",
      borderColor: "black",
      borderRadius: 3,
      fontFamily: ["Arial Bold", "Arial", "sans-serif"]
      .join(","),
      "&:hover": {
        backgroundColor: "rgba(128, 128, 128, 1)",

      },

    },
  })(Button);