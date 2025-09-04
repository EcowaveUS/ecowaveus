import React from "react";
import styled from "styled-components";
import { Theme, Typography, useMediaQuery } from "@mui/material";

export const PowerfulCombination: React.FC = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const texts = [
    "<b>Solar Panels</b> absorb sunlight and generate Direct Current (DC) electricity.",
    "An inverter converts DC into AC Power for home use.",
    "The <b>Electrical Panel</b> directs solar power to the <b>Heat Pump Ductless - Ducted System.</b>",
    "The <b>Outdoor Unit Heat Pump</b> uses this energy to heat and cool efficiently.",
    "Extra solar power flows through the <b>utility line</b>, earning credits.",
    "The <b>Emergency Disconnect</b> provides safety and keeps the home connected to grid backup.",
  ];
  return (
    <BenefitsWrapper>
      <HeaderContainer className="container">
        <Typography
          color={"#2aa513"}
          fontWeight={800}
          fontSize={isDesktop ? "16px" : "14px"}
          fontFamily={"Inter !important"}
          lineHeight={"24px"}
          letterSpacing={"0 !important"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          A POWERFUL COMBINATION
        </Typography>
        <Typography
          color={"#252529"}
          fontWeight={isDesktop ? 600 : 800}
          fontSize={isDesktop ? "48px" : "32px"}
          letterSpacing={"0 !important"}
          textAlign={"center"}
          lineHeight={isDesktop ? "52px" : "40px"}
          fontFamily={"Inter !important"}
        >
          How Solar Works with an Air-Source Heat Pump
        </Typography>
      </HeaderContainer>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
        }}
      >
        <img
          src="/images/solar-graphic.png"
          style={{ width: "100%", height: "auto" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {texts.map((text, index) => (
            <div
              key={index}
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              <img src="/images/blue-bullet-point.png" width={30} />
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                style={{ color: "black" }}
              />
            </div>
          ))}
        </div>
      </div>
    </BenefitsWrapper>
  );
};
const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  padding: 48px 0;
  @media (min-width: 900px) {
    padding: 92px 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;
