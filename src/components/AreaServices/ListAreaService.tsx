import React from 'react'
import styled from 'styled-components'
import { FaLocationDot } from "react-icons/fa6";

interface LocationProps {
  location: string[];
}

export const ListAreaService: React.FC<LocationProps> = ({
  location
}) => {
  return (
    <LocationWrapper>
      {
        location.map((loc, index) => (
          <LocationContainer key={index}>
            <LocationContent >
                <FaLocationDot color='grey' />
              <IconWrapper>
              </IconWrapper>
              <Text>{loc}</Text>
            </LocationContent>
            {index !== loc.length  && <Separator/>}
          </LocationContainer>
        ))
      }
    </LocationWrapper>
  )
}
const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 10px;
  margin: 20px 0;
  padding-top: 20px;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
const LocationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 300px;
  &:hover {
    cursor: pointer;
    scale: 1.2;
    transition: all 0.5s ease-in-out;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30px;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: grey;
`;
const Separator = styled.div`
  background-color: grey;
  margin: 1rem 0;
  width: 70%;
  height: 1px;
  border-width: 1px;
  border-style: dnone;
  border-spacing: 15px;
`;

