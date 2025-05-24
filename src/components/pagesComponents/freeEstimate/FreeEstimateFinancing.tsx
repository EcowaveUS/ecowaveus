import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";

export default function FreeEstimateFinancing() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      py={isDesktop ? "92px" : "48px"}
      sx={{
        background:
          "linear-gradient(to right, #3c3c3c 0%, #000000 0%, #666666 60%, #999999 100%)",
      }}
    >
      <Box
        component={"div"}
        className="container"
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column-reverse"}
        gap={isDesktop ? "48px" : "24px"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={isDesktop ? "24px" : "16px"}
          flex={1}
        >
          <Typography
            fontWeight={600}
            fontFamily={"Inter !important"}
            letterSpacing={"0 !important"}
            fontSize={isDesktop ? "48px" : "32px"}
            color={"white"}
            lineHeight={isDesktop ? "120%" : "40px"}
          >
            Up to $25,000{" "}
            <span style={{ color: "#fdd643" }}>Interest-Free</span> Financing
            for Your Heating & Cooling Project
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={isDesktop ? "48px" : "24px"}
          >
            <DateContainer>
              <DateBox bgcolor={"#fdd643"}>7</DateBox>
              <DateText>84 months</DateText>
            </DateContainer>
            <DateContainer>
              <DateBox bgcolor={"#ffffff"}>5</DateBox>
              <DateText>60 months</DateText>
            </DateContainer>
            <DateContainer>
              <DateBox bgcolor={"#ffffff"}>3</DateBox>
              <DateText>36 months</DateText>
            </DateContainer>
          </Box>
          <Typography
            fontFamily={"Inter !important"}
            letterSpacing={"0 !important"}
            fontSize={isDesktop ? "16px" : "14px"}
            color={"white"}
            lineHeight={isDesktop ? "120%" : "20px"}
          >
            <strong>The Power of Choice.</strong> Select the timeline that fits
            your budget while enjoying immediate energy savings. Your
            sustainable future starts with a plan that works for you.
          </Typography>
          <Box
            display={"flex"}
            flexDirection={isDesktop ? "row" : "column"}
            gap={"16px"}
            alignItems={"center"}
            width={"100%"}
            flexWrap={"wrap"}
          >
            <GreenButton
              component={"a"}
              href={"tel:+19785004081"}
              sx={{
                width: isDesktop ? "200px" : "100%",
              }}
            >
              Call Us Now
            </GreenButton>
            <GreenButton
              onClick={() => {
                const el = document.getElementById("contact-form");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  history.pushState(null, "", "#contact-form");
                }
              }}
              sx={{
                width: isDesktop ? "250px" : "100%",
              }}
            >
              Get a FREE Estimate
            </GreenButton>
          </Box>
        </Box>
        {isDesktop && (
          <Box
            sx={{
              width: isDesktop ? "500px" : "100%",
              minWidth: isDesktop ? "500px" : "100%",
              height: "600px",
              background: "url('/images/free-financing.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        )}
      </Box>
    </Box>
  );
}

const GreenButton = styled(Button)`
  background-color: #198400 !important;
  color: white !important;
  border-radius: 999px !important;
  padding: 12px 20px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 20px !important;
  cursor: pointer;
  transition: background 0.3s ease;
  border: none !important;
  font-family: Inter !important;
  letter-spacing: 1% !important;
  &:hover {
    background-color: #198400 !important;
  }
`;

const DateContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const DateText = styled(Typography)`
  font-size: 12px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  font-family: Inter !important;
  color: white;
  @media (min-width: 600px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
`;

const DateBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 800;
  font-family: Inter !important;
  color: #252529;
  @media (min-width: 600px) {
    width: 90px;
    height: 90px;
    font-size: 48px;
  }
`;
