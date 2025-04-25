import { Box, Theme, Typography, useMediaQuery, Button } from "@mui/material";

export const AreaServices = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box component={"div"} maxWidth={isDesktop ? "498px" : "100%"}>
      <Typography
        fontSize={isDesktop ? "48px" : "24px"}
        fontWeight={isDesktop ? 600 : 800}
        color={"#FFFFFF"}
        lineHeight={isDesktop ? "58px" : "32px"}
        fontFamily={isDesktop ? "Inter !important" : "Montserrat !important"}
      >
        Service Area
      </Typography>
      <Typography
        fontSize={isDesktop ? "24px" : "20px"}
        fontWeight={isDesktop ? 600 : 400}
        color={"#FFFFFF"}
        lineHeight={"32px"}
        fontFamily={"Inter !important"}
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
      <Typography
        fontSize={isDesktop ? "16px" : "14px"}
        color={"#FFFFFF"}
        fontFamily={"Inter !important"}
        lineHeight={"24px"}
      >
        {isDesktop ? (
          <>
            <span>
              Beverly | Manchester-by-the-Sea | Hamilton | Essex | Gloucester
            </span>
            <br />
            <span style={{ marginTop: "8px" }}>
              Marblehead | Wenham | Ipswich | Rockport | Lynnfield
            </span>
          </>
        ) : (
          "Beverly | Manchester-by-the-Sea | Hamilton | Essex | Gloucester | Marblehead | Wenham | Ipswich | Rockport | Lynnfield"
        )}
      </Typography>
      <Button
        sx={{
          marginTop: "32px",
          backgroundColor: "#35AE1A",
          color: "white",
          borderRadius: "999px",
          padding: isDesktop ? "10px 20px" : "10px 16px",
          width: isDesktop ? "auto" : "100%",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "background 0.3s ease",
          border: "none",
          fontFamily: "Inter !important",
          lineHeight: "20px",
          "&:hover": { backgroundColor: "#35AE1A" },
        }}
      >
        View more
      </Button>
    </Box>
  );
};
