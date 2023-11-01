import styled from 'styled-components'
import { ContactForm } from '../components/forms/ContactForm'
import { LocationInfo } from '../components/forms/LocationInfo'
import { MapContainer } from '../components/maps/MapContainer'
import { motion } from 'framer-motion'
import { ServiceTitle } from '../components/services/ServiceTitle'


export const ContactPage = () => {
  return (
      <StyledPage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ServiceTitle
          title='Contact Us'
        />
        <Separator />
        <WrapperComponents>
          <LocationInfo />
          <ContactForm />
        </WrapperComponents>
        <MapContainer />
      </StyledPage>
  )
}

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  `;
  const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url('/images/contact-img.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
`;
const PageTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #000;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
`;
const WrapperComponents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 90%;
  margin: 2rem auto;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
`;
const Separator = styled.div`
  width: 90%;
  height: 1px;
  background-color: grey;
  margin: 20px 0;
`;