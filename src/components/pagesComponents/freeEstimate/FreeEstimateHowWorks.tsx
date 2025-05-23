import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";

export default function FreeEstimateHowWorks() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box py={isDesktop ? "92px" : "48px"}>
      <Box
        component={"div"}
        className="container"
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column-reverse"}
        gap={isDesktop ? "24px" : "32px"}
        alignItems={isDesktop ? "center" : "start"}
      >
        <Box
          width={isDesktop ? "min(600px, 50%)" : "100%"}
          minWidth={isDesktop ? "min(600px, 50%)" : "100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={isDesktop ? "48px" : "32px"}
        >
          <Typography
            fontWeight={600}
            fontFamily={"Inter !important"}
            fontSize={isDesktop ? "48px" : "40px"}
            lineHeight={isDesktop ? "58px" : "48px"}
            color={"#252529"}
          >
            How it Works
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
            <DescriptionContainer>
              <DescriptionNumber>1</DescriptionNumber>
              <DescriptionTitle>Contact Us</DescriptionTitle>
              <DescriptionText>
                Contact us to discuss your project and schedule an assessment
              </DescriptionText>
            </DescriptionContainer>
            <DescriptionContainer>
              <DescriptionNumber>2</DescriptionNumber>
              <DescriptionTitle>Get an Estimate</DescriptionTitle>
              <DescriptionText>
                Receive a free estimate and information on rebates and financing
                (including Mass Save 0% HEAT loan if applicable) - We will
                inform you and help you through the process
              </DescriptionText>
            </DescriptionContainer>
            <DescriptionContainer>
              <DescriptionNumber>3</DescriptionNumber>
              <DescriptionTitle>Contract and Schedule</DescriptionTitle>
              <DescriptionText>
                Sign the contract and schedule the installation
              </DescriptionText>
            </DescriptionContainer>
            <DescriptionContainer
              sx={{ paddingBottom: "0px", borderLeft: "none" }}
            >
              <DescriptionNumber>4</DescriptionNumber>
              <DescriptionTitle>Rebates and Incentives Forms</DescriptionTitle>
              <DescriptionText>
                We will help you to apply for rebates
              </DescriptionText>
              <DescriptionTitle color={"#1FA500"}>
                Enjoy your new system!
              </DescriptionTitle>
            </DescriptionContainer>
          </Box>
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
        <Box
          flex={1}
          display={"grid"}
          gridTemplateColumns={"1fr 1fr 1fr 1fr"}
          gap={"12px"}
          width={isDesktop ? "auto" : "100%"}
        >
          <GalleryBox sx={{ alignItems: "end" }}>
            <GalleryImage
              style={{
                aspectRatio: "2/3",
                width: "90%",
                background: `url(/images/why-grid/1.png) center / cover`,
              }}
            />
            <GalleryImage
              style={{
                aspectRatio: "1/1",
                background: `url(/images/why-grid/2.png) center / cover`,
              }}
            />
          </GalleryBox>
          <GalleryBox>
            <GalleryImage
              style={{
                aspectRatio: "2/3",
                background: `url(/images/why-grid/3.png) center / cover`,
              }}
            />
            <GalleryImage
              style={{
                aspectRatio: "2/3",
                background: `url(/images/why-grid/4.png) 29% center / cover`,
              }}
            />
            <GalleryImage
              style={{
                aspectRatio: "1/1",
                background: `url(/images/why-grid/5.png) center / cover`,
              }}
            />
          </GalleryBox>
          <GalleryBox>
            <GalleryImage
              style={{
                aspectRatio: "2/3",
                background: `url(/images/why-grid/6.png) 70% center / cover`,
              }}
            />
            <GalleryImage
              style={{
                aspectRatio: "2/3",
                background: `url(/images/why-grid/7.png) center / cover`,
              }}
            />
            <GalleryImage
              style={{
                aspectRatio: "4/3",
                marginBottom: "50px",
                background: `url(/images/why-grid/8.png) center / cover`,
              }}
            />
          </GalleryBox>
          <GalleryBox>
            <GalleryImage
              style={{
                aspectRatio: "1/1",
                background: "url(/images/why-grid/9.png) center 0% / 130%",
              }}
            />
            <GalleryImage
              style={{
                aspectRatio: "1/1",
                background: `url(/images/why-grid/10.png) center / cover`,
              }}
            />
            <GalleryImage
              style={{
                aspectRatio: "2/3",
                width: "80%",
                background: `url(/images/why-grid/11.png) center / cover`,
              }}
            />
          </GalleryBox>
        </Box>
      </Box>
    </Box>
  );
}

const GalleryBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

const GalleryImage = styled.div`
  border-radius: 8px;
  max-width: 100%;
  width: 100%;
  background-repeat: no-repeat !important;
  @media (min-width: 900px) {
    border-radius: 12px;
  }
`;

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

const DescriptionContainer = styled(Box)`
  border-left: 2px dashed #252529;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 48px;
  position: relative;
`;

const DescriptionTitle = styled(Typography)`
  font-size: 14px !important;
  line-height: 20px !important;
  font-weight: 700 !important;
  letter-spacing: 1% !important;
  font-family: Inter !important;
  color: #252529;
  @media (min-width: 900px) {
    font-size: 16px !important;
    line-height: 24px !important;
    letter-spacing: 0 !important;
  }
`;

const DescriptionText = styled(Typography)`
  font-size: 14px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  letter-spacing: 1% !important;
  font-family: Inter !important;
  color: #6c6c78;
  @media (min-width: 900px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
`;

const DescriptionNumber = styled(Box)`
  position: absolute;
  background: #ffffff;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  font-family: Inter !important;
  color: #252529;
  top: 0px;
  left: -24px;
`;
