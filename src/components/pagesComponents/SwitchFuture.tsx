import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

export const SwitchFuture = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box
      height={isDesktop ? "800px" : "640px"}
      sx={{
        backgroundImage: `url(/images/wind-farm.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      position={"relative"}
    >
      <Box
        component={"div"}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        width={"100%"}
        height={"100%"}
        zIndex={1}
        sx={{
          background: "#00000066",
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
          maxWidth={isDesktop ? "763px" : "100%"}
          position={"absolute"}
          zIndex={2}
          left={0}
          top={"50%"}
          sx={{
            transform: "translateY(-50%)",
          }}
        >
          <Typography
            fontWeight={600}
            fontSize={isDesktop ? "80px" : "48px"}
            color={"white"}
            lineHeight={"100%"}
          >
            Riding the wave off eco-innovation
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={isDesktop ? "18px" : "20px"}
            color={"white"}
            lineHeight={"100%"}
            marginTop={isDesktop ? "24px" : "20px"}
          >
            Affordable solutions tailored for savings and efficiency.
          </Typography>
          <Button
            sx={{
              marginTop: isDesktop ? "40px" : "32px",
              backgroundColor: "#35AE1A",
              color: "white",
              borderRadius: "999px",
              padding: isDesktop ? "12px 20px" : "12px 16px",
              width: isDesktop ? "auto" : "100%",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              cursor: "pointer",
              transition: "background 0.3s ease",
              border: "none",
              "&:hover": { backgroundColor: "#35911A" },
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
