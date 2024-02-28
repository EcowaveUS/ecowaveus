import { ServicesCard } from '../cards/ServicesCard'
import styled from 'styled-components'

export const OurSolutions = () => {
  const solutions = [
    {
      title: 'Heat Pumps',
      content: 'Efficient Heating and Cooling for Your Home',
      url: '/heat-pumps',
      icon: '/images/solution-icon-heat-pumps.png'
    },
    {
      title: 'EV-Chargers',
      content: 'Charge Your EV Faster at Home.',
      url: '/ev-chargers',
      icon: '/images/solution-icon-ev-chargers.png'
    },
    {
      title: 'Energy Storage',
      content: 'Save your energy, save money.',
      url: '/energy-storage',
      icon: '/images/solution-icon-energy-storage.png'
    },
  ]

  return (
    <SolutionWrapper>
      <ContentWrapper>
        <Title>How Can We Help You?</Title>
        <Text>We make it easy for you!</Text>
      </ContentWrapper>
      <CardWrapper>
        {
          solutions.map((solution, index) => (
            <ServicesCard
              key={index}
              title={solution.title}
              content={solution.content}
              url={solution.url}
              icon={solution.icon}
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
  margin-bottom: 5rem;
  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
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
  color: #151B27;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.408px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
`;