import { Inovation } from '../components/homeComponents/Inovation'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ServiceTitle } from '../components/services/ServiceTitle'
import { ServiceButton } from '../components/buttons/ServiceButton'
import { Route, Routes, useLocation } from 'react-router'
import { ReviewsPage } from './ReviewsPage'
import { ProjectsPage } from './ProjectsPage'
import { AreaServicePage } from './AreaServicePage'
import { AnimatePresence } from 'framer-motion'


export const AboutAsPage = () => {
  const location = useLocation()

  const buttonsContent = [
    {
      title: 'Reviews',
      route: '/about-us/reviews',
    },
    {
      title: 'Projects',
      route: '/about-us/projects',
    },
    {
      title: 'Area Services',
      route: '/about-us/area-services',
    },
  ]
  return (
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeaderWrapper>
          <ServiceTitle
            title='About Us'
          />
          <ButtonWrapper>
            {
              buttonsContent.map((item, index) => (
                <ServiceButton
                  key={index}
                  title={item.title}
                  route={item.route}
                />
              ))
            }
          </ButtonWrapper>
        </HeaderWrapper>
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
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='reviews' element={<ReviewsPage />} />
            <Route path='projects' element={<ProjectsPage />} />
            <Route path='area-services' element={<AreaServicePage />} />
          </Routes>
        </AnimatePresence>
      </Wrapper>
  )
}
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9;
`;
const ButtonWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 1rem;
width: 100%;
background-color: #fff;
border-bottom: 1px solid #000;
box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.5);
@media (max-width: 800px) {
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}
`

