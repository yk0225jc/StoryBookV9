import React from 'react'
import Logo from './Logo'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Theme} from '../../ColorTable'
import './Logo.css'



import Advantage from './Logo_Images/Advantage_logo_K.png'
import NorthernBlack from './Logo_Images/logo_blk-gold.svg'
import NorthernWhite from './Logo_Images/logo_gold-wht.svg'
import Platinum from './Logo_Images/plat-logo.svg'
import GreatPlains from './Logo_Images/great-plains-logo.svg'
import Footer from './Logo_Images/nte-tagline-horizontal.svg'
import FortyYears from './Logo_Images/over_40_years_in_business.svg'

export default {
    title: 'Design System/Logos',
    component : Logo,
  };



const Template = (args) => <Logo {...args} />

//Advantage Logo 
export const AdvantageLogo = Template.bind({})
AdvantageLogo.args = {
    src : Advantage,
    alt: 'Advantage Logo'

}


//Northern  Logo - bug with black text.
export const NorthernBlackLogo = Template.bind({})
NorthernBlackLogo.args ={
  src: NorthernBlack,
  alt : 'Northern Black Logo with black text'
}

//Norhtern Logo- bug with white text
export const NorthernWhiteLogo = Template.bind({})
NorthernWhiteLogo.args ={
  src: NorthernWhite,
  alt : 'Logo - bug with white text, reversed'
}
NorthernWhiteLogo.parameters = {
  backgrounds: { default: 'black' }

}

//Platinum Logo - speicial customer program
export const PlatinumLogo = Template.bind({})
PlatinumLogo.args ={
  src: Platinum,
  alt : 'Platinum logo - special customer program'
}

//Great Plains - Great Plains - special customer program
export const GreatPlainsLogo = Template.bind({})
GreatPlainsLogo.args ={
  src: GreatPlains,
  alt : 'Great Plains - special customer program'
}

//Northern Footer logo
export const FooterLogo = Template.bind({})
FooterLogo.args = {
  src: Footer,
  alt: 'Logo - tagline for for footer',
  
}
FooterLogo.parameters = {
  backgrounds: { default: 'black' }

}


//Over 40 Years in Business Logo
export const BusinessLogo = Template.bind({})
BusinessLogo.args = {
  src: FortyYears,
  alt: 'Over 40 Years in Business'
}


//Style for table 
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: Theme.palette.primary.dark,
    color: Theme.palette.primary.white,
  },
  body: {
    fontSize: 19,
    '&:nth-child(2)': { // white background for black text
      backgroundColor:Theme.palette.primary.white,
    },
    '&:nth-child(3)': {
      backgroundColor:Theme.palette.primary.white,
    },
    '&:nth-child(4)': {
      backgroundColor:Theme.palette.primary.white,
    },
    },
}))(TableCell);




const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(3)': { //black background for the white logo
      backgroundColor:Theme.palette.primary.dark,
    },
    '&:nth-of-type(5)': {
      backgroundColor: Theme.palette.primary.dark,
    },

  },
}))(TableRow);

function createData(Image, Description, ImageName, Color) {
  return { Image, Description, ImageName, Color};
}



//Table row Content
const rows = [
  createData(<Logo src={Advantage} alt='' />, 'Logo - bug with black text', 'logo_blk-gold.svg', ''),
  createData(<Logo src={NorthernBlack} alt=''/>, 'Logo - bug with white text, reversed', 'logo_gold-wht.svg', ''),
  createData(<Logo src={NorthernWhite} alt=''/>, 'Advantage logo', 'Advantage_logo_K.png', ''),
  createData(<Logo src={Platinum} alt=''/>, 'Platinum logo - special customer program', 'plat-logo.svg', ''),
  createData(<Logo src={Footer} alt=''/>, 'Logo - tagline for for footer', 'nte-tagline-horizontal.svg', ''),
  createData(<Logo src={GreatPlains} alt=''/>, 'Great Plains - special customer program', 'great-plains-logo.svg', ''),
  createData(<Logo src={FortyYears} alt=''/>, 'Over 40 Years in Business', 'over_40_years_in_business.svg', '#505050'),
];


//Export the Table of Logos
export const logoTable = () =>
( 
  <>
  <h1>Logo Image Directory </h1>   
  <h1>https://www.northerntool.com/images/v9/logos/...</h1>
  <TableContainer component={Paper}>
  <Table aria-label="customized table">
    <TableHead>
      <TableRow>
        <StyledTableCell>Image</StyledTableCell>
        <StyledTableCell align="left">Description</StyledTableCell>
        <StyledTableCell align="left">Image Name</StyledTableCell>
        <StyledTableCell align="left">Color</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <StyledTableRow key={row.name}>
          <StyledTableCell component="th" scope="row">
            {row.Image}
          </StyledTableCell>
          <StyledTableCell align="left">{row.Description}</StyledTableCell>
          <StyledTableCell align="left">{row.ImageName}</StyledTableCell>
          <StyledTableCell align="left">{row.Color}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

</>

) 