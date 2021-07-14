import React from "react";

export default {
  title: "Inputs / Text Field, Radio, Checkbox/Password Validator",
};

export const PasswordValidator = () => {
    return(
  <div className="container">
    <h3>Password Requirements</h3>
    <ul>
      <li>at least 8 characters long</li>
      <li>contains at least one number</li>
      <li>contains at least one letter</li>
      <li>no spaces</li>
      <li>cannot use the same letter or number more than twice in a row</li>
      <li>confirmation password matches</li>
    </ul>

    <p>
      Accessibility : See issue #32: Associate error messages with their related
      fields so that screen reader users identify them properly.
    </p>
  </div>
  )
};
