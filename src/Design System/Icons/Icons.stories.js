import React from 'react'
import Icons from './Icons'
import {Theme} from '../../ColorTable'

import HeaderAdIcon from './Icon_Images/adv_gold.svg'
import AdBadgeIcon from './Icon_Images/adv-badge-sm.png'
import HeaderPlatIcon from './Icon_Images/plat-bug-gold.svg'

export default {
    title: 'Design System/Icons',
    component : Icons,
  };

const Template = (args) =><Icons {...args} />

//Header Advantage Icon
export const HeaderAd = Template.bind({});
  HeaderAd.args={
    src : HeaderAdIcon,
    alt : 'Header Advantage'
  }
HeaderAd.storyName = 'Header Advantage'

//Advantage Badge Icon
export const AdBadge = Template.bind({});
AdBadge.args={
    src : AdBadgeIcon,
    alt : 'Advantage Badge'
  }
  AdBadge.storyName = 'Advantage Badge'

//Header Platinum
export const HeaderPlat = Template.bind({});
HeaderPlat.args={
    src : HeaderPlatIcon,
    alt : 'Header Platinum'
  }
  HeaderPlat.storyName = 'Header Platinum'
