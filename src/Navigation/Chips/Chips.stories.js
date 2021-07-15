import React from "react";

import {ChipsArray} from "./Chips"

export default {
  title: "Navigation/Chips",
};

export const Chips = () => {
  return (
    <div className = 'container'>
      <h2>Material UI Documentation</h2>
      <p>
        Refer to the Material UI documentation for an exhaustive look at the
        chips component.
        <br />
        https://material-ui.com/components/chips/
      </p>
      <ChipsArray />
    </div>
  );
};
