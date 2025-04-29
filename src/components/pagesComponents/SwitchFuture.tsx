import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

export const SwitchFuture = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box
      height={isDesktop ? "800px" : "640px"}
      sx={{
        backgroundImage: `url(/images/${
          isDesktop ? "wind-farm-desktop" : "wind-farm-mobile"
        }.png)`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
      position={"relative"}
    >
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
            fontFamily={"Inter !important"}
            letterSpacing={"0 !important"}
            fontSize={isDesktop ? "80px" : "48px"}
            color={"white"}
            lineHeight={isDesktop ? "100%" : "52px"}
          >
            {isDesktop ? (
              <>
                Riding the Wave of{" "}
                <span
                  style={{
                    height: "86px",
                    display: "inline-block",
                  }}
                >
                  Eco-Innovation
                </span>
              </>
            ) : (
              "Riding the Wave of Eco-Innovation"
            )}
          </Typography>
          <Typography
            fontWeight={400}
            fontFamily={"Inter !important"}
            fontSize={isDesktop ? "18px" : "20px"}
            color={"white"}
            lineHeight={isDesktop ? "26px" : "28px"}
            marginTop={isDesktop ? "24px" : "20px"}
          >
            Affordable solutions tailored for savings and efficiency.
          </Typography>
          <Button
            sx={{
              marginTop: isDesktop ? "40px" : "32px",
              backgroundColor: "#198400",
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
