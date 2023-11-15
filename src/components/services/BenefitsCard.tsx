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
        <ImageWrapper>
          <StyledImage src={image} alt={title} />
        </ImageWrapper>
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
  width: 280px;
  transition: all 1.5s ease-in-out;
  cursor: pointer;
  &:hover {
    scale: 1.15;
    box-shadow: 3px 3px 5px #07222B;
  }
  `;
  const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 250px;
  `;
  const StyledImage = styled.img`
  padding: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`;
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