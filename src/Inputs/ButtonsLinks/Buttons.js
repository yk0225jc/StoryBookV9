import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const ContainerButton = withStyles({
  root: {
    textTransform: "none",
    fontSize: 14,
    width: "84px",
    height: "40px",
    border: "none",
    color: "#FFFFFF",
    fontWeight: 700,
    lineHeight: 16,
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

export const OutlinedButton = withStyles({
  root: {
    textTransform: "none",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 16,
    color: "#000000",
    width: "84px",
    height: "40px",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(153, 0, 0, 1)",
    borderRadius: 3,
    fontFamily: ["Arial Bold", "Arial", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "rgba(137, 137, 137, 0.196078431372549)",
      boxShadow: "none",
    },
  },
})(Button);

export const ReversedOutButton = withStyles({
  root: {
    textTransform: "none",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 16,
    color: "#FFFFFF",
    width: "84px",
    height: "40px",
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 1)",
    boxShadow: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 3,
    fontFamily: ["Arial Bold", "Arial", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "rgba(137, 137, 137, 0.196078431372549)",
      boxShadow: "none",
    },
  },
})(Button);

export const DisabledButton = withStyles({
  root: {
    textTransform: "none",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 16,
    color: "rgb(115, 115, 115)",
    width: "84px",
    height: "40px",
    border: "none",
    backgroundColor: "rgba(200, 200, 200, 1)",
    boxShadow: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 3,
    fontFamily: ["Arial Bold", "Arial", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "rgba(137, 137, 137, 0.196078431372549)",
      boxShadow: "none",
    },
  },
})(Button);
