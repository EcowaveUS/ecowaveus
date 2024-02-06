import styled from 'styled-components'
import { ContactForm } from '../components/forms/ContactForm'
import { LocationInfo } from '../components/forms/LocationInfo'
import { motion } from 'framer-motion'


export const ContactPage = () => {
  return (
      <StyledPage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BackgroundComponent>
          <Title>Contact Us</Title>
        </BackgroundComponent>
        <WrapperComponents>
          <LocationInfo />
          <ContactForm />
        </WrapperComponents>
      </StyledPage>
  )
}

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  background-color: #F1F5F9;
  `;
const BackgroundComponent = styled.div`
    position: relative;
    width: 100%;
    min-height: 904px; /* 100% of the viewport height */
    background-image: url('/images/energy-solar-station.png');
    background-repeat: no-repeat;
    background-size: cover;
  `;
const WrapperComponents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  margin-bottom: 5rem;
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem;
  margin-top: -40rem;
  z-index: 1;
`;
const Title = styled.h1`
  position: absolute;
  top: 18%;
  left: 12%;
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;
`;