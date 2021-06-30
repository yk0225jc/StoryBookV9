import React from 'react'
import Logo from './Logo'

import Advantage from './Logo_Images/Advantage_logo_K.png'
import NorthernBlack from './Logo_Images/logo_blk-gold.svg'
import NorthernWhite from './Logo_Images/logo_gold-wht.svg'
import Platinum from './Logo_Images/plat-logo.svg'
import GreatPlains from './Logo_Images/great-plains-logo.svg'
import Footer from './Logo_Images/nte-tagline-horizontal.svg'
import FortyYears from './Logo_Images/over_40_years_in_business.svg'

export default {
    title: 'Design System/Logos + Icons',
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
  alt: 'Logo - tagline for for footer'
}

//Over 40 Years in Business Logo
export const BusinessLogo = Template.bind({})
BusinessLogo.args = {
  src: FortyYears,
  alt: 'Over 40 Years in Business'
}