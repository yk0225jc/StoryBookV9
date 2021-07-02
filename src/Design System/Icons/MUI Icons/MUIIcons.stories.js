import React from "react";
import { MUIIcon } from "./MUIIcons";

import KeyboardArrowDownIcon from "./MUIIcon_Images/KeyboardArrowDown.svg";
import KeyboardArrowLeftIcon from "./MUIIcon_Images/KeyboardArrowLeft.svg";
import KeyBoardArrowRightIcon from "./MUIIcon_Images/KeyBoardArrowRight.svg";
import CloseIcon from "./MUIIcon_Images/close.svg";
import PlaceIcon from "./MUIIcon_Images/Place.svg";
import MenuBookIcon from "./MUIIcon_Images/MenuBook.svg";
import HelpIcon from "./MUIIcon_Images/Help.svg";
import PersonIcon from './MUIIcon_Images/Person.svg';
import SearchIcon from './MUIIcon_Images/Search.svg';
import MicIcon from './MUIIcon_Images/Mic.svg';



export default {
  title: "Design System/Icon/MUI Icons",
  component: MUIIcon,
  argTypes: {
    size: {
      options: ["iconSmall", "iconMedium"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <MUIIcon {...args} />;

export const KeyboardArrowDown = Template.bind({});
KeyboardArrowDown.args = {
  src: KeyboardArrowDownIcon,
  alt: "Drop Down Indicator",
  size: "iconMedium",
};
KeyboardArrowDown.storyName = "Drop Down Indicator";

export const KeyboardArrowLeft = Template.bind({});
KeyboardArrowLeft.args = {
  src: KeyboardArrowLeftIcon,
  alt: "Left Arrow",
  size: "iconMedium",
};
KeyboardArrowLeft.storyName = "Left Arrow";

export const KeyBoardArrowRight = Template.bind({});
KeyBoardArrowRight.args = {
  src: KeyBoardArrowRightIcon,
  alt: "Right Arrow",
  size: "iconMedium",
};
KeyBoardArrowRight.storyName = "Right Arrow";

export const Close = Template.bind({});
Close.args = {
  src: CloseIcon,
  alt: "Close",
  size: "iconMedium",
};
Close.storyName = "Close 'X'";

export const Place = Template.bind({});
Place.args = {
  src: PlaceIcon,
  alt: "Place",
  size: "iconMedium",
};
Place.storyName = "Header Store";

export const MenuBook = Template.bind({});
MenuBook.args = {
  src: MenuBookIcon,
  alt: "MenuBook",
  size: "iconMedium",
};
MenuBook.storyName = "Header Catalog";


export const Help = Template.bind({});
Help.args = {
  src: HelpIcon,
  alt: "Header Support",
  size: "iconMedium",
};
Help.storyName = "Header Support";


export const Person = Template.bind({});
Person.args = {
  src: PersonIcon,
  alt: "Header Account",
  size: "iconMedium",
};
Person.storyName = "Header Account";

export const Search = Template.bind({});
Search.args = {
  src: SearchIcon,
  alt: "Header Search",
  size: "iconMedium",
};
Search.storyName = "Header Search";

export const Mic = Template.bind({});
Mic.args = {
  src: MicIcon,
  alt: "Header Search Voice",
  size: "iconMedium",
};
Mic.storyName = "Header Search Voice";


