import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

export const MainPageComponentHeatPump = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box
      height={isDesktop ? "800px" : "640px"}
      sx={{
        backgroundImage: `url(/images/heat-pumps-light.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      position={"relative"}
    >
      <Box
        component={"div"}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        top={0}
        left={0}
        sx={{
          background: isDesktop ? "#00000099" : "#00000066",
        }}
      ></Box>
      <Box
        component={"div"}
        height={"100%"}
        className="container"
        position={"relative"}
      >
        <Box
          paddingTop={isDesktop ? "100px" : "0"}
          component={"div"}
          maxWidth={isDesktop ? "712px" : "100%"}
          position={"absolute"}
          zIndex={2}
          left={0}
          bottom={isDesktop ? "200px" : "107px"}
          // sx={{
          //   transform: "translateY(-50%)",
          // }}
        >
          <Typography
            width={"fit-content"}
            py={"4px"}
            px={"8px"}
            bgcolor={"#C4DFFF"}
            borderRadius={"4px"}
            textTransform={"uppercase"}
            fontFamily={"Inter !important"}
            fontSize={"10px"}
            fontWeight={400}
            lineHeight={"14px"}
            letterSpacing={"5%"}
            color={"#004BCE"}
          >
            Efficient and Eco-Friendly:
          </Typography>
          <Typography
            mt={"24px"}
            fontWeight={600}
            fontFamily={"Inter !important"}
            letterSpacing={"0 !important"}
            fontSize={isDesktop ? "64px" : "48px"}
            color={"white"}
            lineHeight={isDesktop ? "100%" : "52px"}
          >
            Efficient Heating and Cooling for Your Home
          </Typography>
          <Typography
            fontWeight={400}
            fontFamily={"Inter !important"}
            fontSize={"16px"}
            color={"white"}
            lineHeight={isDesktop ? "24px" : "28px"}
            marginTop={isDesktop ? "24px" : "20px"}
            letterSpacing={"0 !important"}
          >
            A heat pump uses electricity to move heat instead of generating it,
            achieving up to 300% efficiency by harnessing solar energy. It’s a
            cost-effective, eco-friendly alternative to oil or gas heating.
          </Typography>
          <Button
            sx={{
              marginTop: isDesktop ? "24px" : "32px",
              backgroundColor: "#198400",
              color: "white",
              borderRadius: "999px",
              padding: "12px 20px",
              width: isDesktop ? "320px" : "100%",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              cursor: "pointer",
              transition: "background 0.3s ease",
              border: "none",
              fontFamily: "Inter !important",
              letterSpacing: "1% !important",
              "&:hover": { backgroundColor: "#198400" },
            }}
            onClick={() => navigate("/contact-us")}
          >
            Schedule now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
