import React from "react";

import { BreadcrumbOnWhite,BreadcrumbsOnBlack} from "./Breadcrumbs";

export default {
  title: "Navigation/Breadcrumbs",
};

export const Breadcrumbs = () => {
  return (
    <div className="container">
      <h2>Black</h2>
      <BreadcrumbOnWhite />
      <br />
      <h2>White</h2>
      <BreadcrumbsOnBlack />
    </div>
  );
};
