import React from "react";
import TextFiedsSpace from './TextField_image/TextFieldsSpace.png'

import { TextfieldValidation } from "./TextFields";

export default {
  title: "Inputs / Text Field, Radio, Checkbox/Text Field",
};

export const TextField = () => {
  return (
    <div className= 'container'>
    <h2>Text Fields</h2>
      <TextfieldValidation />
      <div style = {{marginTop: "20px"}}>
      <img src={TextFiedsSpace} alt ='' />
      </div>
      <p>
        Use the Matierial UI functionality for the outlined text field and the
        drop down field. https://material-ui.com/components/text-fields/<br /> The
        only departure from the documentation is the color of the outline,
        success, and error cues.
      </p>
      <p style={{ backgroundColor: "yellow" }}>
        Typing the word "valid" or "error" will display the validated or errored
        state of the field. Use the native Material UI functionality.
      </p>
      <p>
        Accessibility : See the widget's annotation for extensive requirements
        for accessibility.
      </p>
    </div>
  );
};
