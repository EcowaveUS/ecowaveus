import styled from 'styled-components'
import { motion } from 'framer-motion'
import { OursBrands } from '../components/brands/OursBrands';
import { ProjectCards } from '../components/pagesComponents/ProjectCards';

export const AboutAsPage = () => {
  return (
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <HeaderContent>
            <AuxiliarText>About us</AuxiliarText>
            <Title>Discover Our Story:</Title>
          </HeaderContent>
        </Container>
        <TransportWrapper>
          <ImageWrapper>
            <StyledImage src="/images/grey-photo.png" alt="Our Story" />
          </ImageWrapper>
            <TransportTitle>Sea Transport Services</TransportTitle>
            <Text>
              At ecoWAVEus, we specialize in providing sustainable energy solutions such as heat pumps, EV chargers, solar power systems, and energy storage, all designed to maximize energy efficiency and savings. Our experienced team is dedicated to delivering personalized, eco-friendly solutions for homes and businesses that not only reduce their environmental impact but also offer significant cost savings. We are passionate about leading the clean energy transition and empowering our clients with the tools and knowledge to create a cleaner, greener, and more cost-effective future for generations to come.
            </Text>
        </TransportWrapper>
        <ProjectCards />
        <BrandsWrapper>
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
        </BrandsWrapper>
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
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-image: url('/images/about-us.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 536px;
  flex-shrink: 0;
`;

const HeaderContent = styled.div`
  margin-top: 8rem;
  margin-left: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
  gap: 1rem;
`;
const AuxiliarText = styled.p`
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-left: 4px solid #68BE54 ;
  padding: 3px 9px 3px 8px;
`;

const Title = styled.h1`
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;
const BrandsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #F5F5F5;
`;

const TransportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 75%;
  margin: 5rem 0;
  gap: 0.5rem;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #F5F5F5;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
const TransportTitle = styled.h1`
  color: #1C1F35;
  text-align: left;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Text = styled.p`
  color: #666C89;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%; /* 24.244px */
`;



