import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import styled from 'styled-components'

export const MediaFooter = () => {
  return (
    <MediaWrapper>
      <Title>Follow Us</Title>
      <NavigationList>
        <Link to='https://www.facebook.com/profile.php?id=61556131161296' target="_blank">
          <li><FaFacebook /> Facebook</li>
        </Link>
        <Link to='https://www.instagram.com/ecowaveusa/' target="_blank">
          <li><FaInstagram /> Instagram</li>
        </Link>
        <Link to='https://www.google.com/maps/place/EcowaveUS/@42.5475613,-70.8816505,17z/data=!3m1!4b1!4m6!3m5!1s0xa1b4c068ba47d44d:0x5eb7465ffb257e3f!8m2!3d42.5475613!4d-70.8790702!16s%2Fg%2F11vs7t7rjj?entry=ttu' target="_blank">
          <li><SiGooglemybusiness /> Google Businnes</li>
        </Link>
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
