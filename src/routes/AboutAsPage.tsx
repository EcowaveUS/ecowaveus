import { Inovation } from '../components/homeComponents/Inovation'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'

export const AboutAsPage = () => {
  return (
      <Wrapper>
        <ButtonWrapper>
          <Link to='/about-us/reviews'>
            <StyledButton>Reviews</StyledButton>
          </Link>
          <Link to='/about-us/projects'>
            <StyledButton>Projects</StyledButton>
          </Link>
          <Link to='/about-us/projects'>
            <StyledButton>Area Services</StyledButton>
          </Link>
        </ButtonWrapper>
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
        <ChildrenContainer>
          <Outlet />
        </ChildrenContainer>
      </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const StyledButton = styled.button`
  padding: 8px 8px;
  background: none;
  border: 2px solid #1b5b8d;
  border-radius: 5px;
  width: 200px;
  color: #1b5b8d;
  cursor: pointer;
  &:hover {
    background-color: #1b5b8d;
    color: #4e9d40;
  }
`;
