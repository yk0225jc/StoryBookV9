import React from "react";

import { ChipsArray } from "./Chips";

export default {
  title: "Navigation/Chips",
};

export const Chips = () => {
  return (
    <div className="container">
      <h2>Material UI Documentation</h2>
      <p>
        Refer to the Material UI documentation for an exhaustive look at the
        chips component.
        <br />
        https://material-ui.com/components/chips/
      </p>
      <ChipsArray />

      <ul>
        <li>Background color: Gray 4</li>
        <li>Font size: 16px</li>
        <li>Corner radius: 16px</li>

        <li>Padding (TRBL): 12px 6px 12px 6px</li>
        <li>Margin right: 8px</li>
        <li>Margin bottom: 8px</li>
        <li>Selected Background color: Gray 3</li>
        <li>
          Left align within the containing element and wrap to a new row
          organically.
        </li>
      </ul>
    </div>
  );
};
