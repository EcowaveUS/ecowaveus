import { ReviewsComponents } from '../components/reviews/ReviewsComponents'
import { Inovation } from '../components/homeComponents/Inovation'
import styled from 'styled-components'

export const AboutAsPage = () => {
  return (
      <Wrapper>
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
        <ContentTitle>Reviews</ContentTitle>
        <ReviewsComponents />
      </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContentTitle = styled.h3`
  margin: 1rem;
  font-size: 35px;
  font-weight: 400;
  color: grey;
`
