import React from "react";
import { SvgClockIcon } from "../components/svg/SvgClockIcon";
import { SvgEmailIcon } from "../components/svg/SvgEmailIcon";
import { SvgPhoneIcon } from "../components/svg/SvgPhoneIcon";


  export const CardInfo = [
    {
      title: 'Mon - Fri  8:00 AM - 5:00 PM',
      content: '',
      icon: React.createElement(SvgClockIcon)
    },
    {
      title: 'info@ecowaveus.com',
      content: '',
      icon: React.createElement(SvgEmailIcon)
    },
    {
      title: '(978) 500  4081',
      content: '',
      icon: React.createElement(SvgPhoneIcon)
    }
  ]