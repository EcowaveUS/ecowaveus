import styled from 'styled-components'
import { OursBrands } from '../components/brands/OursBrands'
import { Inovation } from '../components/pagesComponents/Inovation'
import { SwitchFuture } from '../components/pagesComponents/SwitchFuture'
import { motion } from 'framer-motion'
import { OurSolutions } from '../components/pagesComponents/OurSolutions'
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
              '/images/brands/mitsubishi-logo.png',
              '/images/brands/lg-logo.png',
              '/images/brands/fujitsu-logo.png',
              '/images/brands/daikin-logo.png',
              '/images/brands/tesla-logo.png',
              '/images/brands/fujitsu-logo.png',
              '/images/brands/daikin-logo.png',
            ]}
        />
        <InovationWrapper>
          <Inovation
            title= 'Riding the Wave of Eco-Innovation'
            content='At ecoWAVEus, we specialize in providing sustainable energy solutions, including Heat Pumps, EV chargers, Energy Storage and Solar, all designed to maximize energy efficiency and savings. We are passionate about leading the clean energy transition and empowering our clients with the tools and knowledge to create a cleaner, greener, and more cost-effective future for generations to come.'
            images= {[
              {
                img: '/images/innovation-02.png',
                title:'ev-charger'
              },
              {
                img: '/images/innovation-05.png',
                title:'heat-pumps'
              },
              {
                img: '/images/innovation-06.png',
                title:'energy-storage',
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
  padding-top: 100px;
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


