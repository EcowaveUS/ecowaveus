import { Theme, useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
  image: string;
  content: string;
}

export const EvChargerCard: React.FC<Props> = ({ title, image, content }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <CardWrapper>
      <ContentContainer>
        <Title>{title}</Title>
        {isDesktop && <TextContent>{content}</TextContent>}
      </ContentContainer>
      <Image src={image} alt="ev-chargers" />
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  z-index: -1;

  display: flex;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 520px;
  height: 476px;
  border-radius: 10px;
  background: #dddddd;
  border-radius: 20px;

  /* Shadow/Light/XXL */
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07),
    0px 25px 50px -12px rgba(255, 255, 255, 0.25);
  margin-bottom: 2rem;
  gap: 12px;
  @media (max-width: 768px) {
    width: 340px;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Image = styled.img`
  height: 412px;
  width: 228px;
  align-self: stretch;
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 12px;
  background-color: #fff;
  width: 268px;
  height: 412px;
  border-radius: 10px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Title = styled.h5`
  color: var(--White, var(--fore-allways---white, #1c1f35));
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 26.4px */
`;
const TextContent = styled.p`
  align-self: stretch;
  color: var(--White, var(--fore-allways---white, #1c1f35));

  color: #1c1f35;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
`;
