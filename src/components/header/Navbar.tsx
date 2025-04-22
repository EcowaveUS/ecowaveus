import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";
import { CommonButton } from "../common/CommonButton";

interface NavbarProps {
  isFixed: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isFixed }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={(theme) => ({
        position: isFixed ? "fixed" : "relative",
        top: isFixed ? 0 : "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: "68px",
        padding: "15px 0",
        backgroundColor: "#022241",
        borderBottom: isFixed ? "1px solid rgba(9, 18, 66, 0.30)" : "none",
        transition: "all 0.3s ease",
        zIndex: 99,
        [theme.breakpoints.down(1024)]: {
          display: "none",
        },
      })}
      className="navbar"
    >
      <StyledLinks>
        <Link to="/">
          <li
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </li>
        </Link>
        <Separator />
        <Link to="/heat-pumps">
          <li
            className={activeLink === "/heat-pumps" ? "active" : ""}
            onClick={() => handleLinkClick("/heat-pumps")}
          >
            Heat Pumps
          </li>
        </Link>
        <Separator />
        <Link to="/ev-chargers">
          <li
            className={activeLink === "/ev-chargers" ? "active" : ""}
            onClick={() => handleLinkClick("/ev-chargers")}
          >
            EV Chargers
          </li>
        </Link>
        <Separator />
        <Link to="/energy-storage">
          <li
            className={activeLink === "/energy-storage" ? "active" : ""}
            onClick={() => handleLinkClick("/energy-storage")}
          >
            Home Batteries
          </li>
        </Link>
        <Separator />
        <Link to="/about-us">
          <li
            className={activeLink === "/about-us" ? "active" : ""}
            onClick={() => handleLinkClick("/about-us")}
          >
            About Us
          </li>
        </Link>
        <Separator />
        <Link to="/contact-us">
          <li
            className={activeLink === "/contact-us" ? "active" : ""}
            onClick={() => handleLinkClick("/contact-us")}
          >
            Contact Us
          </li>
        </Link>
      </StyledLinks>
      <CommonButton
        sx={{
          backgroundColor: "#FFFFFF",
          padding: "12px 20px",
          color: "#252529",
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
          letterSpacing: "1%",
          borderRadius: "50px",
        }}
      >
        Book Appt
      </CommonButton>
    </Box>
  );
};

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  li {
    white-space: nowrap;
    list-style: none;
    font-size: 16px;
    color: #fff;
    text-align: left;
    font-family: Inter;
    font-weight: 500;
    line-height: 135.023%;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease-in-out;
    &::before {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #FFFFFF;
      transition: width 0.3s ease-in-out;
    }

    &.active::before {
      width: 100%;
    }
    &:hover {
      &::before {
        width: 100%;
      }
  }
`;

const Separator = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  height: 19px;
`;
