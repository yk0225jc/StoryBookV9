import React from "react";

import {
  SubmitButton,
  CustomizedProgressBars,
  LoadingButton,
} from "./SubmitButtons";

export default {
  title: "Inputs / Text Field, Radio, Checkbox/Submit Button",
};

export const SubmitButton1 = () => {
  return (
    <div className="container">
      <h2>Submit Buttons</h2>
      <div style={{ margin: 10 }}>
        <SubmitButton />
      </div>
      <div style={{ margin: 10 }}>
        <LoadingButton />
      </div>
      <CustomizedProgressBars />

      <p>
        When users submit their forms, disable the submit button and overlay a
        dark grey (#737373) circular indeterminate spinning indicator.
      </p>
      <p>https://material-ui.com/components/progress/#circular-indeterminate</p>

    </div>
  );
};

SubmitButton1.storyName = "Submit Button";
