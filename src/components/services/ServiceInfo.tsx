import React from 'react'
import styled from 'styled-components'

interface Props {
  title?: string,
  images?: string[],
  content: string,
}

export const ServiceInfo: React.FC<Props> = ({
  title,
  images,
  content,
}) => {
  return (
    <PumpsWrapper>
      <ImageWrapper>
        {
          images?.map((image, index) => (
            <PumpsImage key={index} src={image} alt="pumps" />
          ))
        }
      </ImageWrapper>
      <PumpsContent>
        <PumpsContentTitle>{title}</PumpsContentTitle>
        <PumpsContentText>
          {content}
        </PumpsContentText>
      </PumpsContent>
    </PumpsWrapper>
  )
}

const PumpsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width:90%;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ImageWrapper = styled.div`
  width: 45%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const PumpsImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;
const PumpsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  @media (max-width: 1024px) {
    padding: 0 2rem;
    align-items: center;
    width: 90%;
  }
`;
const PumpsContentTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: grey;
  text-align: left;
  margin: 0;
`;
const PumpsContentText = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: grey;
  text-align: left;
`;
