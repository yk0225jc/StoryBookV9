import React from "react";
import { Icon1, Icon2, Icon3 } from "./Icons";
import { Theme } from "../../../ColorTable";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import HeaderAdIcon from "./Icon_Images/adv_gold.svg";
import AdBadgeIcon from "./Icon_Images/adv-badge-sm.png";
import HeaderPlatIcon from "./Icon_Images/plat-bug-gold.svg";
import HeaderGPIcon from "./Icon_Images/gp-bug-gold.svg";
import HNPIcon from "./Icon_Images/HNP.png";
import HeaderCartIcon from "./Icon_Images/cart_gold.svg";
import HSBarcodeIcon from "./Icon_Images/upc.png";
import FFacebookIcon from "./Icon_Images/Facebook_circle_pictogram.svg";
import FTwitterIcon from "./Icon_Images/twitter.svg";
import FYoutubeIcon from "./Icon_Images/YouTube_social_dark_circle.svg";
import FPinterestIcon from "./Icon_Images/pinterest-round.svg";
import FInstagramIcon from "./Icon_Images/instagram-circle.svg";
import FulStoresIcon from "./Icon_Images/icon-store-black.png";
import FulBOPISIcon from "./Icon_Images/delivery-icon-store-pickup.png";
import FulCurbsideIcon from "./Icon_Images/curbside-pickup.png";
import FulShipToStoreIcon from "./Icon_Images/ship-to-store.png";
import FulSDDeliveryIcon from "./Icon_Images/same-day-delivery..png";
import FulDeliveryIcon from "./Icon_Images/shipping.png";

export default {
  title: "Design System/Icon/Non-MUI Icons",
  component: Icon1,
  argTypes: {
    size: {
      options: ["iconSmall", "iconMedium", "iconWide", "iconLong"],
      control: { type: "radio" },
    },
  },
};


//Style for table
const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: Theme.palette.primary.dark,
    color: Theme.palette.primary.white,
  },
  body: {
    fontSize: 17,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      //Gray Color background for rows
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Image, Description, ImageName, IsNotMUI, HexColor, Size) {
  return { Image, Description, ImageName, IsNotMUI, HexColor, Size };
}

//Table row Content
const rows = [
  createData(
    <Icon1 src={HeaderAdIcon} alt="" />,
    "Header Advantage",
    "adv_gold.svg",
    "X",
    "#f5b100",
    "32px"
  ),
  createData(
    <Icon1 src={AdBadgeIcon} alt="" />,
    "Advantage Badge",
    "adv-badge-sm.png",
    "X",
    "",
    "32px"
  ),
  createData(
    <Icon1 src={HeaderPlatIcon} alt="" />,
    "Header Platinum",
    "plat-bug-gold.svg",
    "x",
    "#f5b100",
    "32px"
  ),
  createData(
    <Icon1 src={HeaderGPIcon} alt="" />,
    "Header Advantage",
    "gp-bug-gold.svg",
    "x",
    "#f5b100",
    "32px"
  ),
  createData(
    <Icon1 src={HNPIcon} alt="" />,
    "Header Northern Preferred",
    "",
    "x",
    "#f5b100",
    ""
  ),
  createData(
    <Icon1 src={HeaderCartIcon} alt="" />,
    "Header Cart",
    "cart_gold.svg",
    "x",
    "#f5b100",
    "40px"
  ),
  createData(
    <Icon1 src={HSBarcodeIcon} alt="" />,
    "Header Search Barcode",
    "upc.svg",
    "x",
    "#505050",
    ""
  ),
  createData(
    <Icon1 src={FFacebookIcon} alt="" />,
    "Footer Facebook",
    "Facebook_circle_pictogram.svg",
    "x",
    "#505050",
    "32px"
  ),
  createData(
    <Icon1 src={FTwitterIcon} alt="" />,
    "Footer Twitter",
    "twitter.svg",
    "x",
    "#505050",
    "32px"
  ),
  createData(
    <Icon1 src={FYoutubeIcon} alt="" />,
    "Footer YouTube",
    "YouTube_social_dark_circle.svg",
    "x",
    "#505050",
    "32px"
  ),
  createData(
    <Icon1 src={FPinterestIcon} alt="" />,
    "Footer Pinterest",
    "pinterest-round.svg",
    "x",
    "#505050",
    "32px"
  ),
  createData(
    <Icon1 src={FInstagramIcon} alt="" />,
    "Footer Instagram",
    "instagram-circle.svg",
    "x",
    "#505050",
    "32px"
  ),
  createData(
    <Icon2 src={FulStoresIcon} alt="" />,
    "Fulfillment Stores",
    "icon-store-black.svg",
    "x",
    "",
    "72px"
  ),
  createData(
    <Icon3 src={FulBOPISIcon} alt="" />,
    "Fulfillment BOPIS",
    "delivery-icon-store-pickup.svg",
    "x",
    "",
    "72px"
  ),
  createData(
    <Icon2 src={FulCurbsideIcon} alt="" />,
    "Fulfillment Curbside",
    "curbside-pickup.svg",
    "x",
    "",
    "72px"
  ),
  createData(
    <Icon2 src={FulShipToStoreIcon} alt="" />,
    "Fulfillment Ship to Store",
    "ship-to-store.svg",
    "x",
    "",
    "72px"
  ),
  createData(
    <Icon2 src={FulSDDeliveryIcon} alt="" />,
    "Fulfillment Same Day Delivery",
    "same-day-delivery.svg",
    "x",
    "",
    "72px"
  ),
  createData(
    <Icon2 src={FulDeliveryIcon} alt="" />,
    "Fulfillment Delivery",
    "shipping.svg",
    "x",
    "",
    "72px"
  ),
];


//Export the Table of Icons
export const IconTable = () => (
  <>
    <h1>Icon Image Directory - Custom Icons</h1>
    <h1>https://www.northerntool.com/images/v9/Icon/...</h1>
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Image Name</StyledTableCell>
            <StyledTableCell align="center">Is NOT Material UI</StyledTableCell>
            <StyledTableCell align="center">Hex Color</StyledTableCell>
            <StyledTableCell align="center">Size</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Image}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.Description}
              </StyledTableCell>
              <StyledTableCell align="center">{row.ImageName}</StyledTableCell>
              <StyledTableCell align="center">{row.IsNotMUI}</StyledTableCell>
              <StyledTableCell align="center">{row.HexColor}</StyledTableCell>
              <StyledTableCell align="center">{row.Size}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);

//For square shape
const Template = (args) => <Icon1 {...args} />;
//For reactangle shape
const Template2 = (args) => <Icon2 {...args} />;

//Header Advantage Icon
export const HeaderAd = Template.bind({});
HeaderAd.args = {
  src: HeaderAdIcon,
  alt: "Header Advantage",
  size: "iconMedium",
};
HeaderAd.storyName = "Header Advantage";

//Advantage Badge Icon
export const AdBadge = Template.bind({});
AdBadge.args = {
  src: AdBadgeIcon,
  alt: "Advantage Badge",
  size: "iconSmall",
};
AdBadge.storyName = "Advantage Badge";

//Header Platinum
export const HeaderPlat = Template.bind({});
HeaderPlat.args = {
  src: HeaderPlatIcon,
  alt: "Header Platinum",
  size: "iconMedium",
};
HeaderPlat.storyName = "Header Platinum";

//Header Great Plains
export const HeaderGP = Template.bind({});
HeaderGP.args = {
  src: HeaderGPIcon,
  alt: "Header Great Plains",
  size: "iconMedium",
};
HeaderPlat.storyName = "Header Great Plains";

//Header Northern Preferred
export const HNP = Template.bind({});
HNP.args = {
  src: HNPIcon,
  alt: "Header Great Plains",
  size: "iconMedium",
};
HNP.storyName = "Header Northern Preferred";

//Header Cart
export const HeaderCart = Template.bind({});
HeaderCart.args = {
  src: HeaderCartIcon,
  alt: "Header Cart",
  size: "iconMedium",
};
HeaderCart.storyName = "Header Cart";

//Header Search Barcode
export const HSBarcode = Template.bind({});
HSBarcode.args = {
  src: HSBarcodeIcon,
  alt: "Header Search Barcode",
  size: "iconMedium",
};
HSBarcode.storyName = "Header Search Barcode";
//Footer Facebook
export const FFacebook = Template.bind({});
FFacebook.args = {
  src: FFacebookIcon,
  alt: "Footer Facebook",
  size: "iconMedium",
};
FFacebook.storyName = "Footer Facebook";

//Footer Twitter
export const FTwitter = Template.bind({});
FTwitter.args = {
  src: FTwitterIcon,
  alt: "Footer Twitter",
  size: "iconMedium",
};
FTwitter.storyName = "Footer Twitter";

//Footer Youtube
export const FYoutube = Template.bind({});
FYoutube.args = {
  src: FYoutubeIcon,
  alt: "Footer Youtube",
  size: "iconMedium",
};
FYoutube.storyName = "Footer Youtube";

//Footer Pinterest
export const FPinterest = Template.bind({});
FPinterest.args = {
  src: FPinterestIcon,
  alt: "Footer Pinterest",
  size: "iconMedium",
};
FPinterest.storyName = "Footer Pinterest";

//Footer Instagram
export const FInstagram = Template.bind({});
FInstagram.args = {
  src: FInstagramIcon,
  alt: "Footer Instagram",
  size: "iconMedium",
};
FInstagram.storyName = "Footer Instagram";

//Fulfillment Stores
export const FulStores = Template2.bind({});
FulStores.args = {
  src: FulStoresIcon,
  alt: "Fulfillment Stores",
  size: "iconWide",
};
FulStores.storyName = "Fulfillment Stores";

//Fulfillment BOPIS
export const FulBOPIS = Template2.bind({});
FulBOPIS.args = {
  src: FulBOPISIcon,
  alt: "Fulfillment BOPIS",
  size: "iconLong",
};
FulBOPIS.storyName = "Fulfillment BOPIS";

//Fulfillment Curbside
export const FulCurbside = Template2.bind({});
FulCurbside.args = {
  src: FulCurbsideIcon,
  alt: "Fulfillment FulCurbside",
  size: "iconWide",
};
FulCurbside.storyName = "Fulfillment Curbside";

//Fulfillment Ship to Store
export const FulShipToStore = Template2.bind({});
FulShipToStore.args = {
  src: FulShipToStoreIcon,
  alt: "Fulfillment Ship to Store",
  size: "iconWide",
};
FulShipToStore.storyName = "Fulfillment Ship to Store";

//Fulfillment Same Day Delivery
export const FulSDDelivery = Template2.bind({});
FulSDDelivery.args = {
  src: FulSDDeliveryIcon,
  alt: "Fulfillment Same Day Delivery",
  size: "iconWide",
};
FulSDDelivery.storyName = "Fulfillment Same Day Delivery";

//Fulfillment Delivery
export const FulDelivery = Template2.bind({});
FulDelivery.args = {
  src: FulDeliveryIcon,
  alt: "Fulfillment Delivery",
  size: "iconWide",
};
FulDelivery.storyName = "Fulfillment Delivery";

