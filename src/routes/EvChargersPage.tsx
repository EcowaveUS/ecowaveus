import styled from 'styled-components'
import { ServiceTitle } from '../components/services/ServiceTitle'
import { ServiceBenefits } from '../components/services/ServiceBenefits'
import { OursBrands } from '../components/brands/OursBrands'
import { motion } from 'framer-motion'
import { Inovation } from '../components/homeComponents/Inovation'
import { EvChargersRebates } from '../components/services/EvChargersRebates'
import { EvChargerCard } from '../components/services/EvChargerCard'


export const EvChargersPage = () => {

  const evChargers = [
    {
      id: 1,
      title: 'Level 1 (120V) Charger',
      image: '/images/ev-charger-level-1.png',
      content: 'Use a standard household outlet and deliver a slow charge, typically taking 8-12 hours to fully charge an EV battery.'
    },
    {
      id: 2,
      title: 'Level 2 (240V) Charger',
      image: '/images/ev-charger-level-2.png',
      content: 'Offer a faster charge than Level 1 chargers, taking 4-8 hours to fully charge an EV battery. It is a practical option for frequent or daily charging needs.'
    },
    {
      id: 3,
      title: 'Level 3 (480V) Charger',
      image: '/images/ev-charger-level-3.png',
      content: 'Offer the fastest charge time, delivering a full charge in just 30 minutes to an hour. These chargers are typically found at public charging stations and are ideal for long-distance travel.'
    },
  ]
  return (
    <StyledPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TitleContainer>
        <ServiceTitle title='EV Chargers'/>
      </TitleContainer>
      <Inovation
        title='Charge Faster, Go Further'
        content='We are dedicated to helping drivers switch to clean and sustainable transportation, by providing top-quality EV charger installation solutions that are both cost-effective and affordable.'
        images= {[
          {
            img:'/images/ev-chargers.jpg',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
          },
          {
            img: '/images/ev-chargers-02.jpg',
            title:'ev-charger'
          },
          {
            img: '/images/ev-chargers-01.jpg',
            title:'heat-pumps'
          },
          {
            img: '/images/ev-chargers-01.jpg',
            title:'energy-storage',
            cols: 2,
            rows: 1,
          },
        ]}
        logo='/images/logo-ecowave.png'
      />
      <ServiceBenefits
        title='Benefits of EV-Chargers'
        image= {[
          '/images/cost-saving-icon.png',
          '/images/Increase-icon.png',
          '/images/enviroment-evc-icon.png'
        ]}
      />
      <StepsWrapper>
        <PumpsContentTitle>Types of EV chargers</PumpsContentTitle>
        <Separator/>
        <div>
            {
              evChargers.map((charger, index) => (
                <ListWrapper key={index} >
                  <EvChargerCard
                    key={charger.id}
                    id={charger.id}
                    title={charger.title}
                    image={charger.image}
                    content={charger.content}
                  />
                  {index !== evChargers.length - 1 && <Separator/>}
                </ListWrapper>
              ))
            }
        </div>
      </StepsWrapper>
      <EvChargersRebates />
      <OursBrands
        images={[
            '/images/tesla-logo.jpg',
            '/images/charge-point-logo.png',
            '/images/juicebox-logo.png'
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
const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-image: url('/images/ev-chargers-title.jpg');
background-size: cover;
background-position: center;
width: 100%;
margin-bottom: 2rem;
`;

const PumpsContentTitle = styled.h3`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 600;
  color: grey;
  text-align: left;
  margin: 2rem 0 0 0;
`;
const Separator = styled.div`
width: 70%;
height: 1px;
background-color: grey;
margin: 2rem 0;
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
