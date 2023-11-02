import React from 'react'
import styled from 'styled-components'

interface Props {
  id: number
  title: string
  image: string
  content: string
}

export const EvChargerCard: React.FC<Props> = ({
  title,
  image,
  content
}) => {
  return (
    <CardWrapper>
      <Image src={image} alt="ev-chargers"/>
      <ContentContainer>
        <Title>{title}</Title>
        <TextContent>
          {content}
        </TextContent>
      </ContentContainer>
    </CardWrapper>
  )
}
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  width: 70%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: #f2f2f2;
    transition: all 2s ease-in-out;
  }

`
const Image = styled.img`
  width: 125px;
  height: 240px;
  border-radius: 10px;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Title = styled.h5`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: grey;
  text-align: center;
  margin: 2rem 0 0 0;
`
const TextContent = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0 2rem;
  text-align: center;
  margin-top: 1rem;
`
