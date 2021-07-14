import React from "react";

import { RadioButtons } from "./RadioButtons";
import Radiobuttomimage from './RadioButton_image/Radiobutton.png'

export default {
  title: "Inputs / Text Field, Radio, Checkbox/Radio Button",
};

export const RadioButton = () => {
  return (
    <div className="container">
      <h2>Radio Buttons</h2>
      <RadioButtons />
      <img src= {Radiobuttomimage} alt=''></img>
      <p>
        See the Matierial UI library for the rules around radio buttons
        https://material-ui.com/components/radio-buttons/
        <br />
        The only departure from the documentation is the filled-in color and
        extra attention to the size of the radio and the hit state area.
      </p>
      <p>
        Accessibility : see issue #31: Use standard checkbox and radio button
        inputs. Additionally, ensure that each checkbox and radio button set is
        wrapped in a fieldset with a legend.<br /> Documentation :
        https://hub.accessible360.com/kb/articles/525 "Forms - Custom Checkboxes
        and Radio Buttons"
      </p>
    </div>
  );
};
