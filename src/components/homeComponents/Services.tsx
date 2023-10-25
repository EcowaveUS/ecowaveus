import React from 'react'
import styled from 'styled-components'
import { ServiceButton } from '../buttons/ServiceButton'

interface Props {
  title?: string,
}
export const Services: React.FC<Props> = ({
  title
}) => {
  const buttonsContent = [
    {
      title: 'HEAT PUMPS',
      route: '/heat-pumps'
    },
    {
      title: 'EV CHARGERS',
      route: '/ev-chargers'
    },
    {
      title: 'ENERGY STORAGE',
      route: '/energy-storage'
    },
  ]
  return (
    <ServiceContainer>
      <ContentTitle>{title}</ContentTitle>
      <ServicesButtonsContainer>
        {
          buttonsContent.map((button, index) => (
            <ServiceButton
              key={index}
              title={button.title}
              route={button.route}
            />
          ))
        }
      </ServicesButtonsContainer>
  </ServiceContainer>
  )
}
const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  width: 70%;
`;
const ServicesButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  width: 80%;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`
const ContentTitle = styled.h3`
  margin: 1rem;
  font-size: 35px;
  font-weight: 400;
  color: grey;
  text-align: center;
`
