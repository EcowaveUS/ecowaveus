import { CustormerFirst } from '../components/homeComponents/CustormerFirst'
import styled from 'styled-components'
import { OursBrands } from '../components/brands/OursBrands'
import { Inovation } from '../components/homeComponents/Inovation'
import { Services } from '../components/homeComponents/Services'
import { SwitchFuture } from '../components/homeComponents/SwitchFuture'
import { ContactForm } from '../components/forms/ContactForm'
import { LocationInfo } from '../components/forms/LocationInfo'
import { motion } from 'framer-motion'
import { AreaServicePage } from './AreaServicePage'
import reviews from '../reviews.json'
import { ReviewCard } from '../components/reviews/ReviewCard'


export const HomePage = () => {

  const firstReviews = reviews.slice(0, 4)

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
        <StyledReviews>
          <ReviewstTitle>Look for ours reviews</ReviewstTitle>
          <ReviewsWrapper>
            {
              firstReviews.map(review => (
                <ReviewCard
                  key={review.id}
                  id={review.id}
                  score={review.score}
                  firstName={review.firstName}
                  lastName={review.lastName}
                  title={review.title}
                  description={review.description}
                  createdAt={review.createdAt}
                />
              ))
            }
          </ReviewsWrapper>
        </StyledReviews>
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
  width: 100%;
  margin: 2rem auto;
  padding:  2rem;
  background-color: #f5f5f5;
  box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.75);
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const StyledReviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:auto;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`;
const ReviewsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ReviewstTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: 2px;
  color: #4F4F4F;
  margin-top: 1rem;
`


