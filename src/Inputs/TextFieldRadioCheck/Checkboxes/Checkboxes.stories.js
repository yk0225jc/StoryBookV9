import React from "react";

import { CustomizedCheckbox } from "./Checkboxes";
import Checkboximage from './Checkboxes_image/Checkbox.png'


export default {
  title: "Inputs / Text Field, Radio, Checkbox/Checkboxes",
};

export const CheckBoxes = () => {
  return (
    <div className = 'container'>
      <h2>Checkboxes</h2>
      <CustomizedCheckbox />
      <img src= {Checkboximage} alt ='' />
      <p>
        See the Matierial UI library for the rules around check boxes
        https://material-ui.com/components/checkboxes/
      </p>
      <p>
        The only departure from the documentation is the filled-in color and
        extra attention to the size of the radio and the hit state area. Note
        that the image of the check is different in Axure than it is in the
        documentation. Use the Material UI checkbox image.
      </p>
      <p>
        The checkbox image in Axure is different from the checkmark in Material
        UI. Continue using the native checkmark in Material UI.
      </p>



     



    </div>
  );
};

CheckBoxes.storyName = "Checkboxes";
