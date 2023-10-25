import React from 'react'
import styled from 'styled-components'

interface Props {
    title: string,
    image?: string,
    benefitsTitle?: string,
    benefitsContent?: string,
    showEfficency?: boolean,
  }

export const BenefitsCard: React.FC<Props> = ({
    title,
    image
}) => {
  return (
    <>
      <IconCard>
        <StyledImage src={image} alt={title} />
        <TextWrapper>
          <IconText>{title}</IconText>
        </TextWrapper>
      </IconCard>
    </>
  )
}

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #F5F5F5;
  border-radius: 10px;
  width: 240px;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.2;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`;
// const StyledIcon = styled.div<{ color?: string }>`
//   font-size: 100px;
//   color: ${props => props.color || 'green'};
// `;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  width: 100%;
  height: 40px;
  border-radius: 0 0 10px 10px;
  opacity: 0.5;
`;
const IconText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #000;
  text-align: center;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;