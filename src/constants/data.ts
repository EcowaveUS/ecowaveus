import React from "react";
import { SvgClockIcon } from "../components/svg/SvgClockIcon";
import { SvgEmailIcon } from "../components/svg/SvgEmailIcon";
import { SvgPhoneIcon } from "../components/svg/SvgPhoneIcon";

import iconHeatPumps from "../assets/icons/Icon-heat-pumps.png";
import iconEvCharger from "../assets/icons/Icon-ev-charger.png";
import iconEnergyStorage from "../assets/icons/Icon-energy-storage.png";

import iconHeatPumpsNew from "../assets/icons/Icon-heat-pumps-new.svg";
import iconEvChargerNew from "../assets/icons/Icon-ev-charger-new.svg";
import iconEnergyStorageNew from "../assets/icons/Icon-energy-storage-new.svg";
import iconElectricalUpgrades from "../assets/icons/Icon-electrical-upgrades.webp";
import iconHPWaterHeaters from "../assets/icons/Icon-h-p-water-heaters.webp";

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
  "/images/brands/mitsubishi-logo.webp",
  "/images/brands/lg-logo.webp",
  "/images/brands/fujitsu-logo.webp",
  "/images/brands/daikin-logo.webp",
  "/images/brands/tesla-logo.webp",
  "/images/brands/chargepoint-logo.webp",
  "/images/brands/bosch-logo.webp",
  "/images/brands/enphase-logo.webp",
  "/images/brands/legrand-logo.webp",
  "/images/brands/siemens-logo.webp",
];

export const brandImagesNew = [
  "/images/brands-new/mitsubishi.webp",
  // "/images/brands-new/lg.webp",
  "/images/brands-new/bosch.png",
  "/images/brands-new/fujitsu.webp",
  "/images/brands-new/daikin.png",
  "/images/brands-new/tesla.webp",
];

export const services = [
  {
    title: "Heating & Cooling",
    content: "Efficient Comfort: Advanced solutions for heating and cooling.",
    url: "/heat-pumps",
    icon: iconHeatPumps,
    iconNew: iconHeatPumpsNew,
  },
  {
    title: "EV Chargers",
    content: "Charge Anywhere: Fast, reliable power for your electric vehicle.",
    url: "/ev-chargers",
    icon: iconEvCharger,
    iconNew: iconEvChargerNew,
  },
  {
    title: "Energy Storage",
    content: "Store Smart: Harness and manage renewable energy efficiently.",
    url: "/energy-storage",
    icon: iconEnergyStorage,
    iconNew: iconEnergyStorageNew,
  },
  {
    title: "Solar Panels",
    content: "Go Solar: Capture clean energy with high-performance panels.",
    url: "/solar-panels",
    icon: iconHeatPumps,
    iconNew: iconEnergyStorageNew,
  },
  {
    title: "Electrical Upgrades",
    content: "Future-Proof Power: Expand capacity, improve safety, and prep your home for heat pumps, EVs, solar, and batteries.",
    url: "/contact-us#contact-form",
    icon: iconHeatPumps,
    iconNew: iconElectricalUpgrades,
  },
  {
    title: "H.P. Water Heaters",
    content: "Heat Smart, Save More: Faster recovery, better insulation, and steady performance for busy homes.",
    url: "/contact-us#contact-form",
    icon: iconHeatPumps,
    iconNew: iconHPWaterHeaters,
  },
];

export const decarbonization = [
  {
    title: "Insulation",
    description: "Conserve energy and improve system efficiency. It's the first step because without proper insulation you'll waste energy",
    image: "Insulation.webp",
    imgPosition: {
      desktop: {
        top: '185px',
        left: '203px',
      },
      mobile: {
        top: '105px',
        left: 'calc(50% - 79px)',
      },
    },
    titlePosition: {
      desktop: {
        top: '185px',
        left: '0px',
      },
      mobile: {
        top: '0px',
        left: 'calc(50% - 173px)',
      },
    },
    descriptionPosition: {
      desktop: {
        top: '221px',
        left: '0px',
      },
      mobile: {
        top: '26px',
        left: 'calc(50% - 173px)',
      },
    },
  },
  {
    title: "Electrical Service Upgrade",
    description: "Prepare your home for future electrification; adding heat pumps, solar, EV chargers without having to upgrade again later",
    image: "Electrical Service Upgrade.webp",
    imgPosition: {
      desktop: {
        top: '439px',
        left: '287px',
      },
      mobile: {
        top: '257px',
        left: 'calc(50% - 14px)',
      },
    },
    titlePosition: {
      desktop: {
        top: '439px',
        left: '467px',
      },
      mobile: {
        top: '146px',
        left: 'calc(50% + 93px)',
      },
    },
    descriptionPosition: {
      desktop: {
        top: '506px',
        left: '467px',
      },
      mobile: {
        top: '221px',
        left: 'calc(50% + 93px)',
      },
    },
  },
  {
    title: "Heat Pumps",
    description: "Get efficient heating and cooling while being ready to phase out fossil fuels. We size systems for 100% heating capacity even with dual fuel setups!",
    image: "Heat Pumps.webp",
    imgPosition: {
      desktop: {
        top: '691px',
        left: '203px',
      },
      mobile: {
        top: '410px',
        left: 'calc(50% - 79px)',
      },
    },
    titlePosition: {
      desktop: {
        top: '691px',
        left: '0px',
      },
      mobile: {
        top: '300px',
        left: 'calc(50% - 173px)',
      },
    },
    descriptionPosition: {
      desktop: {
        top: '727px',
        left: '0px',
      },
      mobile: {
        top: '355px',
        left: 'calc(50% - 173px)',
      },
    },
  },
  {
    title: "Solar Panels",
    description: "Generate your own clean energy to power your heat pumps and other electrical loads",
    image: "Solar Panels.webp",
    imgPosition: {
      desktop: {
        top: '946px',
        left: '287px',
      },
      mobile: {
        top: '560px',
        left: 'calc(50% - 14px)',
      },
    },
    titlePosition: {
      desktop: {
        top: '946px',
        left: '467px',
      },
      mobile: {
        top: '488px',
        left: 'calc(50% + 93px)',
      },
    },
    descriptionPosition: {
      desktop: {
        top: '980px',
        left: '467px',
      },
      mobile: {
        top: '541px',
        left: 'calc(50% + 93px)',
      },
    },
  },
  {
    title: "EV Chargers",
    description: "Complete your home's electrification with EV charging powered by your solar",
    image: "EV Chargers.webp",
    imgPosition: {
      desktop: {
        top: '1197px',
        left: '203px',
      },
      mobile: {
        top: '714px',
        left: 'calc(50% - 79px)',
      },
    },
    titlePosition: {
      desktop: {
        top: '1197px',
        left: '0px',
      },
      mobile: {
        top: '670px',
        left: 'calc(50% - 173px)',
      },
    },
    descriptionPosition: {
      desktop: {
        top: '1230px',
        left: '0px',
      },
      mobile: {
        top: '727px',
        left: 'calc(50% - 173px)',
      },
    },
  },
  {
    title: "Energy Storage",
    description: "Keep your critical systems running during outages and use stored solar energy at night",
    image: "Energy Storage.webp",
    imgPosition: {
      desktop: {
        top: '1452px',
        left: '287px',
      },
      mobile: {
        top: '864px',
        left: 'calc(50% - 14px)',
      },
    },
    titlePosition: {
      desktop: {
        top: '1452px',
        left: '467px',
      },
      mobile: {
        top: '787px',
        left: 'calc(50% + 93px)',
      },
    },
    descriptionPosition: {
      desktop: {
        top: '1484px',
        left: '467px',
      },
      mobile: {
        top: '843px',
        left: 'calc(50% + 93px)',
      },
    },
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
    cName: "nav-text",
  },
  {
    title: "Heating & Cooling",
    path: "/heat-pumps",
    cName: "nav-text",
  },
  {
    title: "EV Chargers",
    path: "/ev-chargers",
    cName: "nav-text",
  },
  {
    title: "Energy Storage",
    path: "/energy-storage",
    cName: "nav-text",
  },
  {
    title: "Solar Panels",
    path: "/solar-panels",
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about-us",
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    cName: "nav-text",
  },
];
