import { Box, Theme, Typography, useMediaQuery } from "@mui/material";

export const LocationInfo = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box component={"div"}>
      <Typography
        fontSize={isDesktop ? "48px" : "24px"}
        fontWeight={600}
        color={"#252529"}
        lineHeight={isDesktop ? "58px" : "32px"}
        fontFamily={"Inter !important"}
      >
        Get in touch today
      </Typography>
      <Box
        component={"div"}
        display={"flex"}
        flexDirection={"column"}
        gap={"12px"}
        marginTop={"16px"}
      >
        <Box
          display={"flex"}
          gap={"6px"}
          component={"a"}
          href="mailto:info@ecowaveus.com"
        >
          <Box
            component={"div"}
            width={20}
            height={20}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src="/images/icons/icon-email-gray.png" alt="envelope" />
          </Box>
          <Typography
            lineHeight={"20px"}
            fontSize={"16px"}
            fontFamily={"Inter !important"}
            color={"#6C6C78"}
          >
            Info@ecowaveus.com
          </Typography>
        </Box>
        <Box display={"flex"} gap={"6px"} component={"a"} href="tel:9785004081">
          <Box
            component={"div"}
            width={20}
            height={20}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src="/images/icons/icon-phone-gray.png" alt="phone" />
          </Box>
          <Typography
            lineHeight={"20px"}
            fontSize={"16px"}
            fontFamily={"Inter !important"}
            color={"#6C6C78"}
          >
            (978) 500 4081
          </Typography>
        </Box>
        <Box display={"flex"} gap={"6px"} component={"div"}>
          <Box
            width={20}
            height={30}
            display={"flex"}
            component={"div"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src="/images/icons/icon-map-gray.png" alt="map" />
          </Box>
          <Typography
            lineHeight={"30px"}
            fontSize={"16px"}
            fontFamily={"Inter !important"}
            color={"#6C6C78"}
          >
            Monday -Friday 8:00 AM - 5:00 PM
          </Typography>
        </Box>
        <Box display={"flex"} gap={"6px"} component={"div"}>
          <Box
            width={20}
            height={30}
            display={"flex"}
            component={"div"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src="/images/icons/icon-map-gray.png" alt="map" />
          </Box>
          <Typography
            lineHeight={"30px"}
            fontSize={"16px"}
            fontFamily={"Inter !important"}
            color={"#6C6C78"}
          >
            22 Broadway
            <br />
            Beverly, MA 01915
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
