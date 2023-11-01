import React from 'react'
import styled from 'styled-components'
import { BenefitsCard } from './BenefitsCard'
import { BenefitsContent } from './BenefitsContent'


interface Props {
  title: string,
}

export const ServiceBenefits: React.FC<Props> = ({
  title,
}) => {
  const [showEfficency, setShowEfficency] = React.useState(false);
  const [showComfort, setShowComfort] = React.useState(false);
  const [showEnvironmentally, setShowEnvironmentally] = React.useState(false);
  return (
    <BenefitsWrapper>
      <Title>{title}</Title>
      <IconsWrapper>
        <div
          onClick={()=>setShowEfficency(!showEfficency)}
        >
          <BenefitsCard
            title= 'Increase home value'
            image='/images/efficiency.jpg'
          />
        </div>
        <div
          onClick={()=>setShowComfort(!showComfort)}
        >
          <BenefitsCard
            title= 'Cost savings'
            image='/images/comfort.jpg'
          />
        </div>
        <div
          onClick={()=>setShowEnvironmentally(!showEnvironmentally)}
        >
          <BenefitsCard
            title= 'Environmentally friendly'
            image='/images/enviroment.jpg'
          />
        </div>
      </IconsWrapper>
      {
        showEfficency &&
        <BenefitsContent
          title='Efficiency'
          content='Efficient heat pumps offer a cost-effective solution for heating and cooling. They use less energy, resulting in lower utility bills and long-term savings. With extended lifespans and minimal maintenance, they incur fewer unexpected costs. Additionally, their reduced reliance on fossil fuels leads to a greener footprint. By serving both heating and cooling functions, they streamline installations. Overall, investing in efficient heat pumps proves economically wise, providing comfort, savings, and sustainability.'
          onClick={()=>setShowEfficency(!showEfficency)}
        />
      }
      {
        showComfort &&
        <BenefitsContent
          title='Comfort'
          content='Efficient heat pumps redefine comfort in heating and cooling. Their advanced technology ensures consistent temperature control, eliminating the hot and cold spots often experienced with traditional systems. They operate quietly and evenly, creating a cozy environment without disruptions. Additionally, heat pumps offer customizable settings, allowing you to tailor your indoor climate to perfection. With their ability to both heat and cool, they provide year-round comfort, making them an ideal choice for any season. Experience unparalleled comfort with efficient heat pumps.'
          onClick={()=>setShowComfort(!showComfort)}
        />
      }
      {
        showEnvironmentally &&
        <BenefitsContent
          title='Environmentally friendly'
          content='Heat pumps present a multitude of benefits, making them a standout choice for heating and cooling needs. They boast remarkable energy efficiency, resulting in lower utility bills and reduced environmental impact. Offering both heating and cooling capabilities, they ensure year-round comfort. With quiet operation and zoning options, they create a comfortable and customizable indoor environment. Moreover, their extended lifespan and minimal maintenance requirements contribute to long-term cost savings. By reducing reliance on fossil fuels, heat pumps also play a crucial role in fostering a sustainable future. Financial incentives further sweeten the deal, making them a wise and economical choice for any home or business.'
          onClick={()=>setShowEnvironmentally(!showEnvironmentally)}
        />
      }
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
