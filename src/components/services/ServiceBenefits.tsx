import React from 'react'
import styled from 'styled-components'
import { BenefitsCard } from './BenefitsCard'


interface Props {
  title: string,
  subTitle?: string,
}

export const ServiceBenefits: React.FC<Props> = ({
  title,
  subTitle
}) => {
  const cardInfo = [
    {
      id: 1,
      title: 'Increase Home Value',
      image: '/images/energy-icon.png'
    },
    {
      id: 2,
      title: 'Energy Efficient',
      image: '/images/increase-icon-jpg.jpg'
    },
    {
      id: 3,
      title: 'Environmentally Friendly',
      image: '/images/enviromentally-icon.png'

    },
  ]
  return (
    <BenefitsWrapper>
      <HeaderContainer>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
      </HeaderContainer>
      <IconsWrapper>
        {
          cardInfo.map((item) => (
            <BenefitsCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
            />
          ))
        }
      </IconsWrapper>
    </BenefitsWrapper>
  )
}
const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width:80%;
  gap: 2rem;
  margin: 8rem 0;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 28%;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  gap: 1rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Title = styled.h3`
  color: #262626;
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  overflow-wrap: normal;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled.h4`
  color: #1C1F35;
  font-family: Inter;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-left: 4px solid #68BE54;
  background: rgba(232, 232, 232, 0.50);
  padding: 3px 9px 3px 8px;
  width: fit-content;
`
