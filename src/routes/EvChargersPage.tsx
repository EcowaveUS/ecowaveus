import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ServiceBenefits } from "../components/services/ServiceBenefits";
import { OursBrands } from "../components/brands/OursBrands";
import { motion } from "framer-motion";
import { EvChargerCard } from "../components/services/EvChargerCard";
import { RebatesIncentives } from "../components/services/RebatesIncentives";
import { MainPageComponent } from "../components/pagesComponents/MainPageComponent";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";

export const EvChargersPage = () => {
  const location = useLocation();
  const pathLocation = location.pathname;

  const evChargers = [
    {
      id: 1,
      title: "Level 1 (120V) Charger",
      image: "/images/ev-charger-level1.png",
      content:
        "Use a standard household outlet and deliver a slow charge, typically taking 8-12 hours to fully charge an EV battery",
    },
    {
      id: 2,
      title: "Level 2 (240V) Charger",
      image: "/images/ev-charger-leve2.png",
      content:
        "Use a special 240V outlet and deliver a fast charge, typically taking 3-8 hours to fully charge an EV battery",
    },
    {
      id: 3,
      title: "Level 3 (480V) Charger",
      image: "/images/ev-charger-level3.png",
      content:
        "Provide a rapid charge, typically in 30-60 minutes, ideal for long trips and normally for public stations and commercial buildings",
    },
  ];
  return (
    <StyledPage
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>
          EV Charging Station Installation near Danvers, MA | ecoWave
        </title>
        <meta
          name="description"
          content="If you need EV charger installation services, then contact our solar energy company. We can install an EV charging station for your home. Call 978-500-4081!"
        />
      </Helmet>
      <MainPageComponent
        title="Charge Faster, Go Further"
        content="We are dedicated to helping drivers switch to clean and sustainable transportation, by providing top-quality EV charger installation solutions that are both cost-effective and affordable."
        pathLocation={pathLocation}
        backgroundImage="/images/ev-charger-background.jpg"
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
          src="/images/ev-chargers-types-background.png"
          alt="heatpumps-background"
        />
      </ImageBrackground>
      <ProccesComponent>
        <TitleProcces>Types of EV chargers</TitleProcces>
        <TextProcces>
          There are primarily three types of EV chargers used for homes and
          businesses.
        </TextProcces>
        <ProccesCardWrapper>
          {evChargers.map((item) => (
            <EvChargerCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              content={item.content}
            />
          ))}
        </ProccesCardWrapper>
      </ProccesComponent>
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
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 3rem;
  margin-top: -7rem;
  margin-bottom: 8rem;
  z-index: -1;
  @media (max-width: 1024px) {
    width: 90%;
    align-items: center;
    margin-top: -3rem;
  }
`;
const ProccesCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 2rem;
`;
const TitleProcces = styled.h3`
  color: #1c1f35;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
`;
const TextProcces = styled.p`
  color: #666c89;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%; /* 24.244px */
  margin-bottom: 32px;
`;
const BrandsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
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
