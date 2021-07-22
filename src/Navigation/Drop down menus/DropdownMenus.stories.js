import React from "react";

import Measures from './DropDown_image/Measures.png'
import { Dropdownmenus1 } from "./Dropdownmenus";

export default {
  title: "Navigation/Dropdown Menus",
};

export const DropdownMenus = () => {
  return (
    <div className="container">
      <Dropdownmenus1 />
      <p>Click button to open dropdown menu</p>

      <div>
        <p>
          ACCESSIBILITY
          <br />
          Make a button with a label that says something like "Open [Categories]
          Menu". This button does not need to be visible at all times, but
          should become visible when it receives focus.
          <br /> Submenus do not open when top level items are focused, so that
          users are able to "tab" past each without opening.
          <br /> Add an aria-controls attribute to the element that controls the
          expandable content and set the value of that attribute to equal the id
          of the tag that wraps the expanded content.
          <br />
          Also add an aria-expanded=“true” attribute to that same element when
          content is expanded, and false otherwise.
          <br /> - See issue #15: Navigation submenus need to be made accessible
          for screen reader and keyboard users. Further documentation :
          https://hub.accessible360.com/kb/articles/529
        </p>
      </div>

      <div>

          <img src= {Measures} alt = ''/>
      </div>
    </div>
  );
};
