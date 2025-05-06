import { LogoFooter } from "./LogoFooter";
import { NavigationFooter } from "./NavigationFooter";
import { BottomFooter } from "./BottomFooter";
import { Box, Theme, useMediaQuery } from "@mui/material";

export const Footer = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box component="footer" sx={{ backgroundColor: "#022241" }}>
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
              { text: "Reviews", url: "/contact-us" },
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
    </Box>
  );
};
