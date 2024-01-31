import React from 'react'
import styled from 'styled-components'
import { BenefitsCard } from './BenefitsCard'


interface Props {
  title: string,
  subTitle?: string,
  image?: string[],
}

export const ServiceBenefits: React.FC<Props> = ({
  title,
  image,
  subTitle
}) => {

  return (
    <BenefitsWrapper>
      <HeaderContainer>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
      </HeaderContainer>
      <IconsWrapper>
        <div>
          <BenefitsCard
            title= 'Increase home value'
            content='Boosting Home Value with Eco-Efficient Heat Pumps'
            image={image && image[0]}
          />
        </div>
        <div>
          <BenefitsCard
            title= 'Energy Efficient'
            content= 'Use less energy to perform the same tasks, leading to lower utility bills.'
            image={image && image[1]}
          />
        </div>
        <div>
          <BenefitsCard
            title= 'Environmentally Friendly'
            content= 'Eco-friendly practices combat pollution and climate change.'
            image={image && image[2]}
          />
        </div>
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
  margin: 5rem 0;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 30%;
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
  margin: 2rem 0;
`;
const Title = styled.h3`
  color: #1C1F35;

  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const SubTitle = styled.h4`
color: #1C1F35;

font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-left: 4px solid #68BE54 ;
background: rgba(232, 232, 232, 0.50);
padding: 3px 9px 3px 8px;
`
