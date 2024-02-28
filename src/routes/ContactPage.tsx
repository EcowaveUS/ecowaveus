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
  padding-top: 7rem;
  background-color: #F1F5F9;
  `;
const BackgroundComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 904px; /* 100% of the viewport height */
    background-image: url('/images/contact-us-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: -16rem;
    @media (max-width: 1024px) {
      background-position: 50% 50%;
      background-size: cover;
      margin-bottom: -12rem;
    }
  `;
const WrapperComponents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem;
  z-index: 1;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
  }
`;
const Title = styled.h1`
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: left;
  width: 75%;
  margin: 18rem 0 2rem 0;
  @media (max-width: 768px) {
    width: 90%;
  }
`;