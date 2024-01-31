import { ServicesCard } from '../cards/ServicesCard'
import styled from 'styled-components'

export const OurSolutions = () => {
  const solutions = [
    {title: 'Heat Pumps', content: 'Transfers heat between indoors and outdoors for heating and cooling.', url: '/heat-pumps'},
    {title: 'EV Chargers', content: 'Provide electricity to recharge electric vehicles.', url: '/ev-chargers'},
    {title: 'Energy Storage', content: 'Systems save and release energy for later use.', url: '/energy-storage'},
  ]

  return (
    <SolutionWrapper>
      <ContentWrapper>
        <Title>Our Solution</Title>
        <Text>We make it easy for users to use our platform, that's why we provide this benefit.</Text>
      </ContentWrapper>
      <CardWrapper>
        {
          solutions.map((solution, index) => (
            <ServicesCard
              key={index}
              title={solution.title}
              content={solution.content}
              url={solution.url}
            />
          ))
        }
      </CardWrapper>
    </SolutionWrapper>
  )
}
const SolutionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const Title = styled.h3`
  color: #0C0047;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: capitalize;
`;
const Text = styled.p`
  color: rgba(21, 27, 39, 0.70);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 23.8px */
  letter-spacing: -0.408px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  margin: 32px 0;
`;