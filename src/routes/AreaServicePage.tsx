import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MapContainer } from '../components/maps/MapContainer';

export const AreaServicePage = () => {
  return (
    <StyledPage
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageTitle>Area Services</PageTitle>
    <MapContainer />
  </StyledPage>
  )
}

const StyledPage = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`;
const PageTitle = styled.h1`
font-size: 50px;
font-weight: 300;
color: grey;
`;
