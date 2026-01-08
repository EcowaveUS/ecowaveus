import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { OurSolutionsCards } from "./OurSolutionsCards";

export const OurSolutions = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const isWide = useMediaQuery(`(min-width: 1280px)`);
  return (
    <Box bgcolor={"#F6F6F6"}>
      <Box
        component={"div"}
        paddingTop={isDesktop ? "80px" : "36px"}
        paddingBottom={isDesktop ? (isWide ? "80px" : "35px") : "16px"}
        display={"flex"}
        flexDirection={"column"}
        gap={isDesktop ? "60px" : "32px"}
      >
        <Box
          component={"div"}
          maxWidth={"612px"}
          marginLeft={"auto"}
          marginRight={"auto"}
          className="container"
        >
          <Typography
            fontWeight={600}
            fontSize={isDesktop ? "48px" : "24px"}
            align="center"
            color={isDesktop ? "#181A1C" : "#252529"}
            lineHeight={isDesktop ? "100%" : "32px"}
            fontFamily={"Inter !important"}
          >
            Empowering your sustainable choices
          </Typography>
          <Typography
            marginTop={"16px"}
            fontSize={isDesktop ? "16px" : "14px"}
            align="center"
            lineHeight={isDesktop ? "150%" : "20px"}
            fontFamily={"Inter !important"}
            color={isDesktop ? "#181A1C80" : "#6C6C78"}
            letterSpacing={isDesktop ? "0.01em" : "0.02em"}
          >
            Driving innovation in renewable technologies for a greener tomorrow:
            harnessing the power of sustainability to transform energy
            consumption and foster environmental stewardship.
          </Typography>
        </Box>
        <img src="/images/one_stop_shop.webp" alt="one_stop_shop" style={{
          width: "80%",
          maxWidth: "500px",
          height: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        }} />
        <OurSolutionsCards />
      </Box>
    </Box>
  );
};
