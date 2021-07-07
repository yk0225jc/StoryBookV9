import React from "react";

import {PrimaryColors,MessagingColor, NeutralsColor, OtherColor,ACC} from "./Colors";

export default {
  title: "Design System/Colors",
};

export const Colors = () => {
  return (
    <div>
      <PrimaryColors />
      <MessagingColor />
      <NeutralsColor />
      <OtherColor />
      <ACC />
    </div>
  );
};
