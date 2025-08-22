import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import SavingComponent from "./SavingComponent";

export default function FreeEstimateSavings() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      component={"div"}
      position={"relative"}
      sx={{
        background: "url('/images/trees.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      pt={isDesktop ? "120px" : "60px"}
      pb={isDesktop ? "120px" : "60px"}
    >
      <Box
        component={"div"}
        className="container-2"
        bgcolor={"white"}
        borderRadius={isDesktop ? "24px" : "12px"}
        p={isDesktop ? "48px" : "24px"}
        display={"flex"}
        flexDirection={"column"}
        gap={isDesktop ? "24px" : "16px"}
        alignItems={"center"}
      >
        <Typography
          fontFamily={"Inter !important"}
          fontSize={isDesktop ? "48px" : "32px"}
          fontWeight={600}
          lineHeight={"100%"}
          color={"#0B081F"}
          textAlign={"center"}
        >
          Maximize your savings
        </Typography>
        <Typography
          fontFamily={"Inter !important"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"150%"}
          color={"#0B081F"}
          textAlign={"center"}
          maxWidth={"550px"}
        >
          As a Mass Save® Partner, we provide information and guidance to help
          you apply for and claim Mass Save® rebates and incentives. Federal
          incentives are also available through the 25C tax credit.
        </Typography>
        <Box
          display={"grid"}
          gridTemplateColumns={isDesktop ? "1fr 1fr 1fr" : "1fr"}
          gap={"16px"}
        >
          <SavingComponent
            title1="whole-home rebates"
            title2="up to"
            price="$16,000"
          />
          <SavingComponent
            title1="partial-home rebates"
            title2="up to"
            price="$10,000"
          />
          <SavingComponent
            title1="tax credit 30% of the cost of"
            title2="the installation up to"
            price="$2,000"
            title3="Don't miss out! This is only available for installations completed by December 31, 2025."
          />
        </Box>
        <Typography
          fontFamily={"Inter !important"}
          fontSize={"18px"}
          fontWeight={700}
          lineHeight={"150%"}
          color={"#0B081F"}
          textAlign={"center"}
          maxWidth={"550px"}
          textTransform={"uppercase"}
        >
          Reduced Winter Electric Rates
        </Typography>
        <Typography
          fontFamily={"Inter !important"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"150%"}
          color={"#0B081F"}
          textAlign={"center"}
          maxWidth={"650px"}
        >
          Customers of Eversource, National Grid, and Unitil with installed heat
          pumps are now eligible for a new seasonal discounted electric rate.
          This program is designed to significantly lower electricity costs
          during the winter, offering an average savings of $540 for qualifying
          households.
        </Typography>
      </Box>
    </Box>
  );
}
