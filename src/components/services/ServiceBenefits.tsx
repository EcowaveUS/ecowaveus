import React from 'react'
import styled from 'styled-components'
import { FaHouseChimney, FaMoneyBill, FaEnvira } from "react-icons/fa6";
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
          onMouseEnter={()=>setShowEfficency(true)}
          onMouseLeave={()=>setShowEfficency(false)}
        >
          <BenefitsCard
            title= 'Efficiency'
            Icon= {FaMoneyBill}
            color= 'red'
          />
        </div>
        <div
          onMouseEnter={()=>setShowComfort(true)}
          onMouseLeave={()=>setShowComfort(false)}
        >
          <BenefitsCard
            title= 'Comfort'
            Icon= {FaHouseChimney}
            color= 'blue'
          />
        </div>
        <div
          onMouseEnter={()=>setShowEnvironmentally(true)}
          onMouseLeave={()=>setShowEnvironmentally(false)}
        >
          <BenefitsCard
            title= 'Environmentally friendly'
            Icon= {FaEnvira}
            color= 'green'
          />
        </div>
      </IconsWrapper>
      {
        showEfficency &&
        <BenefitsContent
          title='Efficiency'
          content='A heat pump is a highly efficient device that transfers heat from one location to another, rather than generating heat or cooling itself. Powered by electricity, the heat pump simply moves heat, taking advantage of the abundant energy provided by the sun. Unlike traditional heat sources such as oil, natural gas, or propane, heat pumps boast an impressive efficiency of 300%. This means that for every unit of energy input, they deliver three units of heat. While it may seem like magic, heat pumps work by harnessing the vast amount of solar energy available, making them an eco-friendly and cost-effective alternative to conventional heating methods.'
        />
      }
      {
        showComfort &&
        <BenefitsContent
          title='Comfort'
          content='A heat pump is a highly efficient device that transfers heat from one location to another, rather than generating heat or cooling itself. Powered by electricity, the heat pump simply moves heat, taking advantage of the abundant energy provided by the sun. Unlike traditional heat sources such as oil, natural gas, or propane, heat pumps boast an impressive efficiency of 300%. This means that for every unit of energy input, they deliver three units of heat. While it may seem like magic, heat pumps work by harnessing the vast amount of solar energy available, making them an eco-friendly and cost-effective alternative to conventional heating methods.'
        />
      }
      {
        showEnvironmentally &&
        <BenefitsContent
          title='Environmentally friendly'
          content='A heat pump is a highly efficient device that transfers heat from one location to another, rather than generating heat or cooling itself. Powered by electricity, the heat pump simply moves heat, taking advantage of the abundant energy provided by the sun. Unlike traditional heat sources such as oil, natural gas, or propane, heat pumps boast an impressive efficiency of 300%. This means that for every unit of energy input, they deliver three units of heat. While it may seem like magic, heat pumps work by harnessing the vast amount of solar energy available, making them an eco-friendly and cost-effective alternative to conventional heating methods.'
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
  width:90%;
  margin: 2rem 0;
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin: 2rem 0;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: grey;
  text-align: left;
  margin: 0;
`;
