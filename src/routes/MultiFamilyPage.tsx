import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { OursBrands } from "../components/brands/OursBrands";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import { MainPageComponentMultiFamily } from "../components/pagesComponents/MainPageComponentMultiFamily";
import { ReviewsComponent } from "../components/reviews/ReviewsComponent";
import { ContactComponent } from "../components/forms/ContactComponent";
import { brandImagesNew } from "../constants/data";
import { BenefitsForMultiFamily } from "../components/pagesComponents/MultiFamily";

export const MultiFamilyPage = () => {
  const location = useLocation();
  const pathLocation = location.pathname;

  return (
    <StyledPage>
      <Helmet>
        <title>Multi-Family Heat Pump Installation | Apartments, Condos & Commercial | EcowaveUS</title>
        <meta
          name="description"
          content="Professional multi-family heat pump installation in Beverly, MA. Multi-family heat pumps. Mass Save rebates available. Call EcowaveUS at 978-500-4081!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ecowaveus.com/multi-family" />
      </Helmet>
      <Box width="100%">
        <MainPageComponentMultiFamily
          title="Upgrade Multi‑Family Comfort with Efficient Heating & Cooling"
          content="From heat pumps and heat pump water heaters to EV charging, solar, batteries, and electrical upgrades, we design, install, and maintain end-to-end solutions that make buildings smarter, safer, and more profitable."
          pathLocation={pathLocation}
          backgroundImage="/images/multi-family-home-image.webp"
        />
        <BenefitsForMultiFamily />
        <ReviewsComponent cat={3} />
        <OursBrands color="#F6F8FA" images={brandImagesNew} />
        <ContactComponent cat={2} />
      </Box>
    </StyledPage>
  );
};

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TypesTitle = styled(Typography)`
  max-width: 840px;
  color: #1c1f35;
  font-weight: 700 !important;
  font-size: 35px !important;
  line-height: normal !important;
  font-family: Inter !important;
  text-align: center;
`;

const TypesText = styled(Typography)`
  max-width: 650px;
  color: #666c89;
  font-size: 16px !important;
  line-height: 151% !important;
  font-family: Inter !important;
  text-align: center;
`;

const Text = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  line-height: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ImageBrackground = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProccesComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 3rem;
  margin: -7rem auto 7rem;
  z-index: -1;
  gap: 16px;
  @media (max-width: 1024px) {
    width: 90%;
    margin: -3rem auto 3rem;
    padding: 1rem;
  }
`;

const CarsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  margin-top: -30px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Subtitle = styled.h5`
  color: var(--White, var(--fore-allways---white, #fff));
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-top: 3rem;
`;
