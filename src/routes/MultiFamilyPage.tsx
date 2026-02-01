import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { OursBrands } from "../components/brands/OursBrands";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import { ReviewsComponent } from "../components/reviews/ReviewsComponent";
import { ContactComponent } from "../components/forms/ContactComponent";
import { brandImagesNew } from "../constants/data";
import { MainPageComponentMultiFamily, BenefitsForMultiFamily, SaveBigUnitProperties, CompleteElectrification, UnlockNationalGrid, FutureProofYourBuilding } from "../components/pagesComponents/MultiFamily";

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
        <SaveBigUnitProperties />
        <CompleteElectrification />
        <UnlockNationalGrid />
        <FutureProofYourBuilding />
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
