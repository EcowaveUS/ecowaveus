import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import AdvantageComponent from "./AdvantageComponent";
import styled from "styled-components";

export default function FreeEstimateAdvantage() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      py={isDesktop ? "92px" : "48px"}
      sx={{
        background:
          "linear-gradient(135deg, #0f2e4f, #000000 0%, #4c7ca6 100%)",
      }}
    >
      <Box component={"div"} className="container-2">
        <Typography
          color={"white"}
          fontWeight={isDesktop ? 600 : 800}
          fontSize={isDesktop ? "48px" : "32px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "52px" : "40px"}
          fontFamily={"Inter !important"}
        >
          Take advantage of these available coupons
        </Typography>
        <Typography
          color={"white"}
          fontWeight={400}
          fontSize={"16px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={"24px"}
          fontFamily={"Inter !important"}
          mt={isDesktop ? "24px" : "16px"}
          maxWidth={"600px"}
          mx={"auto"}
        >
          At EcowaveUS, we simplify affordable electrification, helping you fild
          the best combination for your home and budget
        </Typography>
        <Box
          mt={isDesktop ? "48px" : "24px"}
          display={"grid"}
          gridTemplateColumns={isDesktop ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
          gap={isDesktop ? "48px" : "24px"}
        >
          <AdvantageComponent
            title="Heating & Cooling Installation"
            offValue="5%"
            date="6/30/25"
          />
          <AdvantageComponent
            title="Electrical Service Upgrade with Heating & Cooling Installation"
            offValue="$1,000"
            date="6/30/25"
          />
          <AdvantageComponent
            title="EV Charger Installation"
            offValue="$100"
            date="6/30/25"
          />
        </Box>
        <Box
          mt={isDesktop ? "48px" : "24px"}
          display={"flex"}
          flexDirection={isDesktop ? "row" : "column"}
          gap={"16px"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"center"}
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
