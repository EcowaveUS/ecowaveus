import React from "react";
import { SvgClockIcon } from "../components/svg/SvgClockIcon";
import { SvgEmailIcon } from "../components/svg/SvgEmailIcon";
import { SvgPhoneIcon } from "../components/svg/SvgPhoneIcon";

import iconHeatPumps from "../assets/icons/Icon-heat-pumps.png";
import iconEvCharger from "../assets/icons/Icon-ev-charger.png";
import iconEnergyStorage from "../assets/icons/Icon-energy-storage.png";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const CardInfo = [
  {
    title: "Mon - Fri  8:00 AM - 5:00 PM",
    content: "",
    icon: React.createElement(SvgClockIcon),
  },
  {
    title: "info@ecowaveus.com",
    content: "",
    icon: React.createElement(SvgEmailIcon),
  },
  {
    title: "(978) 500  4081",
    content: "",
    icon: React.createElement(SvgPhoneIcon),
  },
];

export const brandImages = [
  "/images/brands/mitsubishi-logo.png",
  "/images/brands/lg-logo.png",
  "/images/brands/fujitsu-logo.png",
  "/images/brands/daikin-logo.png",
  "/images/brands/tesla-logo.png",
  "/images/brands/chargepoint-logo.png",
  "/images/brands/bosch-logo.png",
  "/images/brands/enphase-logo.png",
  "/images/brands/legrand-logo.png",
  "/images/brands/siemens-logo.png",
];

export const services = [
  {
    title: "Heat Pumps",
    content: "Efficient Comfort: Advanced solutions for heating and cooling.",
    url: "/heat-pumps",
    icon: iconHeatPumps,
  },
  {
    title: "EV-Chargers",
    content: "Charge Anywhere: Fast, reliable power for your electric vehicle.",
    url: "/ev-chargers",
    icon: iconEvCharger,
  },
  {
    title: "Energy Storage",
    content: "Store Smart: Harness and manage renewable energy efficiently.",
    url: "/energy-storage",
    icon: iconEnergyStorage,
  },
  {
    title: "Solar Panels",
    content: "Store Smart: Harness and manage renewable energy efficiently.",
    url: "/solar-panels",
    icon: iconHeatPumps,
  },
];

export const markersPoint = [
  {
    name: "Beverly",
    location: {
      lat: 42.558536553181014,
      lng: -70.8765824311865,
    },
  },
  {
    name: "Manchester-by-the-sea",
    location: {
      lat: 42.57857188696586,
      lng: -70.75963088439863,
    },
  },
  {
    name: "Hamilton",
    location: {
      lat: 42.63657829300348,
      lng: -70.84201579678896,
    },
  },
  {
    name: "Essex",
    location: {
      lat: 42.63218504964758,
      lng: -70.78307835647554,
    },
  },
  {
    name: "Gloucester",
    location: {
      lat: 42.61717309895631,
      lng: -70.65648123851348,
    },
  },
  {
    name: "Marblehead",
    location: {
      lat: 42.49984040414752,
      lng: -70.86060311120073,
    },
  },
  {
    name: "Wenham",
    location: {
      lat: 42.60537728415313,
      lng: -70.89386749597841,
    },
  },
  {
    name: "Ipswich",
    location: {
      lat: 42.68061772944799,
      lng: -70.84465632254317,
    },
  },
  {
    name: "Rockport",
    location: {
      lat: 42.65572915707854,
      lng: -70.62222953829264,
    },
  },
  {
    name: "Lynfield",
    location: {
      lat: 42.53843957611039,
      lng: -71.04549499206827,
    },
  },
];

export const location = [
  "Beverly",
  "Manchester-by-the-Sea",
  "Hamilton",
  "Essex",
  "Gloucester",
  "Marblehead",
  "Wenham",
  "Ipswich",
  "Rockport",
  "Lynnfield",
];



export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: React.createElement(AiIcons.AiFillHome),
    cName: "nav-text",
  },
  {
    title: "Heat Pumps",
    path: "/heat-pumps",
    icon: React.createElement(IoIcons.IoIosPaper),
    cName: "nav-text",
  },
  {
    title: "EV Chargers",
    path: "/ev-chargers",
    icon: React.createElement(FaIcons.FaCartPlus),
    cName: "nav-text",
  },
  {
    title: "Energy Storage",
    path: "/energy-storage",
    icon: React.createElement(IoIcons.IoMdPeople),
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about-us",
    icon: React.createElement(FaIcons.FaEnvelopeOpenText),
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    icon: React.createElement(IoIcons.IoMdHelpCircle),
    cName: "nav-text",
  },
];