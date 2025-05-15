import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";

export const Financing = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <Box
      bgcolor={"#252529"}
      pt={isDesktop ? "92px" : "48px"}
      pb={isDesktop ? "50px" : "48px"}
    >
      <Box
        component={"div"}
        className="container-1"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          color={"#79C966"}
          fontWeight={800}
          fontSize={isDesktop ? "16px" : "14px"}
          fontFamily={"Inter !important"}
          lineHeight={"24px"}
          letterSpacing={"0 !important"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          financing your project
        </Typography>
        <Typography
          color={"white"}
          fontWeight={isDesktop ? 600 : 800}
          fontSize={isDesktop ? "48px" : "32px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "52px" : "40px"}
          fontFamily={"Inter !important"}
          marginTop={"24px"}
        >
          Finance Your Project Today
        </Typography>
        <Typography
          color={"white"}
          fontWeight={isDesktop ? 600 : 800}
          fontSize={isDesktop ? "48px" : "32px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "52px" : "40px"}
          fontFamily={"Inter !important"}
          marginTop={"6px"}
        >
          Up to $25,000 at 0% Interest for 7 Years
        </Typography>
        <Typography
          color={"white"}
          fontWeight={400}
          fontSize={isDesktop ? "16px" : "14px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "24px" : "20px"}
          fontFamily={"Inter !important"}
          marginTop={"36px"}
        >
          Mass Save offers to our community the opportunity of finance up to
        </Typography>
        <Typography
          color={"white"}
          fontWeight={400}
          fontSize={isDesktop ? "16px" : "14px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "24px" : "20px"}
          fontFamily={"Inter !important"}
        >
          $25,000 of your project. Here are some options for the payback period.
        </Typography>
        <Box
          marginTop={"24px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={isDesktop ? "60px" : "40px"}
        >
          <DateContainer>
            <DateBox bgcolor={"#fdd643"}>7</DateBox>
            <DateText>84 months</DateText>
          </DateContainer>
          <DateContainer>
            <DateBox bgcolor={"#ffffff"}>5</DateBox>
            <DateText>60 months</DateText>
          </DateContainer>
          <DateContainer>
            <DateBox bgcolor={"#ffffff"}>3</DateBox>
            <DateText>36 months</DateText>
          </DateContainer>
        </Box>
      </Box>
    </Box>
  );
};

const DateContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const DateText = styled(Typography)`
  font-size: 12px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  letter-spacing: 0 !important;
  font-family: Inter !important;
  color: white;
  @media (min-width: 600px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
`;

const DateBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 800;
  font-family: Inter !important;
  color: #252529;
  @media (min-width: 600px) {
    width: 90px;
    height: 90px;
    font-size: 48px;
  }
`;
