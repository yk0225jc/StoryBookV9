import React from "react";
import { StaticSnackBars } from "./StaticSnackbars";

export default {
  title: "Feedback/Longer Static SnackBars",
};

export const LongerStaticSnackBars = () => {
  return (
    <div className="container">
      <h2>Longer Snackbars, Static</h2>

      <StaticSnackBars />
    </div>
  );
};

LongerStaticSnackBars.storyName = "Longer Static SnackBars";
