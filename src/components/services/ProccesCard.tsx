import React from 'react'
import styled from 'styled-components'

interface Props {
  id: number,
  item: string,
  title: string,
  content: string,
  span?: string
}

export const ProccesCard: React.FC<Props> = ({
  item,
  content,
  title,
  span
}) => {
  return (
    <CardWarpper>
      <ItemWrapper>
        <ItemNumber>{item}</ItemNumber>
      </ItemWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <TextContent>
          {content}<span>{span}</span>
        </TextContent>
      </ContentWrapper>
    </CardWarpper>
  )
}
const CardWarpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin: 22px 0 22px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  background-image: url('/images/green-ellipse.png');
`;
const ItemNumber = styled.p`
color: var(--fore-allways---white, #FFF);
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 100% */
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 464px;
  @media (max-width: 768px) {
    width: auto;
    align-items: center;
  }
`;
const Title = styled.h3`
color: #1C1F35;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
const TextContent = styled.p`
  color: #666C89;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%; /* 24.244px */
  max-width: 424px;
  span {
    color: #1FA500;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 151.523%;
  }
  @media (max-width: 768px) {
    text-align: center;
  }

`;