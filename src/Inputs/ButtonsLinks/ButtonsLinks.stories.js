import React from "react";

import SmallButton from "./Buttom_image/Small.png";
import MediumButtom from "./Buttom_image/Medium.png";
import LargeButton from "./Buttom_image/Large.png";

import {
  ContainerButton,
  OutlinedButton,
  ReversedOutButton,
  DisabledButton,
} from "./Buttons";

import { Link1 } from "./Links";

export default {
  title: "Inputs/Buttons & Links",
};

const TemplateCb = (args) => <ContainerButton {...args} />;
export const Cb = TemplateCb.bind({});
Cb.args = {
  children: "Button",
};
Cb.storyName = "Container Button";

const TemplateOb = (args) => <OutlinedButton {...args} />;
export const Ob = TemplateOb.bind({});
Ob.args = {
  children: "Button",
};
Ob.storyName = "Outlined Button.Transparent background";

const TemplateRb = (args) => <ReversedOutButton {...args} />;
export const Rb = TemplateRb.bind({});
Rb.args = {
  children: "Button",
};

Rb.parameters = {
  backgrounds: { default: "black" },
};

Rb.storyName = "Reversed Out Button.Transparent background show on black";

const TemplateDb = (args) => <DisabledButton {...args} />;
export const Db = TemplateDb.bind({});
Db.args = {
  children: "Button",
  disabled: "true",
};
Db.storyName = "Disabled Button";

export const SB = () => {
  return (
    <div>
      <ContainerButton>Button</ContainerButton>
      <br />
      <br />
      <img src={SmallButton} alt="" />
    </div>
  );
};
SB.storyName = "Button Size: Small";

export const MB = () => {
  return (
    <div>
      <ContainerButton style={{ width: "100px", height: "48px", fontSize: 16 }}>
        Button
      </ContainerButton>
      <br />
      <br />
      <img src={MediumButtom} alt="" />
    </div>
  );
};
MB.storyName = "Button Size: Medium";

export const LG = () => {
  return (
    <div>
      <ContainerButton style={{ width: "122px", height: "56px", fontSize: 18 }}>
        Button
      </ContainerButton>
      <br />
      <br />
      <img src={LargeButton} alt="" />
    </div>
  );
};
LG.storyName = "Button Size: Large";

export const SmallFullWidth = () => {
  return (
    <div>
      <ContainerButton style={{ width: "186px", height: "40px", fontSize: 14 }}>
        Button
      </ContainerButton>
      <p style={{ backgroundColor: "yellow" }}>
        When a button resides within a single column container that's less than
        250 pixels, make the button width 100%. All other specs of the non-full
        width button size apply.
      </p>
    </div>
  );
};

export const MediumnFullWidth = () => {
  return (
    <div>
      <ContainerButton style={{ width: "186px", height: "45px", fontSize: 16 }}>
        Button
      </ContainerButton>
      <p style={{ backgroundColor: "yellow" }}>
        When a button resides within a single column container that's less than
        250 pixels, make the button width 100%. All other specs of the non-full
        width button size apply.
      </p>
    </div>
  );
};
export const LargeFullWidth = () => {
  return (
    <div>
      <ContainerButton style={{ width: "186px", height: "56px", fontSize: 18 }}>
        Button
      </ContainerButton>
      <p style={{ backgroundColor: "yellow" }}>
        When a button resides within a single column container that's less than
        250 pixels, make the button width 100%. All other specs of the non-full
        width button size apply.
      </p>
    </div>
  );
};

export const ButtonHitArea = () => {
  return (
    <div>
      <ContainerButton>Button</ContainerButton>
      <p style={{ backgroundColor: "yellow" }}>
        This hit area is invisible to the user, but is represented by screened
        back green behind the button for demonstration purposes. It extends 4px
        in every direction. This extended hit area is the same for all button
        sizes.
      </p>
    </div>
  );
};

export const Links = () => {
  return (
    <div>
      <Link1 />
      <p style={{ backgroundColor: "yellow" }}>
        Links are rended in blue #1460aa . When hovered over, an bottom-border
        underline appears under the word.
      </p>
    </div>
  );
};
