import { LogoFooter } from "./LogoFooter";
import { NavigationFooter } from "./NavigationFooter";
import { BottomFooter } from "./BottomFooter";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { FixedFooter } from "./FixedFooter";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/images/logo-footer.png";

export const Footer = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const pathname = useLocation();

  return pathname.pathname === "/free-estimate" ? (
    <Box
      component={"footer"}
      bgcolor={"#022241"}
      py={"24px"}
      display={"flex"}
      gap="12px"
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Link to="/">
        <img src={logoFooter} height={"auto"} width={"183px"} />
      </Link>
      <Typography
        color="#ffffff"
        textAlign={"center"}
        fontSize={isDesktop ? "12px" : "14px"}
        fontWeight={isDesktop ? "500" : "400"}
        lineHeight={isDesktop ? "150%" : "20px"}
        fontFamily={"Inter !important"}
      >
        © {new Date().getFullYear()} Ecowave. All Rights Reserved.
      </Typography>
    </Box>
  ) : (
    <Box
      component="footer"
      sx={{ backgroundColor: "#022241" }}
      pb={isTablet ? "0px" : "60px"}
    >
      <Box
        component="div"
        className="container-1"
        paddingTop={isDesktop ? "64px" : "48px"}
        paddingBottom={"64px"}
        display={"flex"}
        justifyContent={"space-between"}
        gap={isDesktop ? "24px" : "64px"}
        flexDirection={isDesktop ? "row" : "column"}
        alignItems={"stretch"}
      >
        <LogoFooter />
        <Box
          component="div"
          display={"flex"}
          flexDirection={isDesktop ? "row" : "column"}
          gap={isDesktop ? "24px" : "32px"}
          alignItems={"stretch"}
        >
          <NavigationFooter
            width={192}
            title="Services"
            links={[
              { text: "Heating & Cooling", url: "/heat-pumps" },
              { text: "EV Chargers", url: "/ev-chargers" },
              { text: "Solar Panels", url: "/solar-panels" },
              { text: "Energy Storage", url: "/energy-storage" },
            ]}
            clickable
          />
          <NavigationFooter
            width={192}
            title="Our Company"
            links={[
              { text: "About Us", url: "/about-us" },
              { text: "Reviews", url: "/contact-us#contact-form" },
            ]}
            clickable
          />
          <Box
            component="div"
            display={"flex"}
            flexDirection={"column"}
            gap={isDesktop ? "24px" : "32px"}
            alignItems={"stretch"}
          >
            <NavigationFooter
              width={300}
              title="Local Office"
              links={[
                { text: "22 Broadway,<br />Beverly, MA, 01915", url: "" },
              ]}
            />
            {isDesktop && (
              <NavigationFooter
                width={300}
                title="Hours"
                links={[
                  {
                    text: "Mon - Fri  8:00 AM - 5:00 PM<br />Sat - Sun Closed",
                    url: "",
                  },
                ]}
              />
            )}
          </Box>
        </Box>
      </Box>
      <BottomFooter />
      {!isTablet && <FixedFooter />}
    </Box>
  );
};
