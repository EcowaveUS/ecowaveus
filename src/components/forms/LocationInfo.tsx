import styled from 'styled-components'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock} from "react-icons/fa";

export const LocationInfo = () => {
  return (
    <StyledInfo>
      <FormTitle>EcoWaveus Us</FormTitle>
      <InfoContainer>
        <InfoWrapper>
          <InfoTitle> <FaMapMarkerAlt color='#298495' /> Adress</InfoTitle>
          <Text>12 Broadway street</Text>
          <Text>Beverly, MA 01915</Text>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle> <FaPhoneAlt color='#298495' /> Phone</InfoTitle>
          <Text>(978) 500 - 4081</Text>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle> <FaEnvelope color='#298495' /> Email</InfoTitle>
          <Text>info@ecowaveus.com</Text>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle> <FaClock color='#298495'/> Hours of Operation</InfoTitle>
          <Text>Monday – Friday: 8:00 AM – 5:00 PM</Text>
          <Text>Saturday – Sunday: Closed</Text>
        </InfoWrapper>
      </InfoContainer>
    </StyledInfo>
  )
}
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
`;
const FormTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-style: oblique;
  font-size: 2rem;
  font-weight: 500;
  color: grey;
  margin: 0;
`;
const InfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
gap: 1.5rem;
margin-bottom: 2rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    scale: 1.1;
  }
`;
const InfoTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #2133AB;
`;
const Text = styled.p`
font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: grey;
  margin-left: 20px;
`;
