import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import { MainPageComponentSolarPanels } from "../components/pagesComponents/MainPageComponentSolarPanels";
import { WhySolar } from "../components/services/WhySolar";
import Areas from "../components/AreaServices/Areas";
import { OursBrands } from "../components/brands/OursBrands";

export const SolarPanelsPage = () => {
  return (
    <StyledPage>
      <Helmet>
        <title>Solar Panels Installation near Beverly, MA | ecoWave</title>
        <meta
          name="description"
          content="If you need solar panels installation services, then contact our solar energy company. We can install solar panels for your home. Call 978-500-4081!"
        />
      </Helmet>
      <MainPageComponentSolarPanels
        title="Harness the Sun, Power Your Future"
        content="Unlock maximum efficiency by pairing your solar panels with a high-efficiency heat pump. This powerful combination empowers you to heat and cool your home with clean, renewable energy, slashing your utility bills, increasing your home's value, and delivering complete energy independence."
        backgroundImage="/images/solar-panels-background.png"
      />
      <Box width="100%">
        <WhySolar
          title="Why Choose Solar?"
          subTitle="Go solar with ecowaveus"
          color="#252529"
        />
        <OursBrands
          images={[
            "/images/brands/enphase.png",
            "/images/brands/solar-edge-logo.png",
          ]}
        />
        <Areas />
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
