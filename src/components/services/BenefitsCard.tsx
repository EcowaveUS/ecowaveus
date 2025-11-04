import React from "react";
import styled from "styled-components";

interface Props {
  id: number;
  title: string;
  content?: string;
  image?: string;
}

export const BenefitsCard: React.FC<Props> = ({ title, image }) => {
  return (
    <IconCard>
      <img src={image} alt={title} />
      <IconText>{title}</IconText>
    </IconCard>
  );
};

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 204px;
`;

const IconText = styled.p`
  color: white;
  font-family: Inter !important;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  text-align: center;
  max-width: 170px;
`;
