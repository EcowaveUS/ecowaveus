import { Layout } from '../utils/Layout'
import { Link } from 'react-router-dom'
import { CustormerFirtsComponent } from '../components/homeComponents/CustormerFirtsComponent'
import styled from 'styled-components'

// 22 Broadway Street, Beverly, MA, 01915
// info@ecowaveus.com

export const HomePage = () => {
  return (
    <Layout>
    <StyledHome>
      <Container>
        <Title>SWITCH TO THE FUTURE</Title>
        <StyledImage src="/src/assets/images/fondo.png"/>
        <ServiceInfo>
          <Subtitle>Great Service. <span>Fair Prices.</span></Subtitle>
          <SubtitleInfo>Quality HVAC & Plumbing Services for Your Home or Business</SubtitleInfo>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores nulla excepturi hic voluptatibus qui repudiandae.</Text>
          <ButtonContainer>
            <Link to='/contact'><StyledButton>Schedule Service</StyledButton></Link>
            <Link to='/services'><StyledButton>View Our Services</StyledButton></Link>
          </ButtonContainer>
        </ServiceInfo>
      </Container>
      <StyledContent>
        <StyledLogo src="/src/assets/images/logo-ecowave.png"/>
        <ContentTitle>Riding the wave of innovation</ContentTitle>
        <Text>At ecoWAVEus, we specialize in providing sustainable energy solutions such as heat pumps, EV chargers, solar power systems, and energy storage, all designed to maximize energy efficiency and savings. Our experienced team is dedicated to delivering personalized, eco-friendly solutions for homes and businesses that not only reduce their environmental impact but also offer significant cost savings. We are passionate about leading the clean energy transition and empowering our clients with the tools and knowledge to create a cleaner, greener, and more cost-effective future for generations to come.</Text>
        <ContentWrapper>
          <Image src="/src/assets/images/dreamstime.jpg"/>
          <Image src="/src/assets/images/ev-chargers.jpg"/>
          <Image src="/src/assets/images/heat-pumps.jpg"/>
          <Image src="/src/assets/images/energy-storage.jpg"/>
        </ContentWrapper>
      </StyledContent>
      <ServiceContainer>
        <ContentTitle>The Best Solution For</ContentTitle>
        <ServicesButtonsContainer>
          <Link to='/heat-pumps'><ServiceButton>HEAT PUMPS</ServiceButton></Link>
          <Link to='/ev-chargers'><ServiceButton>EV CHARGERS</ServiceButton></Link>
          <Link to='/energy-storage'><ServiceButton>ENERGY STORAGE</ServiceButton></Link>
        </ServicesButtonsContainer>
      </ServiceContainer>
      <CustormerFirtsComponent />
    </StyledHome>
    </Layout>
  )
}
const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: grey;
  text-align: center;
`
const ServiceInfo = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 30%;
  left: 3%;
  align-items: center;
  width: 35vw;
  @media (max-width: 1024px) {
    position: relative;
    width: 80%;
    margin-top: 2rem;
  }
`
const Subtitle = styled.h2`
  width: 100%;
  margin: 0;
  text-align: left;
  font-size: 35px;
  font-weight: 500;
  color: #1b5b8d;
  span {
    color: #4e9d40;
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
`
const SubtitleInfo = styled.h3`
  width: 100%;
  margin: 1rem;
  font-size: 20px;
  font-weight: 300;
  color: grey;
  margin: 1rem;
  @media (max-width: 1024px) {
    text-align: center;
  }
`
const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: grey;

  @media (max-width: 1024px) {
    text-align: center;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  gap: 1rem;
  margin: 1rem;
  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: left;
  align-items: space-between;
  gap: 0.5rem;
  padding: 8px 16px;
  background-color: #1b5b8d;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: #4e9d40;
    color: #1b5b8d;
    border: 1px solid #1b5b8d;
  }
`;
const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  width: 70%;
`;
const ServicesButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  width: 80%;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`
const ServiceButton = styled.button`
  padding: 8px 16px;
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
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  width: 70%;
`;
const StyledLogo = styled.img`
  width: 280px;
  height: 80px;
`;
const ContentTitle = styled.h3`
  margin: 1rem;
  font-size: 35px;
  font-weight: 400;
  color: grey;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: #f2f2f2;
  gap: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2);
  margin: 2rem;
  padding: 0.5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Image = styled.img`
border-radius: 5px;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
