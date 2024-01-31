import styled from 'styled-components'
import { ContactForm } from '../components/forms/ContactForm'
import { LocationInfo } from '../components/forms/LocationInfo'
import { MapContainer } from '../components/maps/MapContainer'
import { motion } from 'framer-motion'


export const ContactPage = () => {
  const markersPoint = [
    {
      name: "Office",
      location: {
        lat: 42.55009044837213,
        lng: -70.88123363803287
      },
    },
  ]
  return (
      <StyledPage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <WrapperComponents>
          <LocationInfo />
          <ContactForm />
        </WrapperComponents>
        <MapContainer
          markersPoints={markersPoint}
        />
      </StyledPage>
  )
}

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 100vh;

  `;
const WrapperComponents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin-top: 15rem;
  margin-bottom: 5rem;
`;
