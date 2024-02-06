import { useLocation } from 'react-router'
import styled from 'styled-components'
import { ServiceBenefits } from '../components/services/ServiceBenefits'
import { OursBrands } from '../components/brands/OursBrands'
import { motion } from 'framer-motion'
import { RebatesIncentives } from '../components/services/RebatesIncentives'
import { MainPageComponent } from '../components/pagesComponents/MainPageComponent'
import { StorageAdvantages } from '../components/pagesComponents/StorageAdvantages'


export const EnergyStoragePage = () => {
  const location = useLocation();
  const pathLocation = location.pathname;

  return (
    <StyledPage
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <MainPageComponent
        title='Storing Power, Empowering Lives'
        content='Unlock the full potential of sustainable living with our energy storage systems, designed specifically for your home. At ecoWAVEus, we believe that every homeowner deserves access to affordable and reliable energy storage solutions. Our energy storage systems not only provide a safety net against power outages but also allow you to make the most of your solar installations, storing excess energy for use any time. Because a greener future starts at home.'
        pathLocation={pathLocation}
        backgroundImage='/images/energy-storage.png'
      />
      <ServiceBenefits
        title='Benefits of Energy storage'
        subTitle= 'Maximizing Comfort and Efficiency'
        image= {[
          '/images/energy-icon.png',
          '/images/increase-icon.png',
          '/images/enviromentally-icon.png'
        ]}
      />
      <StorageAdvantages />
      <RebatesIncentives route={pathLocation} >
        <Text>Connect with a battery storage partner.Energy-sharing events through our ConnectedSolutions program call on your battery system to automatically discharge during peak demand days, which occur as follows:</Text>
        <CardWrapper>
          <Text>From June 1 – September 30 </Text>
          <Text>Between 3pm - 8pm</Text>
          <Text>No more than 60 times each summer</Text>
          <Text>A maximum of 3 hours per event</Text>
          <Text>You can opt out at any time</Text>
        </CardWrapper>
        <Subtitle>Incentives</Subtitle>
        <Text>Participating customers will receive an incentive every year based on the performance of their battery system at a rate of $275 per kW performed between June 1 and September 30. On average, customers have received $1,500 per year.</Text>
        <Subtitle>Federal Incentives</Subtitle>
        <Text>25D provides households an uncapped 30 percent tax credit of the installation cost for a battery storage</Text>
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
padding-top: 100px;
`;

const Text = styled.p`
  color: var(--fore-allways---white, #FFF);

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%;
  text-align: center;
`;
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
  margin-top: 3rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 2rem 4rem;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
`;