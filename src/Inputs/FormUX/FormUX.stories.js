import React from "react";

export default {
  title: "Inputs / Forms UX",
};

export const FormsUX = () => {
  return (
    <>
      <div className="container">
        <h2>Layout</h2>
        <ul>
          <li>
            Simplify the page layout so that nothing distracts the user from
            filling out the form.
          </li>
          <li>
            Avoid multi-column form layouts unless the fields are closely
            related e.g., first name, last name.
          </li>
          <li>
            Provide the appropriate amount of visual space for the text input
            that is being request.
          </li>
          <li>
            Hide optional fields used only by a minority of users e.g., address
            line 2, business name.
          </li>
        </ul>
      </div>

      <div className="container">
        <h2>Input</h2>
        <ul>
          <li>Allow the form to correctly accept browser auto-fill data.</li>
          <li>
            Use the appropriate input type for the job. (see Input Type
            Guidelines)
          </li>
          <li>
            Use a number keyboard on mobile when the field only accepts numbers
            e.g., phone number.
          </li>
          <li>
            Use icons or tooltips to aid the user with uncommon data inputs
            e.g., CVV code.
          </li>
          <li>
            If strict formatting for the data is required, do that for the user
            automatically e.g., phone number.
          </li>
          <li>
            Eliminate fields wherever possible e.g., auto identify credit card
            type when keying in a credit card number.
          </li>
          <li>
            Allow the user to view password fields with a show/hide button.
          </li>
        </ul>
        <h3>Input Type Guidelines</h3>
        <ul>
          <li>
            <b>Checkbox</b> – binary yes/no choice, make it unchecked by default
            (opt in vs opt out).
          </li>
          <li>
            <b>Radio Buttons</b> – 2-5 mutually exclusive options, use for
            required inputs, have the first one selected by default.
          </li>
          <li>
            <b>Select Drop-down</b> – 5-7 mutually exclusive options, avoid
            using unless necessary as it's taxing to the user.
          </li>
          <li>
            <b>Text Input</b> – Information that is easily filled out by the
            user.
          </li>
        </ul>
      </div>

      <div className="container">
        <h2>Focus + Validation</h2>
        <ul>
          <li>
            Provide focus to the current element so as not to overwhelm the
            user.
          </li>
          <li>
            Clicking the tab key should bring the user to the next form field
            and not get hung up on misc. elements.
          </li>
          <li>
            Show success indicators to give the user a sense of progress as they
            fill it out.
          </li>
          <li>
            Catch input issues before the form is submitted with inline
            validation.
          </li>
          <li>
            <b>Server Validation</b>
          </li>
          <ul>
            <li>Do not clear out all the inputs and make them start over.</li>
            <li>Mark the field(s) with problems</li>
            <li>
              Display the error messages in close proximity to those fields
              (same as inline validation)
            </li>
            <li>
              If there is a single issue, scroll the user to the first field
              that has an issue.
            </li>
            <li>
              If there are multiple issues, scroll the user to the top of the
              form and display an inline message that contains the errors the
              user needs to correct.
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};
