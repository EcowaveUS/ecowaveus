import { CustormerFirst } from '../components/homeComponents/CustormerFirst'
import styled from 'styled-components'
import { OursBrands } from '../components/brands/OursBrands'
import { Inovation } from '../components/homeComponents/Inovation'
import { Services } from '../components/homeComponents/Services'
import { SwitchFuture } from '../components/homeComponents/SwitchFuture'
import { HomeReview } from '../components/reviews/HomeReview'
import { ContactForm } from '../components/forms/ContactForm'
import { LocationInfo } from '../components/forms/LocationInfo'


export const HomePage = () => {
  return (
      <StyledHome>
        <SwitchFuture
        />
        <Separator />
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
        <Separator />
        <Services
          title= 'The Best Solution for Your Home or Business'
        />
        <Separator />
        <HomeReview />
        <CustormerFirst
          title= 'A Customer-Prioritized Company'
          subtitle= 'Why We’re The First Choice'
          listContent={[
            {
              icon: '/images/logo-ecowave.png',
              content: 'Quality Technicians & Brands'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'Preventative Maintenance Plans'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'Local & Community Involved'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'We’re On Time for Appointments'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: '24 Hour Emergency Service'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'BBB A+ Rated + 5 Star Reviews'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'BBB A+ Rated + 5 Star Reviews'
            },
            {
              icon: '/images/logo-ecowave.png',
              content: 'BBB A+ Rated + 5 Star Reviews'
            },
          ]}
        />
        <WrapperComponents>
          <LocationInfo  />
          <ContactForm />
        </WrapperComponents>
        <OursBrands
          images={[
              '/images/Mitsubishi_Electric_logo.png',
              '/images/LG-Air-Conditioning-Logo.png',
              '/images/Fujitsu-Logo.png'
            ]}
        />
      </StyledHome>
  )
}
const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Separator = styled.div`
  width: 90%;
  height: 1px;
  background-color: grey;
  margin: 2rem 0;
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
`;


