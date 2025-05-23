import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";
import { ContactForm } from "../../forms/ContactForm";
import styled from "styled-components";

export default function FreeEstimateHero() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      height={isDesktop ? "800px" : "640px"}
      sx={{
        backgroundImage: `url(/images/free-estimate.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: isDesktop ? "center" : "60% center",
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
          maxWidth={isDesktop ? "min(712px, 50% - 20px)" : "100%"}
          position={"absolute"}
          zIndex={2}
          left={0}
          bottom={isDesktop ? "120px" : "30px"}
          // sx={{
          //   transform: "translateY(-50%)",
          // }}
        >
          <Typography
            fontWeight={600}
            fontFamily={"Inter !important"}
            letterSpacing={"0 !important"}
            fontSize={isDesktop ? "48px" : "32px"}
            color={"white"}
            lineHeight={isDesktop ? "120%" : "40px"}
          >
            Transform Your Comfort with Our Heating & Cooling Solutions
          </Typography>
          <Typography
            fontWeight={600}
            fontFamily={"Inter !important"}
            fontSize={isDesktop ? "22px" : "18px"}
            color={"white"}
            lineHeight={isDesktop ? "30px" : "24px"}
            marginTop={isDesktop ? "24px" : "16px"}
            letterSpacing={"0 !important"}
          >
            Get a Free Consultation and Discover Tailored Solutions for Your
            Home
          </Typography>
          <Box
            mt={isDesktop ? "24px" : "16px"}
            display={"flex"}
            flexDirection={isDesktop ? "row" : "column"}
            gap={"16px"}
            alignItems={"center"}
            width={"100%"}
          >
            <GreenButton
              component={"a"}
              href={"tel:+18002274635"}
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
          <Typography
            py={"12px"}
            px={"8px"}
            bgcolor={"#C4DFFF"}
            borderRadius={"12px"}
            fontFamily={"Inter !important"}
            fontSize={isDesktop ? "20px" : "16px"}
            fontWeight={600}
            lineHeight={isDesktop ? "24px" : "20px"}
            letterSpacing={"5%"}
            color={"#004BCE"}
            textAlign={"center"}
            mt={isDesktop ? "42px" : "20px"}
          >
            Today's Offer: Up to $10K Rebates for ductless mini splits and heat
            pumps + 0% financing options.
          </Typography>
        </Box>
        {isDesktop && (
          <Box
            component={"div"}
            position={"absolute"}
            right={0}
            top={"50%"}
            width={"calc(50% - 20px)"}
            mt={"40px"}
            sx={{
              transform: "translateY(-50%)",
            }}
          >
            <ContactForm btnColor="#022241" />
          </Box>
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
