import styled from "styled-components";
import { Theme, Typography, useMediaQuery } from "@mui/material";

const benefits = [
  {
    id: 1,
    icon: "/images/multi-family/Multi-family-lower-cost.webp",
    title: "Lower operating costs",
  },
  {
    id: 2,
    icon: "/images/multi-family/Multi-family-zero-financing.webp",
    title: "Access 0% financing",
  },
  {
    id: 3,
    icon: "/images/multi-family/Multi-family-increase-NOI.webp",
    title: "Increase Net Operating Income",
    boldTitle: "5% +"
  },
  {
    id: 4,
    icon: "/images/multi-family/Multi-family-comfort.webp",
    title: "Quiet, precise comfort",
  },
  {
    id: 5,
    icon: "/images/multi-family/Multi-family-indoor-air.webp",
    title: "Healthier indoor air",
  },
  {
    id: 6,
    icon: "/images/multi-family/Multi-family-safer-property.webp",
    title: "Smarter, safer properties",
  },
];

export const BenefitsForMultiFamily: React.FC = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Container>
      <Typography
        color={"#252529"}
        fontWeight={isDesktop ? 600 : 800}
        fontSize={isDesktop ? "48px" : "32px"}
        letterSpacing={"0 !important"}
        textAlign={"center"}
        lineHeight={isDesktop ? "52px" : "40px"}
        fontFamily={"Inter !important"}
      >
        Benefits of Heat Pumps for Multi-Family
      </Typography>
      <BenefitsWrapper>
        {benefits.map((benefit) => (
          <div key={benefit.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <img src={benefit.icon} alt={benefit.title} height={isDesktop ? "100px" : "80px"} />
            <Typography
              color={"#252529"}
              fontSize={isDesktop ? "16px" : "14px"}
              letterSpacing={"0 !important"}
              textAlign={"center"}
              fontFamily={"Inter !important"}
            >{benefit.title}</Typography>
            {benefit.boldTitle && (
              <Typography
                color={"#252529"}
                fontWeight={700}
                fontSize={isDesktop ? "16px" : "14px"}
                letterSpacing={"0 !important"}
                textAlign={"center"}
                fontFamily={"Inter !important"}
              >{benefit.boldTitle}</Typography>
            )}
          </div>
        ))}
      </BenefitsWrapper>
    </Container>
  );
};

const Container = styled.div`
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

const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  gap: 48px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;