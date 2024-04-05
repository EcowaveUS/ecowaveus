import { useLocation } from 'react-router'
import styled from 'styled-components'
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
    initial={{ opacity: 0.8 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <MainPageComponent
        title='Storing Power, Empowering Lives'
        content='Unlock the full potential of sustainable living with our energy storage systems, designed specifically for your home. At EcowaveUS, we believe that every homeowner deserves access to affordable and reliable energy storage solutions. Our energy storage systems not only provide a safety net against power outages, but also allow you to make the most of your solar installations, storing excess energy for use any time.'
        pathLocation={pathLocation}
        backgroundImage='/images/energy-storage01.jpg'
      />
      <StorageAdvantages />
      <RebatesIncentives route={pathLocation} >
        <Text>
          From the Mass Save website:  “Through ConnectedSolutions, residents receive incentives for lowering and/or shifting electricity usage during times of peak demand (like hotter days during the summer). Residents will receive $275 per kilowatt (kW) for a battery’s average contribution during summer events.<br/>
          By enrolling your home battery system, you will earn incentives for allowing your Mass Save Sponsor to draw energy stored in your battery during times of peak electricity demand.Your Mass Save Sponsor will automatically send a signal to your system no more than 60 times per summer, with each event lasting a maximum of three hours. Summer events will occur on non-holidays between June 1 and September 30, between the hours of 3:00 p.m. and 8:00 p.m.”
        </Text>
        <Subtitle>Federal Incentives</Subtitle>
        <Text>25D provides households an uncapped 30 percent tax credit of the installation cost for a battery storage.</Text>
      </RebatesIncentives>
      <BrandsWrapper>
        <OursBrands
          images={[
              '/images/brands/tesla-logo.png',
              '/images/brands/enphase-logo.png',
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
color:#fff;

font-family: Roboto;
font-size: 1.5rem;
font-style: normal;
line-height: 1.8rem;
margin-bottom: 1rem;
text-align: center;
`;
const BrandsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #FFF;
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
