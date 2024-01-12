import styled from 'styled-components'
import { OursBrands } from '../components/brands/OursBrands'
import { Inovation } from '../components/homeComponents/Inovation'
import { SwitchFuture } from '../components/homeComponents/SwitchFuture'
import { motion } from 'framer-motion'
import { OurSolutions } from '../components/homeComponents/OurSolutions'
import { ReviewsComponent } from '../components/reviews/ReviewsComponent'
import { ContactComponent } from '../components/forms/ContactComponent'
import { AreaServiceComponent } from '../components/AreaServices/AreaServiceComponent'


export const HomePage = () => {

  return (
      <StyledHome
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <SwitchFuture />
        <OursBrands
          images={[
              '/images/brands/img01.png',
              '/images/brands/img02.png',
              '/images/brands/img03.png',
              '/images/brands/img04.png',
              '/images/brands/img05.png',
              '/images/brands/img04.png',
              '/images/brands/img02.png',
            ]}
        />
        <InovationWrapper>
          <Inovation
            title= 'Riding the wave of innovation'
            content='At ecoWAVEus, we specialize in providing sustainable energy solutions such as heat pumps, EV chargers, solar power systems, and energy storage, all designed to maximize energy efficiency and savings. Our experienced team is dedicated to delivering personalized, eco-friendly solutions for homes and businesses that not only reduce their environmental impact but also offer significant cost savings. We are passionate about leading the clean energy transition and empowering our clients with the tools and knowledge to create a cleaner, greener, and more cost-effective future for generations to come.'
            images= {[
              {
                img: '/images/image 4.png',
                title:'ev-charger'
              },
              {
                img: '/images/image 5.png',
                title:'heat-pumps'
              },
              {
                img: '/images/image 6.png',
                title:'energy-storage',
              },
              {
                img:'/images/image 8.png',
                title: 'Breakfast',
              },
            ]}
            logo='/images/logo-ecowave.png'
          />
        </InovationWrapper>
        <SolutionsContainer>
          <OurSolutions />
        </SolutionsContainer>
        <ReviewsComponent />
        <ContactComponent />
        <AreaServiceComponent />
      </StyledHome>
  )
}
const StyledHome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SolutionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#F1F5F9;
`
const InovationWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color:#F1F5F9;
`


