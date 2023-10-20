import React from 'react'
import styled from 'styled-components'

interface Props {
  images: string[]
}

export const OursBrands: React.FC<Props> = ({
  images
}) => {
  return (
    <BrandsWrapper>
    <Title>Brands We Trust:</Title>
    <BrandsContainer>
      {images.map((image, index) => (
        <BrandsImage src={image} key={index} />
      ))}
    </BrandsContainer>
  </BrandsWrapper>
  )
}

const BrandsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin: 2rem auto;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: grey;
  text-align: left;
  margin: 0;
`;
const BrandsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 2rem 0;
`;
const BrandsImage = styled.img`
  width: 25%;
  height: auto;
  object-fit: cover;
`;
