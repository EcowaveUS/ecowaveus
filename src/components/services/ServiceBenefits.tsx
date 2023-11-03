import React from 'react'
import styled from 'styled-components'
import { BenefitsCard } from './BenefitsCard'


interface Props {
  title: string,
}

export const ServiceBenefits: React.FC<Props> = ({
  title,
}) => {

  return (
    <BenefitsWrapper>
      <Title>{title}</Title>
      <IconsWrapper>
        <div>
          <BenefitsCard
            title= 'Increase home value'
            image='/images/energy-icon.png'
          />
        </div>
        <div>
          <BenefitsCard
            title= 'Energy Efficient'
            image='/images/Increase-icon.png'
          />
        </div>
        <div>
          <BenefitsCard
            title= 'Environmentally Friendly'
            image='/images/envaromentally-icon.png'
          />
        </div>
      </IconsWrapper>
    </BenefitsWrapper>
  )
}
const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:80%;
  margin: 2rem 0;
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 2rem 0;
  gap: 2rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: grey;
  text-align: left;
  margin: 0;
  font-style: italic;
  letter-spacing: 0.1rem;
`;
