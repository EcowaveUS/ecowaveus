import styled from 'styled-components'
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const MediaFooter = () => {
  return (
    <MediaWrapper>
      <Title>Follow Us</Title>
      <NavigationList>
        <li><FaFacebook /> Facebook</li>
        <li><FaInstagram /> Instagram</li>
      </NavigationList>
    </MediaWrapper>
  )
}
const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const Title = styled.h5`
  color: #343434;

  font-family: Be Vietnam Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 12px;
  li {
    color: #343434;
    font-family: Be Vietnam Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;
