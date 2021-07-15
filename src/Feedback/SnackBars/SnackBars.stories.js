import React from "react";
import { CustomizedSnackbars } from "./SnackBars";

export default {
  title: "Feedback/Snack Bars",
};

export const SnackBars = () => {
  return (
    <div className="container">
      <h2>Snack Bars</h2>

      <p>
        Use the Matierial UI functionality for snackbars.
        https://material-ui.com/components/snackbars/
        <br />
        The only departure from the documentation is the colors of the success
        and error cues.
      </p>

      <CustomizedSnackbars />
    </div>
  );
};
