import React from "react";

import { SubmitButton, CustomizedProgressBars,LoadingButton } from "./SubmitButtons";

export default {
  title: "Inputs / Text Field, Radio, Checkbox/Submit Button",
};

export const SubmitButton1 = () => {
  return (
    <div className="container">
    <div style= {{margin : 10}}>
    <SubmitButton />

    </div>
      <div style= {{margin : 10}}>
      <LoadingButton />
      </div>
      
      <CustomizedProgressBars />
    </div>
  );
};
