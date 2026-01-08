import { Box, Theme, useMediaQuery } from "@mui/material";
// import SolutionCard from "./SolutionCard";
import { OurSolutionsCards } from "../OurSolutionsCards";

export default function FreeEstimateMoreSolutions() {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  // const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box
      component={"div"}
      position={"relative"}
      sx={{
        background: "url('/images/contact-us-background-2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      pt={isDesktop ? "120px" : "60px"}
      pb={isDesktop ? "120px" : "60px"}
      display={"flex"}
      flexDirection={"column"}
      gap={isDesktop ? "48px" : "24px"}
    >
      <Box
        component={"div"}
        className="container"
        p={"16px 24px"}
        borderLeft={"6px solid white"}
        color={"white"}
        fontWeight={isDesktop ? 600 : 800}
        fontSize={isDesktop ? "48px" : "32px"}
        letterSpacing={"0 !important"}
        lineHeight={isDesktop ? "52px" : "40px"}
        fontFamily={"Inter !important"}
      >
        More Solutions for You
      </Box>
      {/* <Box
        component={"div"}
        className="container-2"
        mt={isDesktop ? "48px" : "24px"}
        display={"grid"}
        gap={"24px"}
        gridTemplateColumns={
          isDesktop
            ? "repeat(4, 1fr)"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(1, 1fr)"
        }
      >
        <SolutionCard
          height={100}
          width={76.06}
          title="Electrical Service Upgrade"
          image="/images/solution-1.webp"
        />
        <SolutionCard
          width={108.8}
          height={80}
          title="EV Chargers"
          image="/images/solution-2.webp"
        />
        <SolutionCard
          width={109.63}
          height={80}
          title="Whole-home batteries"
          image="/images/solution-3.webp"
        />
        <SolutionCard
          width={107.73}
          height={110}
          title="Solar Panels"
          image="/images/solution-4.webp"
        />
      </Box> */}
      <OurSolutionsCards allowedLinks={false} />
    </Box>
  );
}
