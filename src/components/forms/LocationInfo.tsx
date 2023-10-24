import styled from 'styled-components'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock} from "react-icons/fa";

export const LocationInfo = () => {
  return (
    <InfoWrapper>
      <FormTitle>Ecowave Us</FormTitle>
      <div>
        <InfoTitle> <FaMapMarkerAlt /> Adress</InfoTitle>
        <Text>12 Lovett street</Text>
        <Text>Beverly, MA 01915</Text>
      </div>
      <div>
        <InfoTitle> <FaPhoneAlt /> Phone</InfoTitle>
        <Text>(978) 500 - 4081</Text>
      </div>
      <div>
        <InfoTitle> <FaEnvelope /> Email</InfoTitle>
        <Text>info@ecowaveus.com</Text>
      </div>
      <div>
        <InfoTitle> <FaClock/> Hours of Operation</InfoTitle>
        <Text>Monday – Friday: 8:00 AM – 5:00 PM</Text>
        <Text>Saturday – Sunday: Closed</Text>
      </div>
    </InfoWrapper>
  )
}
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const FormTitle = styled.h3`
  font-size: 40px;
  font-weight: 400;
  color: grey;
  margin: 0;

`;
const InfoTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: grey;
`;
const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: grey;
  margin-left: 20px;
`;
