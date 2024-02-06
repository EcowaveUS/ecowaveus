import { ServicesCard } from '../cards/ServicesCard'
import styled from 'styled-components'

export const OurSolutions = () => {
  const solutions = [
    {title: 'Heat Pumps', content: 'Efficient Heating and Cooling for Your Home.', url: '/heat-pumps', icon: '/images/solution-icon-heat-pumps.png'},
    {title: 'EV Chargers', content: 'Charge Your EV Faster at Home.', url: '/ev-chargers', icon: '/images/solution-icon-ev-chargers.png'},
    {title: 'Energy Storage', content: 'Save your energy, save money.', url: '/energy-storage', icon: '/images/solution-icon-energy-storage.png'},
  ]

  return (
    <SolutionWrapper>
      <ContentWrapper>
        <Title>How Can We Help You?</Title>
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