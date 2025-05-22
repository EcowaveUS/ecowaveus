import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoFooter from "../../assets/images/logo-footer.png";
import { useEffect, useState } from "react";

export const HeaderNew = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isOpenMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenMobileMenu]);
  useEffect(() => {
    setIsOpenMobileMenu(false);
  }, [location]);
  return location.pathname === "/free-estimate" ? (
    <></>
  ) : isDesktop ? (
    <>
      <Box
        component={"div"}
        bgcolor={"#01162C"}
        borderBottom={"1px solid #FFFFFF1A"}
      >
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
              <img
                src="/images/icons/icon-clock-white.svg"
                alt="icon-clock-white"
              />
            </IconContainer>
            <InfoText>Mon - Fri 8:00AM - 5:00PM</InfoText>
          </InfoContainer>
          <InfoContainer>
            <IconContainer>
              <img
                src="/images/icons/icon-email-white.svg"
                alt="icon-email-white"
              />
            </IconContainer>
            <InfoText
              component={"a"}
              href="mailto:info@ecowaveus.com"
              sx={{ textDecoration: "underline" }}
            >
              info@ecowaveus.com
            </InfoText>
          </InfoContainer>
          <InfoContainer>
            <IconContainer>
              <img
                src="/images/icons/icon-phone-white.svg"
                alt="icon-phone-white"
              />
            </IconContainer>
            <InfoText component={"a"} href="tel:+19785004081">
              <span>(</span>
              <span style={{ textDecoration: "underline" }}>978) 500 4081</span>
            </InfoText>
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
        borderBottom={"1px solid #FFFFFF0D"}
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
            <img src={logoFooter} alt="logo" width={"100px"} height={"auto"} />
          </Link>
          <Box
            component={"div"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"end"}
            gap={"24px"}
          >
            <LinkItem
              className={location.pathname === "/" ? "active" : ""}
              to="/"
            >
              Home
            </LinkItem>
            <LinkItem
              className={location.pathname === "/heat-pumps" ? "active" : ""}
              to="/heat-pumps"
            >
              Heating & Cooling
            </LinkItem>
            <LinkItem
              className={location.pathname === "/ev-chargers" ? "active" : ""}
              to="/ev-chargers"
            >
              EV Chargers
            </LinkItem>
            <LinkItem
              className={
                location.pathname === "/energy-storage" ? "active" : ""
              }
              to="/energy-storage"
            >
              Home Batteries
            </LinkItem>
            <LinkItem
              className={location.pathname === "/about-us" ? "active" : ""}
              to="/about-us"
            >
              About Us
            </LinkItem>
            <LinkItem
              className={location.pathname === "/contact-us" ? "active" : ""}
              to="/contact-us"
            >
              Contact Us
            </LinkItem>
            <Button
              sx={{
                backgroundColor: "#198400",
                color: "white",
                borderRadius: "999px",
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "16px",
                fontFamily: "Inter !important",
                letterSpacing: "2% !important",
                cursor: "pointer",
                border: "none",
                // border: "1px solid #C6C6CC",
                "&:hover": { backgroundColor: "#198400" },
              }}
              onClick={() => navigate("/contact-us#contact-form")}
            >
              Book an Appointment
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  ) : !isOpenMobileMenu ? (
    <Box
      component={"div"}
      bgcolor={"#FFFFFF"}
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
      >
        <img
          onClick={() => setIsOpenMobileMenu(true)}
          src="/images/icons/icon-menu-blue.svg"
          width={"48.5"}
          height={"48.5"}
          alt="icon-menu-blue"
          style={{ cursor: "pointer", marginLeft: "-7px" }}
        />
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
          width={"48.5px"}
          height={"48.5px"}
          borderRadius={"999px"}
          alignItems={"center"}
          justifyContent={"center"}
          // border={"1px solid #C6C6CC"}
          component={"a"}
          href="tel:+19785004081"
          bgcolor={"#022241"}
        >
          <img
            width={22}
            height={22}
            src="/images/icons/icon-phone-fill.svg"
            alt="icon-phone-fill"
          />
        </Box>
        {/* <Box
          display={"flex"}
          width={"32px"}
          height={"32px"}
          borderRadius={"999px"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid #C6C6CC"}
          component={"a"}
          href="tel:+19785004081"
        >
          <img
            src="/images/icons/icon-phone-black.svg"
            alt="icon-phone-black"
          />
        </Box> */}
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
            <img src="/images/icons/icon-x-black.svg" alt="icon-x-black" />
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
        <LinkItem1 to="/heat-pumps">Heating & Cooling</LinkItem1>
        <LinkItem1 to="/ev-chargers">EV Chargers</LinkItem1>
        <LinkItem1 to="/energy-storage">Energy Storage</LinkItem1>
        <LinkItem1 to="/about-us">About Us</LinkItem1>
        <LinkItem1 to="/contact-us">Contact Us</LinkItem1>
        {/* <LinkItem1 to="/">DT Financiero</LinkItem1>
        <LinkItem1 to="/">Ayuda</LinkItem1> */}
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
              fontFamily: "Inter !important",
              letterSpacing: "1% !important",
              transition: "background 0.3s ease",
              border: "none",
              "&:hover": { backgroundColor: "#404047" },
            }}
            onClick={() => navigate("/contact-us#contact-form")}
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
  fontFamily: "Inter !important",
  letterSpacing: "2% !important",
});

const LinkItem = styled(Link)({
  fontFamily: "Inter !important",
  fontSize: "14px",
  fontWeight: "600",
  color: "#FFFFFF",
  letterSpacing: "0 !important",
  position: "relative",
  "&:after": {
    content: "''",
    display: "block",
    width: "100%",
    height: "3px",
    backgroundColor: "#1FA500",
    position: "absolute",
    top: "calc(100% + 29px)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
  "&.active::after": {
    transform: "scaleX(1)",
  },
});

const LinkItem1 = styled(Link)({
  fontSize: "14px",
  fontWeight: "700",
  color: "#FFFFFF",
  lineHeight: "20px",
  fontFamily: "Montserrat !important",
  letterSpacing: "1% !important",
});
