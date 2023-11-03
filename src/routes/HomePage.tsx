import { CustormerFirst } from '../components/homeComponents/CustormerFirst'
import styled from 'styled-components'
import { OursBrands } from '../components/brands/OursBrands'
import { Inovation } from '../components/homeComponents/Inovation'
import { Services } from '../components/homeComponents/Services'
import { SwitchFuture } from '../components/homeComponents/SwitchFuture'
import { HomeReview } from '../components/reviews/HomeReview'
import { ContactForm } from '../components/forms/ContactForm'
import { LocationInfo } from '../components/forms/LocationInfo'
import { MapContainer } from '../components/maps/MapContainer'
import { motion } from 'framer-motion'
import { AreaServicePage } from './AreaServicePage'


export const HomePage = () => {
  const markersPoint = [
    {
      name: "Office",
      location: {
        lat: 42.55009044837213,
        lng: -70.88123363803287
      },
    },
  ]

  return (
      <StyledHome
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <SwitchFuture
        />
        <Inovation
          title= 'Riding the wave of innovation'
          content='At ecoWAVEus, we specialize in providing sustainable energy solutions such as heat pumps, EV chargers, solar power systems, and energy storage, all designed to maximize energy efficiency and savings. Our experienced team is dedicated to delivering personalized, eco-friendly solutions for homes and businesses that not only reduce their environmental impact but also offer significant cost savings. We are passionate about leading the clean energy transition and empowering our clients with the tools and knowledge to create a cleaner, greener, and more cost-effective future for generations to come.'
          images= {[
            {
              img:'/images/dreamstime.jpg',
              title: 'Breakfast',
              rows: 2,
              cols: 2,
            },
            {
              img: '/images/ev-chargers.jpg',
              title:'ev-charger'
            },
            {
              img: '/images/heat-pumps.jpg',
              title:'heat-pumps'
            },
            {
              img: '/images/energy-storage.jpg',
              title:'energy-storage',
              cols: 2,
              rows: 1,
            },
          ]}
          logo='/images/logo-ecowave.png'
        />
        <Services
          title= 'Here to help you with:'
        />
        <HomeReview />
        <CustormerFirst
          title= 'Our Priorities'
          listContent={[
            {
              icon: '/images/logo-ecowave.png',
              content: 'Customer satisfaction'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'Fair prices'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'Execellent craftsmanship'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'Qualiti of equipment and materials'
            },
          ]}
        />
        <WrapperComponents>
          <LocationInfo  />
          <ContactForm />
        </WrapperComponents>
        <AreaServicePage />
        <OursBrands
          images={[
              '/images/Mitsubishi_Electric_logo.png',
              '/images/LG-Air-Conditioning-Logo.png',
              '/images/Fujitsu-Logo.png',
              '/images/daikin-logo.png',
              '/images/tesla-logo.jpg',
              '/images/emphase-logo.png',
              'images/charge-point-logo.png',
              '/images/juicebox-logo.png'
            ]}
        />
      </StyledHome>
  )
}
const StyledHome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WrapperComponents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 90%;
  margin: 2rem auto;
  padding:  2rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
`;


