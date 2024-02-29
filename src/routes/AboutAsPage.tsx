import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ProjectCards } from '../components/pagesComponents/ProjectCards';

export const AboutAsPage = () => {
  return (
      <Wrapper
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <ImageWrapper>
            <Logo src="/images/logo-header.png" alt="solar panels" />
          </ImageWrapper>
        </Container>
        <TransportWrapper>
          <TransportTitle>RIDING THE WAVE OF ECO-INNOVATION</TransportTitle>
          <Text>
            At EcowaveUS, we specialize in providing sustainable energy solutions such as heat pumps, EV chargers, solar power systems, and energy storage, all designed to maximize energy efficiency and savings. Our experienced team is dedicated to delivering personalized, eco-friendly solutions for homes and businesses that not only reduce their environmental impact but also offer significant cost savings. We are passionate about leading the clean energy transition and empowering our clients with the tools and knowledge to create a cleaner, greener, and more cost-effective future for generations to come.
          </Text>
        </TransportWrapper>
        <ProjectCards />
      </Wrapper>
  )
}
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 60px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url('/images/solar-panels.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin-bottom: 5rem;
  background-color: #E4ECF6;
`;
const ImageWrapper = styled.div`
  align-self: center;
  width: 70%;
  height: auto;
`;
const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const TransportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  gap: 1.5rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    width: 80%;
  }

`
const TransportTitle = styled.h1`
  color: #343434;
  text-align: center;
  font-family: Roboto;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%; /* 72.731px */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Text = styled.p`
  color: rgba(0, 0, 0, 0.75);
  font-family: Roboto;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%; /* 48.487px */
  word-spacing: 0.1rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;



