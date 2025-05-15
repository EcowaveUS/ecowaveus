import React from "react";
import styled from "styled-components";
import { BenefitsCard } from "./BenefitsCard";
import { Theme, Typography, useMediaQuery } from "@mui/material";

interface Props {
  title: string;
  subTitle?: string;
  color: string;
}

export const ServiceBenefits: React.FC<Props> = ({
  title,
  subTitle,
  color,
}) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const cardInfo = [
    {
      id: 1,
      title: "Increase Home Value",
      image: "/images/increase-icon.svg",
    },
    {
      id: 2,
      title: "Energy Efficient",
      image: "/images/energy-icon.svg",
    },
    {
      id: 3,
      title: "Environmentally Friendly",
      image: "/images/enviromentally-icon.svg",
    },
  ];
  return (
    <BenefitsWrapper style={{ backgroundColor: color }}>
      <HeaderContainer className="container">
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
          {subTitle}
        </Typography>
        <Typography
          color={"white"}
          fontWeight={isDesktop ? 600 : 800}
          fontSize={isDesktop ? "48px" : "32px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "52px" : "40px"}
          fontFamily={"Inter !important"}
        >
          {title}
        </Typography>
      </HeaderContainer>
      <IconsWrapper
        style={{
          flexDirection: isDesktop ? "row" : "column",
          alignItems: isDesktop ? "start" : "center",
        }}
      >
        {cardInfo.map((item) => (
          <BenefitsCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
          />
        ))}
      </IconsWrapper>
    </BenefitsWrapper>
  );
};
const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  padding: 92px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
`;
