import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Heat Pumps",
    path: "/heat-pumps",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Ev Chargers",
    path: "/ev-chargers",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Energy Storage",
    path: "/energy-storage",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about-us",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];