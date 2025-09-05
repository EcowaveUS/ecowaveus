import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { MainPageComponentSolarPanels } from "../components/pagesComponents/MainPageComponentSolarPanels";
import { WhySolar } from "../components/services/WhySolar";
import Areas from "../components/AreaServices/Areas";
import { OursBrands } from "../components/brands/OursBrands";
import { SolarOpportunity } from "../components/pagesComponents/SolarOpportunity";
import { PowerfulCombination } from "../components/services/PowerfulCombination";

const solarOpportunities = [
  {
    image: "/images/PPA.png",
    title: "Power purchase agreement",
    texts: [
      "Go solar with no initial investment.",
      "System is provided, installed, owned, and managed by the solar company.",
      "Pay a predictable, lower electricity rate.",
      "Enjoy a maintenance-free experience.",
      "Start saving right away with a locked-in rate.",
      "Great for a hands-off solar option with no upfront cost.",
    ],
  },
  {
    image: "/images/solar-ownership-1.png",
    title: "solar ownership",
    texts: [
      "Purchase or finance with a loan.",
      "You own the system and its benefits.",
      "Receive all federal and state incentives.",
      "After payoff, electricity is essentially free.",
      "Build long-term savings and ROI.",
      "Can increase your home’s resale value.",
      "Ideal for homeowners seeking maximum return and equity",
    ],
  },
  {
    image: "/images/solar-ownership-2.png",
    title: "off the grid<br />(owned solar + batteries)",
    texts: [
      "Achieve energy independence from the utility grid",
      "Store excess solar energy for night use and outages",
      "Protect your home from blackouts and rising energy costs",
      "Receive federal and state incentives for solar + batteries",
      "Lower long-term electricity expenses after payoff",
      "Boost property value with a resilient energy system",
    ],
  },
];

export const SolarPanelsPage = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
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
        <div style={{ backgroundColor: "#0c4200" }}>
          <ProccesComponent className="container">
            <TypesTitle>Your Solar Opportunities</TypesTitle>
            <TypesText>
              Understanding the path you take on your solar journey is key.
              Below is a comparison to help you decide which option best suits
              your needs and financial goals.
            </TypesText>
            <OpportunitesContainer>
              {solarOpportunities.map((opportunity, _idx) => (
                <SolarOpportunity
                  order={_idx}
                  key={opportunity.title}
                  opportunity={opportunity}
                />
              ))}
            </OpportunitesContainer>
          </ProccesComponent>
        </div>
        <PowerfulCombination />
        <Box
          paddingTop={"90px"}
          paddingBottom={"90px"}
          sx={{
            background: `url("/images/photo-background-savings.png") no-repeat center`,
            backgroundSize: "cover",
          }}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <Box
            bgcolor={"#fff"}
            borderRadius={"12px 0 0 12px"}
            component={"div"}
            padding={isDesktop ? "64px" : "32px"}
            width={"min(1280px, 100% - 40px)"}
            sx={{
              boxShadow: "0px 2px 12px 0px #7979850A",
            }}
          >
            <Typography
              fontFamily={"Inter !important"}
              fontSize={isDesktop ? "48px" : "32px"}
              fontWeight={600}
              lineHeight={"100%"}
              color={"#0B081F"}
            >
              Maximize your savings
            </Typography>
            <Typography
              fontFamily={"Inter !important"}
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"26px"}
              color={"#0B081F"}
              mt={"24px"}
            >
              <Typography
                component={"span"}
                fontFamily={"Inter !important"}
                fontSize={"24px"}
                fontWeight={600}
                lineHeight={"26px"}
                color={"#0B081F"}
              >
                Federal Solar Tax Credit
              </Typography>
              <br />
              Homeowners who install a residential solar panel system are
              eligible to claim a{" "}
              <span style={{ fontWeight: 700, color: "#1FA500" }}>
                30% tax credit
              </span>{" "}
              on the total cost of the installation. <br />
              <span style={{ fontWeight: 700, color: "#b33727" }}>
                Don’t miss out! This is only available available for solar
                installations made through the end of 2025.
              </span>
              <br />
              <br />
              <Typography
                component={"span"}
                fontFamily={"Inter !important"}
                fontSize={"24px"}
                fontWeight={600}
                lineHeight={"26px"}
                color={"#0B081F"}
              >
                MA Residential Energy Credit
              </Typography>
              <br />
              Homeowners are also eligible to receive a credit on their state
              income taxes for{" "}
              <span style={{ fontWeight: 700, color: "#1FA500" }}>15%</span> of
              the total system cost,{" "}
              <span style={{ fontWeight: 700, color: "#1FA500" }}>
                up to $1,000.
              </span>
            </Typography>
          </Box>
        </Box>
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
const TypesTitle = styled(Typography)`
  max-width: 840px;
  color: #fff;
  font-weight: 700 !important;
  font-size: 35px !important;
  line-height: normal !important;
  font-family: Inter !important;
  text-align: center;
`;
const TypesText = styled(Typography)`
  max-width: 850px;
  color: #fff;
  font-size: 16px !important;
  line-height: 151% !important;
  font-family: Roboto !important;
  text-align: center;
`;
const ProccesComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  gap: 32px;
  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`;
const OpportunitesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
