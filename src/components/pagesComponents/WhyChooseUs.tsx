import React from "react";
import { Box, Grid, Theme, Typography, useMediaQuery } from "@mui/material";

export const WhyChooseUs: React.FC = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const detailsInfo = [
    {
      id: 1,
      image: "/images/why-hassle.png",
      title: "Hassle-Free Financial Applications & Rebate Claims",
      description:
        "We help you apply for financing and rebate forms, providing step-by-step guides to ensure you understand the process and maximize your incentives.",
    },
    {
      id: 2,
      image: "/images/why-premium.png",
      title: "Premium Quality Installations & Materials",
      description:
        "We are committed to providing premium quality installations, ensuring the best outcome for all our clients.",
    },
    {
      id: 3,
      image: "/images/why-all.png",
      title: "Your All-in-one Partner for your Energy Solutions",
      description:
        "Discover how our comprehensive knowledge of available products ensures you achieve the best energy savings for your home.",
    },
    {
      id: 4,
      image: "/images/why-support.png",
      title: "Direct Support",
      description:
        "We offer direct support to our customers, ensuring you receive all necessary assistance throughout your experience.",
    },
  ];
  return (
    <Box bgcolor={"#0C4200"} py={isDesktop ? "92px" : "48px"}>
      <Box component={"div"} className="container-2">
        <Typography
          color={"white"}
          fontWeight={isDesktop ? 600 : 800}
          fontSize={isDesktop ? "48px" : "32px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "52px" : "40px"}
          fontFamily={"Inter !important"}
        >
          Why Choose EcowaveUS?
        </Typography>
        <Box
          mt={isDesktop ? "50px" : "24px"}
          display={"grid"}
          gridTemplateColumns={isDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
          gap={"48px"}
        >
          {detailsInfo.map((item) => (
            <Box
              key={item.id}
              display={"flex"}
              flexDirection={"column"}
              gap={"14px"}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "70px", height: "auto" }}
              />
              <Typography
                color={"white"}
                fontWeight={600}
                fontSize={"24px"}
                lineHeight={"32px"}
                fontFamily={"Inter !important"}
              >
                {item.title}
              </Typography>
              <Typography
                color={"white"}
                fontWeight={400}
                fontSize={"16px"}
                lineHeight={"24px"}
                fontFamily={"Inter !important"}
              >
                {item.description}
              </Typography>
              <Box height={"2px"} width={"50px"} bgcolor={"white"}></Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
