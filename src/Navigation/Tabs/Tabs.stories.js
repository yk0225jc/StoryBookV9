import React from "react";

import { Tabs1,PdpTab } from "./Tabs";

export default {
  title: "Navigation/Tabs",
};

export const Tabs = () => {
  return (
    <div className="container">
      <h2>Material UI Documentation</h2>
      <p>
        Refer to the Material UI documentation for an exhaustive look at the
        tabs system. What is documented here is just the specific departures
        from the existing documentation.
      </p>
      <p>https://material-ui.com/components/tabs/</p>

      <h2>Where Tabs are Used</h2>
      <p>
        - Delivery options page, toggle between BOPIS and delivery options.
        <br />- Store Finder Index (mobile viewport)
      </p>
      <Tabs1 />
      <p style={{marginTop: 350}}>


      <h2>Where Anchors are Used</h2>
      <p>- PDP Section anchors</p>
      <PdpTab />
      </p>
      <div></div>

    </div>
  );
};

Tabs.parameters = {
  backgrounds: { default: "gray" },
};
