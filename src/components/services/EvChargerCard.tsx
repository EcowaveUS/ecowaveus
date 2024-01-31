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
      <ContentContainer>
        <Title>{title}</Title>
        <TextContent>
          {content}
        </TextContent>
      </ContentContainer>
      <Image src={image} alt="ev-chargers"/>
    </CardWrapper>
  )
}
const CardWrapper = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 908px;
  border-radius: 10px;
  border: 1px solid #003B76;
  background: #003B76;

  /* Shadow/Light/XXL */
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07), 0px 25px 50px -12px rgba(255, 255, 255, 0.25);
`
const Image = styled.img`
  height: 670px;
  align-self: stretch;
  border-radius: 10px;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 12px;
  gap: 12px;
`
const Title = styled.h5`
  color: var(--White, var(--fore-allways---white, #FFF));
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 26.4px */
`
const TextContent = styled.p`
  color: var(--White, var(--fore-allways---white, #FFF));

  /* Body/L */
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
`
