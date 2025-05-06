// import { useLocation } from "react-router-dom";
// import styled from "styled-components";
// import { motion } from "framer-motion";
import { ServiceBenefits } from "../components/services/ServiceBenefits";
import { OursBrands } from "../components/brands/OursBrands";
import { brandImagesNew } from "../constants/data";
import { Helmet } from "react-helmet";
import { MainPageComponentHeatPump } from "../components/pagesComponents/MainPageComponentHeatPump";
import { ContactComponent } from "../components/forms/ContactComponent";
import { InstallationProcess } from "../components/pagesComponents/InstallationProcess";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { ReviewsComponent } from "../components/reviews/ReviewsComponent";

export const HeatPumsPage = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

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
      <ReviewsComponent />
      <ServiceBenefits
        title="Benefits of Heating & Cooling"
        subTitle="Maximizing Comfort and Efficiency"
        color="#252529"
      />
      <InstallationProcess />
      <Box position={"relative"}>
        <img
          height={"696px"}
          width={"100%"}
          src="/images/trees.svg"
          alt="trees"
          style={{ objectFit: "cover" }}
        />
        <Box pt={"157px"} bgcolor={"#F6F8FA"}>
          <OursBrands color="#F6F8FA" images={brandImagesNew} />
        </Box>
        <Box
          bgcolor={"#fff"}
          borderRadius={"12px"}
          component={"div"}
          px={isDesktop ? "64px" : "32px"}
          pt={isDesktop ? "64px" : "32px"}
          pb={"24px"}
          position={"absolute"}
          bottom={isDesktop ? "180px" : "118px"}
          width={"min(1280px, 100% - 40px)"}
          left={"50%"}
          sx={{
            boxShadow: "0px 2px 12px 0px #7979850A",
            transform: "translateX(-50%)",
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
              Federal tax credit 30% of the cost of the installation up to
              $2,000
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <ImageBrackground>
        <StyledImage
          src="/images/heat-pumps-list-background.png"
          alt="heatpumps-background"
        />
      </ImageBrackground>
      <ProccesComponent>
        <SubTitle>Installation Guide</SubTitle>
        <TitleProcces>Installation Process</TitleProcces>
        <TextProcces>We make it easy for you!</TextProcces>
        <ProccesGridContainer>
          <ProccesCardWrapper>
            {stepByStepList.map((item) => (
              <ProccesCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                item={item.item}
                span={item.span}
              />
            ))}
          </ProccesCardWrapper>
          <ImageWrapper>
            <Image src="/images/heat-pumps-list01.png" alt="heat pumpp" />
          </ImageWrapper>
        </ProccesGridContainer>
      </ProccesComponent>
      <RebatesIncentives>
        <Text>
          Whole-home rebates are available to customers who install heat pumps
          as the sole source of heating and cooling (up to $10,000).
        </Text>
        <Text>
          Partial-home rebates are offered based on equipment or outdoor unit
          (tonnage) to customers who plan to keep an existing boiler or furnace
          in place to supplement a new heat pump system ($1,250 per ton, up to
          $10,000).
        </Text>
        <IncentivesTitle>Federal Incentives</IncentivesTitle>
        <Text>
          Federal tax credit 30% of the cost of the installation up to $2,000
        </Text>
      </RebatesIncentives>
      <BrandsWrapper>
        <OursBrands
          images={[
            "/images/brands/mitsubishi-logo.png",
            "/images/brands/fujitsu-logo.png",
            "/images/brands/daikin-logo.png",
            "/images/brands/bosch-logo.png",
          ]}
        />
      </BrandsWrapper> */}
      <ContactComponent cat={2} />
    </>
  );
};

// const StyledPage = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
// `;

// const Text = styled.p`
//   color: #fff;

//   font-family: Roboto;
//   font-size: 1.5rem;
//   font-style: normal;
//   line-height: 1.8rem;
//   margin-bottom: 1rem;
//   text-align: center;
// `;

// const ImageBrackground = styled.div`
//   width: 100%;
//   height: 100%;
// `;
// const StyledImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const ProccesComponent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   width: 75%;
//   border-radius: 16px;
//   background-color: #fff;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   padding: 3rem;
//   margin-top: -7rem;
//   margin-bottom: 8rem;
//   @media (max-width: 1024px) {
//     width: 90%;
//     align-items: center;
//     margin-top: -3rem;
//   }
// `;
// const ProccesCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   width: 60%;
//   @media (max-width: 1024px) {
//     width: 100%;
//     justify-content: center;
//   }
// `;
// const ProccesGridContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   gap: 2rem;
// `;
// const ImageWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 50%;
//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;
// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
//   border-radius: 16px;
// `;
// const SubTitle = styled.p`
//   color: #1c1f35;

//   font-family: Inter;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
//   border-left: 4px solid #68be54;
//   background: rgba(232, 232, 232, 0.5);
//   padding: 3px 9px 3px 8px;
//   margin-bottom: 0.5rem;
//   align-self: flex-start;
// `;
// const TitleProcces = styled.h3`
//   color: #1c1f35;
//   font-family: Inter;
//   font-size: 35px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   margin-bottom: 0.5rem;
// `;
// const TextProcces = styled.p`
//   color: #666c89;
//   font-family: Roboto;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 151.523%; /* 36.365px */
// `;

// const BrandsWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   background-color: #fff;
// `;

// const IncentivesTitle = styled.h5`
//   color: var(--White, var(--fore-allways---white, #fff));
//   text-align: center;
//   font-family: Inter;
//   font-size: 32px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 110%;
//   margin-top: 3rem;
// `;
