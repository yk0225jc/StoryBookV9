import React from "react";

import { Drawer1 } from "./Drawer";

import DrawerImage from './Drawer_image/drawersize.png'

export default {
  title: "Navigation/Drawer",
};

export const Drawer = () => {
  return (
    <div className="container">
 
      <Drawer1 />
      <p>Click Left or Right to show the Drawer</p>
      <img src={DrawerImage} alt='' />


    </div>
  );
};


