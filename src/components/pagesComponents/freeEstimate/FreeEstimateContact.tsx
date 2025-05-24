import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import { ContactForm } from "../../forms/ContactForm";
import styled from "styled-components";
import { useEffect } from "react";

export default function FreeEstimateContact() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      component={"div"}
      position={"relative"}
      sx={{
        background: "url('/images/free-estimate-contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 25%",
        backgroundRepeat: "no-repeat",
      }}
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
        position={"relative"}
        zIndex={1}
        className="container"
        paddingTop={isDesktop ? "92px" : "48px"}
        paddingBottom={isDesktop ? "92px" : "42px"}
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column"}
        gap={isDesktop ? "96px" : "24px"}
        justifyContent={"space-between"}
        alignItems={isDesktop ? "center" : "flex-start"}
      >
        <Box
          component={"div"}
          minWidth={isDesktop ? "600px" : "100%"}
          id="contact-form"
          sx={{
            scrollMarginTop: isDesktop ? "100px" : "170px",
          }}
        >
          <ContactForm btnColor="#022241" />
        </Box>
        <Box
          component={"div"}
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={isDesktop ? "24px" : "16px"}
          width={isDesktop ? "auto" : "100%"}
        >
          <Typography
            fontWeight={600}
            fontFamily={"Inter !important"}
            letterSpacing={"0 !important"}
            fontSize={isDesktop ? "48px" : "32px"}
            color={"white"}
            lineHeight={isDesktop ? "100%" : "40px"}
          >
            Ready to Enhance Your Home's Comfort?
          </Typography>
          <Typography
            fontWeight={400}
            fontFamily={"Inter !important"}
            fontSize={"16px"}
            color={"white"}
            lineHeight={isDesktop ? "24px" : "28px"}
            letterSpacing={"0 !important"}
          >
            Leave us your details and one of our experts will contact you within
            24 hours.
          </Typography>
          <Box
            mt={isDesktop ? "24px" : "16px"}
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
