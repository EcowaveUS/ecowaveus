import React from 'react'
import styled from 'styled-components'
import { SvgPositive } from '../svg/SvgPositive';

interface LocationProps {
  location: string[];
}

export const ListAreaService: React.FC<LocationProps> = ({
  location
}) => {
  return (
    <>
    <LocationWrapper>
    <Title>Area Services</Title>
    <AreaWrapper>
      {
        location.map((loc, index) => (
          <LocationContainer key={index}>
            <LocationContent >
              <SvgPositive />
              <Text>{loc}</Text>
            </LocationContent>
          </LocationContainer>
        ))
      }
    </AreaWrapper>
    </LocationWrapper>
    </>
  )
}
const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 460px;
  height: auto;
  border-radius: 20px 0 0 20px;
  background-color: #fff;
  padding: 32px 24px;
  @media (max-width: 1024px) {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;
const AreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 460px;
  height: auto;
  background-color: #fff;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const Title = styled.h3`
  color: rgba(0, 0, 0, 0.90);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;
const LocationContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 300px;
`;
const Text = styled.p`
  color: rgba(0, 0, 0, 0.90);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;


