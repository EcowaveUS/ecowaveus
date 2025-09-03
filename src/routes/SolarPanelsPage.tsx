import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { MainPageComponentSolarPanels } from "../components/pagesComponents/MainPageComponentSolarPanels";
import { WhySolar } from "../components/services/WhySolar";
import Areas from "../components/AreaServices/Areas";
import { OursBrands } from "../components/brands/OursBrands";

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
        <Box
          paddingTop={"45px"}
          paddingBottom={"45px"}
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
            px={isDesktop ? "64px" : "32px"}
            pt={isDesktop ? "64px" : "32px"}
            pb={"24px"}
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
              textAlign={"right"}
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
              textAlign={"right"}
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
              on the total cost of the installation.{" "}
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
