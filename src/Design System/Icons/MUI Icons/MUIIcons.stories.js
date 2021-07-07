import React from "react";
import { MUIIcon } from "./MUIIcons";
import { Theme } from "../../../ColorTable";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import KeyboardArrowDownIcon from "./MUIIcon_Images/KeyboardArrowDown.svg";
import KeyboardArrowLeftIcon from "./MUIIcon_Images/KeyboardArrowLeft.svg";
import KeyBoardArrowRightIcon from "./MUIIcon_Images/KeyBoardArrowRight.svg";
import CloseIcon from "./MUIIcon_Images/close.svg";
import PlaceIcon from "./MUIIcon_Images/Place.svg";
import MenuBookIcon from "./MUIIcon_Images/MenuBook.svg";
import HelpIcon from "./MUIIcon_Images/Help.svg";
import PersonIcon from "./MUIIcon_Images/Person.svg";
import SearchIcon from "./MUIIcon_Images/Search.svg";
import MicIcon from "./MUIIcon_Images/Mic.svg";
import CameraAltIcon from "./MUIIcon_Images/CameraAlt.svg";
import FeedbackIcon from "./MUIIcon_Images/Feedback.svg";
import CheckCircleIcon from "./MUIIcon_Images/CheckCircle.svg";
import WarningIcon from "./MUIIcon_Images/Warning.svg";
import ErrorIcon from "./MUIIcon_Images/Error.svg";
import BookmarkIcon from "./MUIIcon_Images/Bookmark.svg";
import BookmarkBorderIcon from "./MUIIcon_Images/BookmarkBorder.svg";
import ChatIcon from "./MUIIcon_Images/Chat.svg";
import CheckBoxOutlineBlankIcon from "./MUIIcon_Images/CheckBoxOutlineBlank.svg";
import CheckBoxIcon from "./MUIIcon_Images/CheckBox.svg";
import CloseFullscreenIcon from "./MUIIcon_Images/CloseFullscreen.svg";
import CreditCardIcon from "./MUIIcon_Images/CreditCard.svg";
import DoneIcon from "./MUIIcon_Images/Done.svg";
import GetAppIcon from "./MUIIcon_Images/GetApp.svg";
import EditIcon from "./MUIIcon_Images/Edit.svg";
import EmailIcon from "./MUIIcon_Images/Email.svg";
import ExpandLessIcon from "./MUIIcon_Images/ExpandLess.svg";
import FlagIcon from "./MUIIcon_Images/Flag.svg";
import StarIcon from "./MUIIcon_Images/Star.svg";
import HelpOutlineIcon from "./MUIIcon_Images/HelpOutline.svg";
import LocalOfferIcon from "./MUIIcon_Images/LocalOffer.svg";
import LocalShippingIcon from "./MUIIcon_Images/LocalShipping.svg";
import LockIcon from "./MUIIcon_Images/Lock.svg";
import MenuIcon from "./MUIIcon_Images/Menu.svg";
import MyLocationIcon from "./MUIIcon_Images/MyLocation.svg";
import OpenInNewIcon from "./MUIIcon_Images/OpenInNew.svg";
import PauseIcon from "./MUIIcon_Images/Pause.svg";
import PhoneIcon from "./MUIIcon_Images/Phone.svg";
import PictureAsPdfIcon from "./MUIIcon_Images/PictureAsPdf.svg";
import PlayArrowIcon from "./MUIIcon_Images/PlayArrow.svg";
import PrintIcon from "./MUIIcon_Images/Print.svg";
import QuestionAnswerIcon from "./MUIIcon_Images/QuestionAnswer.svg";
import RadioButtonCheckedIcon from "./MUIIcon_Images/RadioButtonChecked.svg";
import RadioButtonUncheckedIcon from "./MUIIcon_Images/RadioButtonUnchecked.svg";
import ForwardIcon from "./MUIIcon_Images/Forward.svg";
import ReceiptIcon from "./MUIIcon_Images/Receipt.svg";
import StarHalfIcon from "./MUIIcon_Images/StarHalf.svg";
import StoreIcon from "./MUIIcon_Images/Store.svg";
import ToggleOffIcon from "./MUIIcon_Images/ToggleOff.svg";
import ToggleOnIcon from "./MUIIcon_Images/ToggleOn.svg";
import VerifiedUserIcon from "./MUIIcon_Images/VerifiedUser.svg";
import VisibilityIcon from "./MUIIcon_Images/Visibility.svg";
import VisibilityOffIcon from "./MUIIcon_Images/VisibilityOff.svg";
import ZoomInIcon from "./MUIIcon_Images/ZoomIn.svg";
import ZoomOutIcon from "./MUIIcon_Images/ZoomOut.svg";
import AddIcon from "./MUIIcon_Images/Add.svg";

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
    <MUIIcon src={KeyboardArrowDownIcon} alt="" />,
    "Drop Down Indicator",
    "KeyboardArrowDown",
    "",
    "#505050",
    "24px"
  ),
  createData(
    <MUIIcon src={KeyboardArrowLeftIcon} alt="" />,
    "Left Arrow",
    "KeyboardArrowLeft",
    "",
    "#898989",
    "24px"
  ),
  createData(
    <MUIIcon src={KeyBoardArrowRightIcon} alt="" />,
    "Right Arrow",
    "KeyboardArrowRight",
    "",
    "#898989",
    "24px"
  ),
  createData(
    <MUIIcon src={CloseIcon} alt="" />,
    "Close 'X'",
    "Close",
    "",
    "#898989",
    "32px"
  ),
  createData(
    <MUIIcon src={PlaceIcon} alt="" />,
    "Header Store",
    "Place",
    "x",
    "#f5b100",
    "32px"
  ),
  createData(
    <MUIIcon src={MenuBookIcon} alt="" />,
    "Header Catalog",
    "MenuBook",
    "x",
    "#f5b100",
    "32px"
  ),
  createData(
    <MUIIcon src={HelpIcon} alt="" />,
    "Header Support",
    "Help",
    "",
    "#f5b100",
    "32px"
  ),
  createData(
    <MUIIcon src={PersonIcon} alt="" />,
    "Header Account",
    "Person",
    "",
    "#f5b100",
    "32px"
  ),
  createData(
    <MUIIcon src={SearchIcon} alt="" />,
    "Header Search",
    "Search",
    "",
    "#505050",
    "40px"
  ),
  createData(
    <MUIIcon src={MicIcon} alt="" />,
    "Header Search Voice",
    "Mic",
    "",
    "#505050",
    "40px"
  ),
  createData(
    <MUIIcon src={CameraAltIcon} alt="" />,
    "Header Search Image",
    "CameraAlt",
    "",
    "#505050",
    ""
  ),
  createData(
    <MUIIcon src={FeedbackIcon} alt="" />,
    "Feedback",
    "Feedback",
    "",
    "#000000",
    "40px"
  ),
  createData(
    <MUIIcon src={CheckCircleIcon} alt="" />,
    "Success",
    "CheckCircle",
    "",
    "#008500",
    "24px"
  ),
  createData(
    <MUIIcon src={WarningIcon} alt="" />,
    "Warning",
    "Warning",
    "",
    "#85620b",
    "24px"
  ),
  createData(
    <MUIIcon src={ErrorIcon} alt="" />,
    "Error",
    "Error",
    "",
    "#e00000",
    "24px"
  ),
  createData(
    <MUIIcon src={BookmarkIcon} alt="" />,
    "Bookmark",
    "Bookmark",
    "",
    "",
    "20px"
  ),
  createData(
    <MUIIcon src={BookmarkBorderIcon} alt="" />,
    "Bookmark",
    "BookmarkBorder",
    "",
    "",
    "20px"
  ),
  createData(
    <MUIIcon src={ChatIcon} alt="" />,
    "Chat",
    "Chat",
    "",
    "#000000",
    "24px"
  ),
  createData(
    <MUIIcon src={CheckBoxOutlineBlankIcon} alt="" />,
    "Checkbox Unchecked, Forms",
    "CheckBoxOutlineBlank",
    "",
    "#000000",
    "24px"
  ),
  createData(
    <MUIIcon src={CheckBoxIcon} alt="" />,
    "Checkbox Checked",
    "Checkbox",
    "",
    "#008500",
    "24px"
  ),
  createData(
    <MUIIcon src={CloseFullscreenIcon} alt="" />,
    "Close Fullscreen",
    "",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={CreditCardIcon} alt="" />,
    "Credit Card",
    "CreditCard",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={DoneIcon} alt="" />,
    "Check Mark",
    "Done",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={GetAppIcon} alt="" />,
    "Download",
    "GetApp",
    "",
    "",
    ""
  ),
  createData(<MUIIcon src={EditIcon} alt="" />, "Edit", "Edit", "", "", ""),
  createData(
    <MUIIcon src={EmailIcon} alt="" />,
    "Envelope",
    "Email",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={ExpandLessIcon} alt="" />,
    "Upward Arrow",
    "ExpandLess",
    "",
    "",
    ""
  ),
  createData(<MUIIcon src={FlagIcon} alt="" />, "Flag", "Flag", "", "", ""),
  createData(<MUIIcon src={StarIcon} alt="" />, "Star", "Star", "", "", ""),
  createData(
    <MUIIcon src={HelpOutlineIcon} alt="" />,
    "Support",
    "HelpOutline",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={LocalOfferIcon} alt="" />,
    "Sale Tag",
    "LocalOffer",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={LocalShippingIcon} alt="" />,
    "Delivery Truck",
    "LocalShipping",
    "",
    "",
    ""
  ),
  createData(<MUIIcon src={LockIcon} alt="" />, "Secure", "Lock", "", "", ""),
  createData(
    <MUIIcon src={MenuIcon} alt="" />,
    "Hamburger Menu",
    "Menu",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={MyLocationIcon} alt="" />,
    "",
    "MyLocation",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={OpenInNewIcon} alt="" />,
    "",
    "OpenInNew",
    "",
    "",
    ""
  ),
  createData(<MUIIcon src={PauseIcon} alt="" />, "", "Pause", "", "", ""),
  createData(<MUIIcon src={PhoneIcon} alt="" />, "", "Phone", "", "", ""),
  createData(
    <MUIIcon src={PictureAsPdfIcon} alt="" />,
    "",
    "PictureAsPdf",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={PlayArrowIcon} alt="" />,
    "",
    "PlayArrow",
    "",
    "",
    ""
  ),
  createData(<MUIIcon src={PrintIcon} alt="" />, "", "Print", "", "", ""),
  createData(
    <MUIIcon src={QuestionAnswerIcon} alt="" />,
    "",
    "QuestionAnswer",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={RadioButtonCheckedIcon} alt="" />,
    "",
    "RadioButtonChecked",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={RadioButtonUncheckedIcon} alt="" />,
    "",
    "RadioButtonUnchecked",
    "",
    "",
    ""
  ),
  createData(<MUIIcon src={ForwardIcon} alt="" />, "", "", "", "", ""),
  createData(<MUIIcon src={ReceiptIcon} alt="" />, "", "Receipt", "", "", ""),
  createData(<MUIIcon src={StarHalfIcon} alt="" />, "", "StarHalf", "", "", ""),
  createData(<MUIIcon src={StoreIcon} alt="" />, "", "Store", "", "", ""),
  createData(
    <MUIIcon src={ToggleOffIcon} alt="" />,
    "",
    "ToggleOff",
    "",
    "",
    ""
  ),
  createData(<MUIIcon src={ToggleOnIcon} alt="" />, "", "ToggleOn", "", "", ""),
  createData(
    <MUIIcon src={VerifiedUserIcon} alt="" />,
    "",
    "VerifiedUser",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={VisibilityIcon} alt="" />,
    "",
    "Visibility",
    "",
    "",
    ""
  ),
  createData(
    <MUIIcon src={VisibilityOffIcon} alt="" />,
    "",
    "VisibilityOff",
    "",
    "",
    ""
  ),
  createData(<MUIIcon src={ZoomInIcon} alt="" />, "", "ZoomIn", "", "", ""),
  createData(<MUIIcon src={ZoomOutIcon} alt="" />, "", "ZoomOut", "", "", ""),
  createData(<MUIIcon src={AddIcon} alt="" />, "", "Add", "", "", ""),
];

//Export the Table of Icons
export const IconTable = () => (
  <>
    <h1>Icon Image Directory - Material UI Icons</h1>
    <h1>These can be found from the installed Material UI module</h1>
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

const Template = (args) => <MUIIcon {...args} />;
//individual Components
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
  alt: "Header Catalog",
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

export const Cam = Template.bind({});
Cam.args = {
  src: CameraAltIcon,
  alt: "Header Search Image",
  size: "iconMedium",
};
Cam.storyName = "Header Search Image";

export const Feedback = Template.bind({});
Feedback.args = {
  src: FeedbackIcon,
  alt: "Feedback",
  size: "iconMedium",
};
Feedback.storyName = "Feedback";

export const CheckCircle = Template.bind({});
CheckCircle.args = {
  src: CheckCircleIcon,
  alt: "Success",
  size: "iconMedium",
};
CheckCircle.storyName = "Success";

export const Warning = Template.bind({});
Warning.args = {
  src: WarningIcon,
  alt: "Warning",
  size: "iconMedium",
};
Warning.storyName = "Warning";

export const Error = Template.bind({});
Error.args = {
  src: ErrorIcon,
  alt: "Error",
  size: "iconMedium",
};
Error.storyName = "Error";

export const Bookmark = Template.bind({});
Bookmark.args = {
  src: BookmarkIcon,
  alt: "Bookmark",
  size: "iconMedium",
};
Bookmark.storyName = "Bookmark";

export const BookmarkBorder = Template.bind({});
BookmarkBorder.args = {
  src: BookmarkBorderIcon,
  alt: "Bookmark",
  size: "iconMedium",
};
BookmarkBorder.storyName = "Bookmark";

export const Chat = Template.bind({});
Chat.args = {
  src: ChatIcon,
  alt: "Chat",
  size: "iconMedium",
};
Chat.storyName = "Chat";

export const CheckBoxOutlineBlank = Template.bind({});
CheckBoxOutlineBlank.args = {
  src: CheckBoxOutlineBlankIcon,
  alt: "Checkbox Unchecked, Forms",
  size: "iconMedium",
};
CheckBoxOutlineBlank.storyName = "Checkbox Unchecked, Forms";

export const CheckBox = Template.bind({});
CheckBox.args = {
  src: CheckBoxIcon,
  alt: "Checkbox Checked",
  size: "iconMedium",
};
CheckBox.storyName = "Checkbox Checked";

export const CloseFullscreen = Template.bind({});
CloseFullscreen.args = {
  src: CloseFullscreenIcon,
  alt: "CloseFullscreen",
  size: "iconMedium",
};
CloseFullscreen.storyName = "Close  Fullscreen";

export const CreditCard = Template.bind({});
CreditCard.args = {
  src: CreditCardIcon,
  alt: "Credit Card",
  size: "iconMedium",
};
CreditCard.storyName = "Credit Card";

export const Done = Template.bind({});
Done.args = {
  src: DoneIcon,
  alt: "Check Mark",
  size: "iconMedium",
};
Done.storyName = "Check Mark";

export const GetApp = Template.bind({});
GetApp.args = {
  src: GetAppIcon,
  alt: "Download",
  size: "iconMedium",
};
GetApp.storyName = "Download";

export const Edit = Template.bind({});
Edit.args = {
  src: EditIcon,
  alt: "Edit",
  size: "iconMedium",
};
Edit.storyName = "Edit";

export const Email = Template.bind({});
Email.args = {
  src: EmailIcon,
  alt: "Envelope",
  size: "iconMedium",
};
Email.storyName = "Envelope";

export const ExpandLess = Template.bind({});
ExpandLess.args = {
  src: ExpandLessIcon,
  alt: "Upward Arrow",
  size: "iconMedium",
};
ExpandLess.storyName = "Upward Arrow";

export const Flag = Template.bind({});
Flag.args = {
  src: FlagIcon,
  alt: "Flag",
  size: "iconMedium",
};
Flag.storyName = "Flag";

export const Star = Template.bind({});
Star.args = {
  src: StarIcon,
  alt: "Star",
  size: "iconMedium",
};
Star.storyName = "Star";

export const HelpOutline = Template.bind({});
HelpOutline.args = {
  src: HelpOutlineIcon,
  alt: "Support",
  size: "iconMedium",
};
HelpOutline.storyName = "Support";

export const LocalOffer = Template.bind({});
LocalOffer.args = {
  src: LocalOfferIcon,
  alt: "Sale Tag",
  size: "iconMedium",
};
LocalOffer.storyName = "Sale Tag";

export const LocalShipping = Template.bind({});
LocalShipping.args = {
  src: LocalShippingIcon,
  alt: "Delivery Truck",
  size: "iconMedium",
};
LocalShipping.storyName = "Delivery Truck";

export const Lock = Template.bind({});
Lock.args = {
  src: LockIcon,
  alt: "Secure",
  size: "iconMedium",
};
Lock.storyName = "Secure";

export const Menu = Template.bind({});
Menu.args = {
  src: MenuIcon,
  alt: "Menu",
  size: "iconMedium",
};
Menu.storyName = "Menu";

export const MyLocation = Template.bind({});
MyLocation.args = {
  src: MyLocationIcon,
  alt: "MyLocation",
  size: "iconMedium",
};
MyLocation.storyName = "MyLocation";

export const OpenInNew = Template.bind({});
OpenInNew.args = {
  src: OpenInNewIcon,
  alt: "OpenInNew",
  size: "iconMedium",
};
OpenInNew.storyName = "OpenInNew";

export const Pause = Template.bind({});
Pause.args = {
  src: PauseIcon,
  alt: "Pause",
  size: "iconMedium",
};
Pause.storyName = "Pause";

export const Phone = Template.bind({});
Phone.args = {
  src: PhoneIcon,
  alt: "Phone",
  size: "iconMedium",
};
Phone.storyName = "Phone";

export const PictureAsPdf = Template.bind({});
PictureAsPdf.args = {
  src: PictureAsPdfIcon,
  alt: "PictureAsPdf",
  size: "iconMedium",
};
Bookmark.storyName = "PictureAsPdf";

export const PlayArrow = Template.bind({});
PlayArrow.args = {
  src: PlayArrowIcon,
  alt: "PlayArrow",
  size: "iconMedium",
};
PlayArrow.storyName = "PlayArrow";

export const Print = Template.bind({});
Print.args = {
  src: PrintIcon,
  alt: "Print",
  size: "iconMedium",
};
Print.storyName = "Print";

export const QuestionAnswer = Template.bind({});
QuestionAnswer.args = {
  src: QuestionAnswerIcon,
  alt: "QuestionAnswer",
  size: "iconMedium",
};
QuestionAnswer.storyName = "Question Answer";

export const RadioButtonChecked = Template.bind({});
RadioButtonChecked.args = {
  src: RadioButtonCheckedIcon,
  alt: "RadioButtonChecked",
  size: "iconMedium",
};
Bookmark.storyName = "Radio  ButtonChecked";

export const RadioButtonUnchecked = Template.bind({});
RadioButtonUnchecked.args = {
  src: RadioButtonUncheckedIcon,
  alt: "Radio Button Unchecked",
  size: "iconMedium",
};
RadioButtonUnchecked.storyName = "Radio Button Unchecked";

export const Forward = Template.bind({});
Forward.args = {
  src: ForwardIcon,
  alt: "Forward",
  size: "iconMedium",
};
Forward.storyName = "Forward";

export const Receipt = Template.bind({});
Receipt.args = {
  src: ReceiptIcon,
  alt: "Receipt",
  size: "iconMedium",
};
Receipt.storyName = "Receipt";

export const StarHalf = Template.bind({});
StarHalf.args = {
  src: StarHalfIcon,
  alt: "StarHalf",
  size: "iconMedium",
};
StarHalf.storyName = "StarHalf";

export const Store = Template.bind({});
Store.args = {
  src: StoreIcon,
  alt: "Store",
  size: "iconMedium",
};
Store.storyName = "Store";

export const ToggleOff = Template.bind({});
ToggleOff.args = {
  src: ToggleOffIcon,
  alt: "ToggleOff",
  size: "iconMedium",
};
ToggleOff.storyName = "ToggleOff";

export const ToggleOn = Template.bind({});
ToggleOn.args = {
  src: ToggleOnIcon,
  alt: "ToggleOn",
  size: "iconMedium",
};
ToggleOn.storyName = "ToggleOn";

export const VerifiedUser = Template.bind({});
VerifiedUser.args = {
  src: VerifiedUserIcon,
  alt: "VerifiedUser",
  size: "iconMedium",
};
VerifiedUser.storyName = "VerifiedUser";

export const Visibility = Template.bind({});
Visibility.args = {
  src: VisibilityIcon,
  alt: "Visibility",
  size: "iconMedium",
};
Visibility.storyName = "Visibility";
export const VisibilityOff = Template.bind({});
VisibilityOff.args = {
  src: VisibilityOffIcon,
  alt: "VisibilityOff",
  size: "iconMedium",
};
VisibilityOff.storyName = "VisibilityOff";
export const ZoomIn = Template.bind({});
ZoomIn.args = {
  src: ZoomInIcon,
  alt: "ZoomIn",
  size: "iconMedium",
};
ZoomIn.storyName = "ZoomIn";
export const ZoomOut = Template.bind({});
ZoomOut.args = {
  src: ZoomOutIcon,
  alt: "ZoomOut",
  size: "iconMedium",
};
ZoomOut.storyName = "ZoomOut";
export const Add = Template.bind({});
Add.args = {
  src: AddIcon,
  alt: "Add",
  size: "iconMedium",
};
Add.storyName = "Add";
