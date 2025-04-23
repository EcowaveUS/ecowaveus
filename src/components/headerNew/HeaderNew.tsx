import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import {
  FaEnvelope,
  FaList,
  FaPhone,
  FaRegClock,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoFooter from "../../assets/images/logo-footer.png";
import { useEffect, useState } from "react";

export const HeaderNew = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpenMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenMobileMenu]);
  return isDesktop ? (
    <>
      <Box component={"div"} bgcolor={"#01162C"}>
        <Box
          component={"div"}
          className="container"
          height={"40px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
          gap={"24px"}
        >
          <InfoContainer>
            <IconContainer>
              <FaRegClock size={13} color={"#FFFFFF"} />
            </IconContainer>
            <InfoText>Mon - Fri 8:00AM - 5:00PM</InfoText>
          </InfoContainer>
          <InfoContainer>
            <IconContainer>
              <FaEnvelope size={13} color={"#FFFFFF"} />
            </IconContainer>
            <InfoText>info@ecowaveus.com</InfoText>
          </InfoContainer>
          <InfoContainer>
            <IconContainer>
              <FaPhone size={13} color={"#FFFFFF"} />
            </IconContainer>
            <InfoText>(978) 500 4081</InfoText>
          </InfoContainer>
        </Box>
      </Box>
      <Box
        component={"div"}
        zIndex={100}
        position={"sticky"}
        width={"100%"}
        top={"0"}
        bgcolor={"#FFFFFF0D"}
        left={0}
        sx={{
          backdropFilter: "blur(5px)",
        }}
        marginBottom={isDesktop ? "-80px" : "0"}
      >
        <Box
          component={"div"}
          className="container"
          height={"80px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link to={"/"}>
            <img src={logoFooter} alt="logo" width={"80px"} height={"auto"} />
          </Link>
          <Box
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"end"}
            gap={"24px"}
          >
            <LinkItem to="/">Home</LinkItem>
            <LinkItem to="/heat-pumps">Heat Pumps</LinkItem>
            <LinkItem to="/ev-chargers">EV Chargers</LinkItem>
            <LinkItem to="/energy-storage">Home Batteries</LinkItem>
            <LinkItem to="/about-us">About Us</LinkItem>
            <LinkItem to="/contact-us">Contact Us</LinkItem>
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "#252529",
                borderRadius: "999px",
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "16px",
                cursor: "pointer",
                transition: "background 0.3s ease",
                border: "none",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
              onClick={() => navigate("/contact-us")}
            >
              Book Appt
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  ) : !isOpenMobileMenu ? (
    <Box
      component={"div"}
      bgcolor={"white"}
      position={"sticky"}
      top={0}
      sx={{ boxShadow: "0px 4px 24px 0px #25252914" }}
      zIndex={100}
    >
      <Box
        height={"64px"}
        component={"div"}
        className="container"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={() => setIsOpenMobileMenu(true)}
      >
        <Box
          display={"flex"}
          width={"32px"}
          height={"32px"}
          borderRadius={"999px"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid #C6C6CC"}
          sx={{ cursor: "pointer" }}
        >
          <FaList color="#252529" size={12} />
        </Box>
        <Link to={"/"}>
          <img
            src="/images/logo-header.png"
            alt="logo"
            width={"121px"}
            height={"auto"}
          />
        </Link>
        <Box
          display={"flex"}
          width={"32px"}
          height={"32px"}
          borderRadius={"999px"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid #C6C6CC"}
          component={"a"}
          href="tel:+9785004081"
        >
          <FaPhone color="#252529" size={13} />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      position={"fixed"}
      width={"100%"}
      height={"100dvh"}
      top={0}
      left={0}
      bgcolor={"#01162C"}
      zIndex={10000}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={"32px"}
    >
      <Box bgcolor={"white"}>
        <Box
          height={"64px"}
          component={"div"}
          className="container"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link to={"/"}>
            <img
              src="/images/logo-header.png"
              alt="logo"
              width={"121px"}
              height={"auto"}
            />
          </Link>
          <Box
            display={"flex"}
            width={"32px"}
            height={"32px"}
            borderRadius={"999px"}
            alignItems={"center"}
            justifyContent={"center"}
            border={"1px solid #C6C6CC"}
            sx={{ cursor: "pointer" }}
            onClick={() => setIsOpenMobileMenu(false)}
          >
            <FaTimes color="#252529" size={13} />
          </Box>
        </Box>
      </Box>
      <Box
        className="container"
        component={"div"}
        display={"flex"}
        flexDirection={"column"}
        gap={"32px"}
        flex={1}
      >
        <LinkItem1 to="/">Home</LinkItem1>
        <LinkItem1 to="/heat-pumps">Heat Pumps</LinkItem1>
        <LinkItem1 to="/ev-chargers">EV Chargers</LinkItem1>
        <LinkItem1 to="/energy-storage">Home Batteries</LinkItem1>
        <LinkItem1 to="/about-us">About Us</LinkItem1>
        <LinkItem1 to="/contact-us">Contact Us</LinkItem1>
      </Box>
      <Box paddingY={"16px"} borderTop={"1px solid #022D57"}>
        <Box className="container" component={"div"}>
          <Button
            sx={{
              backgroundColor: "#404047",
              color: "white",
              borderRadius: "999px",
              padding: "12px 20px",
              width: "100%",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              cursor: "pointer",
              transition: "background 0.3s ease",
              border: "none",
              "&:hover": { backgroundColor: "#353535" },
            }}
            onClick={() => navigate("/contact-us")}
          >
            Book Appt
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const InfoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: "4px",
});

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
});

const InfoText = styled(Typography)({
  fontSize: "12px !important",
  fontWeight: "600 !important",
  color: "#FFFFFF",
});

const LinkItem = styled(Link)({
  fontSize: "14px",
  fontWeight: "600",
  color: "#FFFFFF",
});

const LinkItem1 = styled(Link)({
  fontSize: "14px",
  fontWeight: "700",
  color: "#FFFFFF",
  lineHeight: "20px",
});
