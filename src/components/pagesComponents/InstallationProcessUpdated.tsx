import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router";
import styled from "styled-components";

export const InstallationProcessUpdated = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box bgcolor={"#F7F7F7"} py={isDesktop ? "96px" : "48px"}>
      <Box component={"div"} className="container-2">
        <Typography
          fontSize={isDesktop ? "16px" : "14px"}
          lineHeight={isDesktop ? "24px" : "20px"}
          letterSpacing={isDesktop ? "0 !important" : "1% !important"}
          color={"#6C6C78"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontFamily={"Inter !important"}
        >
          Step by Step Guide
        </Typography>
        <Typography
          mt={"16px"}
          fontSize={isDesktop ? "48px" : "32px"}
          lineHeight={isDesktop ? "58px" : "40px"}
          fontWeight={isDesktop ? 600 : 800}
          fontFamily={isDesktop ? "Inter !important" : "Montserrat !important"}
          color={"#252529"}
        >
          Installation Process
        </Typography>
        <Box
          mt={isDesktop ? "64px" : "32px"}
          display={"flex"}
          flexDirection={isDesktop ? "row" : "column-reverse"}
          gap={isDesktop ? "24px" : "32px"}
          alignItems={isDesktop ? "center" : "start"}
        >
          <Box
            width={isDesktop ? "min(408px, 50%)" : "100%"}
            minWidth={isDesktop ? "min(408px, 50%)" : "100%"}
            display={"flex"}
            flexDirection={"column"}
            gap={isDesktop ? "48px" : "32px"}
          >
            <Button
              sx={{
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
              Get a Free Estimate
            </Button>
            <DescriptionContainer>
              <DescriptionTitle>Contact Us</DescriptionTitle>
              <DescriptionText>
                Contact us to discuss your project and schedule an assessment
              </DescriptionText>
            </DescriptionContainer>
            <DescriptionContainer>
              <DescriptionTitle>Get an Estimate</DescriptionTitle>
              <DescriptionText>
                Receive a free estimate and information on rebates and financing
                (including Mass Save 0% HEAT loan if applicable) - We will
                inform you and help you through the process
              </DescriptionText>
            </DescriptionContainer>
            <DescriptionContainer>
              <DescriptionTitle>Contract and Schedule</DescriptionTitle>
              <DescriptionText>
                Sign the contract and schedule the installation
              </DescriptionText>
            </DescriptionContainer>
            <DescriptionContainer>
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
            flex={1}
            display={"grid"}
            gridTemplateColumns={"1fr 1fr 1fr 1fr"}
            gap={"12px"}
          >
            <GalleryBox sx={{ alignItems: "end" }}>
              <GalleryImage
                src="/images/why-grid/1.png"
                style={{ aspectRatio: "2/3", width: "90%" }}
              />
              <GalleryImage
                src="/images/why-grid/2.webp"
                style={{ aspectRatio: "1/1" }}
              />
            </GalleryBox>
            <GalleryBox>
              <GalleryImage
                src="/images/why-grid/3.jpg"
                style={{ aspectRatio: "2/3" }}
              />
              <GalleryImage
                src="/images/why-grid/4.jpg"
                style={{ aspectRatio: "2/3" }}
              />
              <GalleryImage
                src="/images/why-grid/5.jpg"
                style={{ aspectRatio: "1/1" }}
              />
            </GalleryBox>
            <GalleryBox>
              <GalleryImage
                src="/images/why-grid/6.png"
                style={{ aspectRatio: "2/3" }}
              />
              <GalleryImage
                src="/images/why-grid/7.jpg"
                style={{ aspectRatio: "2/3" }}
              />
              <GalleryImage
                src="/images/why-grid/8.jpg"
                style={{ aspectRatio: "4/3", marginBottom: "50px" }}
              />
            </GalleryBox>
            <GalleryBox>
              <GalleryImage
                src="/images/why-grid/9.png"
                style={{ aspectRatio: "1/1" }}
              />
              <GalleryImage
                src="/images/why-grid/10.jpg"
                style={{ aspectRatio: "1/1", width: "90%" }}
              />
              <GalleryImage
                src="/images/why-grid/11.jpg"
                style={{ aspectRatio: "2/3", width: "80%" }}
              />
            </GalleryBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const DescriptionContainer = styled(Box)`
  border-left: 2px solid #d8d8de;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: 900px) {
    padding-left: 24x;
  }
`;

const DescriptionTitle = styled(Typography)`
  font-size: 14px !important;
  line-height: 20px !important;
  font-weight: 700 !important;
  letter-spacing: 1% !important;
  font-family: "Montserrat !important";
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
  font-family: "Inter !important";
  color: #6c6c78;
  @media (min-width: 900px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
`;

const GalleryBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

const GalleryImage = styled.img`
  border-radius: 8px;
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  @media (min-width: 900px) {
    border-radius: 12px;
  }
`;
