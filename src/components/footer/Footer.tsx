import { LogoFooter } from "./LogoFooter";
import { NavigationFooter } from "./NavigationFooter";
import { FooterInfo } from "./FooterInfo";
import { BottomFooter } from "./BottomFooter";
import { Box, Divider } from "@mui/material";

export const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#022241" }}>
      <BottomFooter />
    </Box>
    // <Box
    //   component="footer"
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     width: "100%",
    //     height: "auto",
    //     backgroundColor: "#022241",
    //     padding: "0 3.5rem",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       alignItems: "flex-start",
    //       width: "100%",
    //       height: "auto",
    //       backgroundColor: "#022241",
    //       padding: "4rem 0 4rem 0",
    //     }}
    //   >
    //     <LogoFooter />
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         alignItems: "flex-start",
    //         gap: "7rem",
    //         paddingRight: "5rem",
    //       }}
    //     >
    //       <NavigationFooter
    //         title="Services"
    //         links={[
    //           { text: "Heat Pumps", url: "/heat-pumps" },
    //           { text: "EV Chargers", url: "/ev-chargers" },
    //           { text: "Solar Panels", url: "/solar-panels" },
    //           { text: "Energy Storage", url: "/energy-storage" },
    //         ]}
    //       />
    //       <NavigationFooter
    //         title="Our Company"
    //         links={[
    //           { text: "About Us", url: "/about-us" },
    //           { text: "Contact Us", url: "/contact-us" },
    //         ]}
    //       />
    //       <FooterInfo />
    //     </Box>
    //   </Box>
    //   <Divider
    //     style={{ width: "100%", margin: "1rem 0", backgroundColor: "#D8D8DE" }}
    //   />
    //   <BottomFooter />
    // </Box>
  );
};
