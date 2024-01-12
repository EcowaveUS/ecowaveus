import styled from 'styled-components'
import { OursBrands } from '../components/brands/OursBrands'
import { ServiceTitle } from '../components/services/ServiceTitle'
import { ServiceBenefits } from '../components/services/ServiceBenefits'
import { ProccesCard } from '../components/services/ProccesCard'
import { motion } from 'framer-motion'
import { Inovation } from '../components/homeComponents/Inovation'
import { RebatesIncentives } from '../components/services/RebatesIncentives'

export const HeatPumsPage = () => {

  const stepByStepList = [
    {
      id: 1,
      item: '01',
      content: [
        'If your house was built after the year 2000, you can skip this step.',
        ' Before the installation, in order to qualify for Mass Save rebates, you must complete an energy assessment and obtain a Certificate of Completion (COC). This is necessary for being eligible for rebates from Mass Save.',
        'To schedule an energy assessment with Mass Save, please click on the following link:'
      ]
    },
    {
      id: 2,
      item: '02',
      content: [
        'Give us a call and tell us about the scope of your project.'
      ]
    },
    {
      id: 3,
      item: '03',
      content: [
        'Schedule a visit; we will take measurements of your house and inspect some elements.'
      ]
    },
    {
      id: 4,
      item: '04',
      content: [
        'Receive a free estimate from us, including information on rebates you may be eligible for.'
      ]
    },
    {
      id: 5,
      item: '05',
      content: [
        'Sign a contract.'
      ]
    },
    {
      id: 6,
      item: '06',
      content:[
        'a) If you are NOT applying for a Mass Save loan, proceed to step 7.',
        'b) If you are applying for the Mass Save 0% HEAT loan'
      ]
    },
    {
      id: 7,
      item: '07',
      content: [
        'We will order the equipment and schedule a start date for the job.'
      ]
    },
    {
      id: 8,
      item: '08',
      content: [
        "We'll complete the installation. We'll commission the system."
      ]
    },
    {
      id: 9,
      item: '09',
      content: [
        "We'll complete the installation. We'll commission the system."
      ]
    },
    {
      id: 10,
      item: '10',
      content: [
        "We'll assist you in applying for your rebate."
      ]
    },
    {
      id: 11,
      item: '11',
      content: [
        "We'll assist you in applying for your rebate."
      ]
    },
    {
      id: 12,
      item: '12',
      content:[
        "Enjoy your new system!"
      ]
    }
  ]

  return (
      <StyledPage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeaderWrapper>
          <ServiceTitle
            title='Heat Pumps'
          />
        </HeaderWrapper>
        <Inovation
          title='What is a heat pump?'
          content=
          'A heat pump is a highly efficient device that transfers heat from one location to another, rather than generating heat or cooling itself. Powered by electricity, the heat pump simply moves heat, taking advantage of the abundant energy provided by the sun. Unlike traditional heat sources such as oil, natural gas, or propane, heat pumps boast an impressive efficiency of 300%. This means that for every unit of energy input, they deliver three units of heat. While it may seem like magic, heat pumps work by harnessing the vast amount of solar energy available, making them an eco-friendly and cost-effective alternative to conventional heating methods.'
          images= {[
            {
              img:'/images/heat-pumps-ppl.jpg',
              title: 'Breakfast',
              rows: 2,
              cols: 2,
            },
            {
              img: '/images/heat-pumps-05.jpg',
              title:'ev-charger'
            },
            {
              img: '/images/heat-pumps-06.jpg',
              title:'heat-pumps'
            },
            {
              img: '/images/heat-pumps-03.jpg',
              title:'energy-storage',
              cols: 2,
              rows: 1,
            },
          ]}
          logo='/images/logo-ecowave.png'
        />
        <ServiceBenefits
          title='Benefits of heat pumps'
          image = {[
            '/images/energy-icon.png',
            '/images/Increase-icon.png',
            '/images/envaromentally-icon.png',
          ]}
        />
        <StepsWrapper>
          <PumpsContentTitle>Instalation Procces Step-By-Step</PumpsContentTitle>
          <Separator/>
          <div>
              {
                stepByStepList.map((step, index) => (
                  <ListWrapper key={index} >
                    <ProccesCard
                      key={step.id}
                      id={step.id}
                      item={step.item}
                      content={step.content}
                    />
                    {index !== stepByStepList.length - 1 && <Separator/>}
                  </ListWrapper>
                ))
              }
          </div>
        </StepsWrapper>
        <RebatesIncentives/>
        <OursBrands
          images={[
              '/images/Mitsubishi_Electric_logo.png',
              '/images/LG-Air-Conditioning-Logo.png',
              '/images/Fujitsu-Logo.png'
            ]}
        />
      </StyledPage>
  )
}

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9;
`;

const PumpsContentTitle = styled.h3`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 600;
  color: grey;
  text-align: left;
  margin: 2rem 0 0 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    width: 70%;
  }
`;
const Separator = styled.div`
  background-color: grey;
  margin: 1rem 0;
  width: 70%;
  height: 1px;
  border-width: 1px;
  border-style: dnone;
  border-spacing: 15px;
`;
const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #26252B;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
