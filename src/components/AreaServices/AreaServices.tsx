import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";

export const AreaServices = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box component={"div"} maxWidth={isDesktop ? "498px" : "100%"}>
      <Typography
        fontSize={isDesktop ? "48px" : "24px"}
        fontWeight={isDesktop ? 600 : 800}
        color={"#FFFFFF"}
      >
        Service Area
      </Typography>
      <Typography
        fontSize={isDesktop ? "24px" : "20px"}
        fontWeight={isDesktop ? 600 : 400}
        color={"#FFFFFF"}
        marginTop={"8px"}
      >
        North Shore of Massachusetts
      </Typography>
      <Box
        component={"div"}
        marginY={"16px"}
        height={"1px"}
        width={"100%"}
        bgcolor={"#FFFFFF66"}
      ></Box>
      <Typography fontSize={isDesktop ? "16px" : "14px"} color={"#FFFFFF"}>
        Beverly | Manchester-by-the-Sea | Hamilton | Essex | Gloucester |
        Marblehead | Wenham | Ipswich | Rockport | Lynnfield
      </Typography>
      <button
        style={{
          marginTop: "32px",
          backgroundColor: "#35AE1A",
          color: "white",
          borderRadius: "999px",
          padding: isDesktop ? "14px 20px" : "14px 16px",
          width: isDesktop ? "auto" : "100%",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        View more
      </button>
    </Box>
  );
};
