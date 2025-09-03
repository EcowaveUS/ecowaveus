import styled from "styled-components";
import { ServiceBenefits } from "../components/services/ServiceBenefits";
import { OursBrands } from "../components/brands/OursBrands";
import { motion } from "framer-motion";
// import { EvChargerCard } from "../components/services/EvChargerCard";
import { RebatesIncentives } from "../components/services/RebatesIncentives";
// import { MainPageComponent } from "../components/pagesComponents/MainPageComponent";
import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import { VehicleCharger } from "../components/pagesComponents/VehicleCharger";
import { MainPageComponentSolarPanels } from "../components/pagesComponents/MainPageComponentSolarPanels";

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
        <ServiceBenefits
          title="Benefits of EV-Chargers"
          subTitle="Maximize Time and Comfort"
          color="#022D57"
        />
      </Box>
      <ImageBrackground>
        <StyledImage
          style={{ display: "block" }}
          src="/images/ev-chargers-types-background.png"
          alt="heatpumps-background"
        />
      </ImageBrackground>
      <div style={{ background: "#0c4200", width: "100%" }}>
        <ProccesComponent>
          <TypesTitle>Types of Electric Vehicle Chargers</TypesTitle>
          <TypesText>
            Powering your electric vehicle is more flexible than ever. Whether
            you're at home, at work, or on a long journey, there's a charging
            solution that fits your lifestyle.
          </TypesText>
          <CarsContainer>
            {[0, 1, 2].map((l) => (
              <VehicleCharger level={l} key={l} />
            ))}
          </CarsContainer>
          <TypesText>
            EcowaveUS recommends Level 2 charging, as it offers the perfect
            balance of fast charging speeds and practical installation for both
            home and business use.
          </TypesText>
          <TypesText>
            Let's explore the three levels of EV charging to see which is right
            for you.
          </TypesText>
        </ProccesComponent>
      </div>
      <RebatesIncentives>
        <Text>
          From the National Grid website: “The Residential EV Charging
          Infrastructure Program supports residential electric customers by
          providing rebates for upgrading home-wiring in their garage or parking
          area (up to $700 for single family homes, with additional rebates for
          2-4 units). Customers living in an environmental justice community or
          enrolled in the low-income discount rate (R-2) are eligible for
          additional wiring and charger rebates.”
        </Text>
        <Subtitle>Federal Incentives</Subtitle>
        <Text>
          A recently expired federal tax break for electric vehicle (EV)
          chargers got new life under the recently passed Inflation Reduction
          Act—a move that will give taxpayers up to $1,000 in a tax credit.
        </Text>
      </RebatesIncentives>
      <Box width="100%">
        {/* <BrandsWrapper> */}
        <OursBrands
          images={[
            "/images/brands/tesla-logo.png",
            "/images/brands/chargepoint-logo.png",
            "/images/brands/legrand-logo.png",
            "/images/brands/siemens-logo.png",
          ]}
        />
        {/* </BrandsWrapper> */}
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
  font-family: Roboto !important;
  text-align: center;
`;
const Text = styled.p`
  color: #fff;
  font-family: Roboto;
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
// const ProccesCardWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 100%;
//   gap: 2rem;
// `;
// const TitleProcces = styled.h3`
//   color: #1c1f35;
//   font-family: Inter;
//   font-size: 35px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   margin-bottom: 16px;
// `;
// const TextProcces = styled.p`
//   color: #666c89;

//   font-family: Roboto;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 151.523%; /* 24.244px */
//   margin-bottom: 32px;
// `;
// const BrandsWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   background-color: #fff;
// `;
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
