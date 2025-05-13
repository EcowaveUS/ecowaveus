// import { useLocation } from "react-router-dom";
// import styled from "styled-components";
// import { motion } from "framer-motion";
import { ServiceBenefits } from "../components/services/ServiceBenefits";
import { OursBrands } from "../components/brands/OursBrands";
import { brandImagesNew } from "../constants/data";
import { Helmet } from "react-helmet-async";
import { MainPageComponentHeatPump } from "../components/pagesComponents/MainPageComponentHeatPump";
import { ContactComponent } from "../components/forms/ContactComponent";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { ReviewsComponent } from "../components/reviews/ReviewsComponent";
import { WhyChooseUs } from "../components/pagesComponents/WhyChooseUs";
import { InstallationProcessUpdated } from "../components/pagesComponents/InstallationProcessUpdated";

export const HeatPumsPage = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Helmet>
        <title>Electric Heat Pumps near Peabody, MA | Heat Pump Services</title>
        <meta
          name="description"
          content="Searching for an electric heat pump installation nearby? We provide renewable energy and heat pumps for sale. Call EcoWave at 978-500-4081 and request a quote."
        />
      </Helmet>
      {/* <MainPageComponent
        title="Efficient Heating and Cooling for Your Home"
        subtitle="Efficient and Eco-Friendly:"
        content="A heat pump efficiently transfers heat from one place to another using electricity, rather than generating heat directly. It operates at a remarkable 300% efficiency, delivering three times the heat for each unit of energy used, by harnessing solar energy. This makes it an eco-friendly and cost-effective alternative to traditional heating sources like oil or gas."
        pathLocation={pathLocation}
        backgroundImage="/images/heat-pumps.jpg"
      /> */}
      <MainPageComponentHeatPump />
      <ServiceBenefits
        title="Benefits of Heating & Cooling"
        subTitle="Maximizing Comfort and Efficiency"
        color="#252529"
      />
      <WhyChooseUs />
      <InstallationProcessUpdated />
      <Box
        position={"relative"}
        height={isTablet ? "696px" : "800px"}
        width={"100%"}
        sx={{
          background: `url("/images/trees.svg") no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <Box
          bgcolor={"#fff"}
          borderRadius={"12px"}
          component={"div"}
          px={isDesktop ? "64px" : "32px"}
          pt={isDesktop ? "64px" : "32px"}
          pb={"24px"}
          position={"absolute"}
          bottom={isDesktop ? "100px" : "50px"}
          width={"min(1280px, 100% - 40px)"}
          left={"0"}
          sx={{
            boxShadow: "0px 2px 12px 0px #7979850A",
          }}
        >
          <Box maxWidth={"848px"}>
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
              fontSize={"18px"}
              fontWeight={400}
              lineHeight={"26px"}
              color={"#0B081F"}
              mt={"24px"}
            >
              <Typography
                component={"span"}
                fontFamily={"Inter !important"}
                fontSize={"22px"}
                fontWeight={600}
                lineHeight={"26px"}
                color={"#0B081F"}
              >
                Mass Save Rebates
              </Typography>
              <br />
              Whole-home rebates are available to customers who install heat
              pumps as the sole source of heating and cooling{" "}
              <span style={{ fontWeight: 700, color: "#1FA500" }}>
                ($3,000 per ton, up to $16,000).
              </span>
              <br />
              <br />
              Partial-home rebates are offered based on equipment or outdoor
              unit (tonnage) to customers who plan to keep an existing boiler or
              furnace in place to supplement a new heat pump system{" "}
              <span style={{ fontWeight: 700, color: "#1FA500" }}>
                ($1,250 per ton, up to $10,000).
              </span>
              <br />
              <br />
              <Typography
                component={"span"}
                fontFamily={"Inter !important"}
                fontSize={"22px"}
                fontWeight={600}
                lineHeight={"26px"}
                color={"#0B081F"}
              >
                Federal Incentives
              </Typography>
              <br />
              Federal tax credit 30% of the cost of the installation up to&nbsp;
              <span style={{ fontWeight: 700, color: "#1FA500" }}>$2,000</span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <ReviewsComponent />
      <OursBrands color="#F6F8FA" images={brandImagesNew} />
      <ContactComponent cat={2} />
    </>
  );
};
