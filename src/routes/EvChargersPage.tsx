import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ServiceBenefits } from '../components/services/ServiceBenefits'
import { OursBrands } from '../components/brands/OursBrands'
import { motion } from 'framer-motion'
import { EvChargerCard } from '../components/services/EvChargerCard'
import { RebatesIncentives } from '../components/services/RebatesIncentives'
import { MainPageComponent } from '../components/pagesComponents/MainPageComponent'


export const EvChargersPage = () => {
  const location = useLocation();
  const pathLocation = location.pathname;

  const evChargers = [
    {
      id: 1,
      title: 'Level 1 (120V) Charger',
      image: '/images/ev-charger-level1.png',
      content: 'Use a standard household outlet and deliver a slow charge, typically taking 8-12 hours to fully charge an EV battery.'
    },
    {
      id: 2,
      title: 'Level 2 (240V) Charger',
      image: '/images/ev-charger-leve2.png',
      content: 'Offer a faster charge than Level 1 chargers, taking 4-8 hours to fully charge an EV battery. It is a practical option for frequent or daily charging needs.'
    },
    {
      id: 3,
      title: 'Level 3 (480V) Charger',
      image: '/images/ev-charger-level3.png',
      content: 'Offer the fastest charge time, delivering a full charge in just 30 minutes to an hour. These chargers are typically found at public charging stations and are ideal for long-distance travel.'
    },
  ]
  return (
    <StyledPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainPageComponent
        title='Storing Power, Empowering Lives'
        content='Maximize sustainable living with ecoWAVEus"s home-specific energy storage systems. Affordable and reliable, they guard against power outages and optimize solar energy use for anytime access, fostering a greener future.'
        pathLocation={pathLocation}
        backgroundImage='/images/ev-chargers.png'

      />
      <ServiceBenefits
        title='Benefits of EV-Chargers'
        subTitle= 'Maximizing Comfort and Efficiency'
        image= {[
          '/images/energy-icon.png',
          '/images/increase-icon.png',
          '/images/enviromentally-icon.png'
        ]}
      />
      <ImageBrackground >
        <StyledImage src="/images/ev-chargers-types-background.png" alt="heatpumps-background" />
      </ImageBrackground>
      <ProccesComponent>
        <TitleProcces>Instalation Procces Step-By-Step</TitleProcces>
        <TextProcces>To make your experience seamless, we've distilled the process into five easy-to-follow steps</TextProcces>
          <ProccesCardWrapper>
            {
              evChargers.map((item) => (
                <EvChargerCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  content={item.content}
                />
              ))
            }
          </ProccesCardWrapper>
      </ProccesComponent>
      <RebatesIncentives>
        <Text>
          The Residential EV Charging Infrastructure Program supports residential electric customers by providing rebates for upgrading home-wiring in their garage or parking area (up to $700 for single family homes, with additional rebates for 2-4 units) and ongoing savings once enrolled in a managed charging program, for example approximately $100 annually through the off peak charging program. Customers living in an environmental justice community or enrolled in the low-income discount rate (R-2) are eligible for additional wiring and charger rebates.
        </Text>
        <Subtitle>Federal incentives</Subtitle>
          <Text>
            A recently expired federal tax break for electric vehicle (EV) chargers got new life under the recently passed Inflation Reduction Act—a move that will give taxpayers up to $1,000 in a tax credit.
          </Text>
      </RebatesIncentives>
      <BrandsWrapper>
          <OursBrands
            images={[
                '/images/brands/mitsubishi-logo.png',
                '/images/brands/lg-logo.png',
                '/images/brands/fujitsu-logo.png',
                '/images/brands/daikin-logo.png',
                '/images/brands/tesla-logo.png',
                '/images/brands/fujitsu-logo.png',
                '/images/brands/daikin-logo.png',
              ]}
          />
        </BrandsWrapper>
  </StyledPage>
)
}

const StyledPage = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Text = styled.p`
  color: var(--fore-allways---white, #FFF);

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%;
`;
const ImageBrackground = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProccesComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 3rem;
  margin-top: -7rem;
  margin-bottom: 8rem;
`;
const ProccesCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%
  background-color: red;
`;
const TitleProcces = styled.h3`
color: #1C1F35;
width: 472px;
font-family: Inter;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 16px;
`
const TextProcces = styled.p`
color: #666C89;
width: 472px;

font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 151.523%; /* 24.244px */
margin-bottom: 32px;

`
const BrandsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #F5F5F5;
`;
const Subtitle = styled.h5`
  color: var(--White, var(--fore-allways---white, #FFF));
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-top: 8px;
`;
