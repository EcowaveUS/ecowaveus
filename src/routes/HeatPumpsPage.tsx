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
import { Financing } from "../components/pagesComponents/Financing";

export const HeatPumpsPage = () => {
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
      <MainPageComponentHeatPump />
      <ServiceBenefits
        title="Benefits of Energy-Efficient Heating & Cooling"
        subTitle="Maximizing Comfort and Efficiency"
        color="#252529"
      />
      <WhyChooseUs />
      <InstallationProcessUpdated />
      <Box
        position={"relative"}
        height={isTablet ? "775px" : "1340px"}
        width={"100%"}
        sx={{
          background: `url("/images/trees.svg") no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <Box
          bgcolor={"#fff"}
          borderRadius={"0 12px 12px 0"}
          component={"div"}
          px={isDesktop ? "64px" : "32px"}
          pt={isDesktop ? "64px" : "32px"}
          pb={"24px"}
          position={"absolute"}
          bottom={isDesktop ? "45px" : "50px"}
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
                fontSize={"24px"}
                fontWeight={600}
                lineHeight={"26px"}
                color={"#0B081F"}
              >
                Federal Incentives
              </Typography>
              <br />
              Federal tax credit 30% of the cost of the installation up to&nbsp;
              <span style={{ fontWeight: 700, color: "#1FA500" }}>$2,000</span>
              <br />
              <br />
              <span
                style={{
                  fontWeight: 700,
                  color: "#b33727",
                  textTransform: "uppercase",
                  maxWidth: "400px",
                  display: "block",
                }}
              >
                Don't miss out! This is only available for installations
                completed by December 31, 2025.
              </span>
              <br />
              <Typography
                component={"span"}
                fontFamily={"Inter !important"}
                fontSize={"24px"}
                fontWeight={600}
                lineHeight={"26px"}
                color={"#0B081F"}
              >
                BREAKING NEWS! Reduced Winter Electric Rates
              </Typography>
              <br />
              Customers of Eversource, National Grid, and Unitil with installed
              heat pumps are now eligible for a new seasonal discounted electric
              rate.
              <br />
              <br />
              This program is designed to significantly lower electricity costs
              during the winter, offering an average savings of
              <span style={{ fontWeight: 700, color: "#1FA500" }}>
                $540
              </span>{" "}
              for qualifying households.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Financing />
      <ReviewsComponent cat={2} />
      <OursBrands color="#F6F8FA" images={brandImagesNew} />
      <ContactComponent cat={2} />
    </>
  );
};
