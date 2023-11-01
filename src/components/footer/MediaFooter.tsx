import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";

export const MediaFooter = () => {
  return (
    <MediaWrapper>
      <Title>Follow Us</Title>
      <NavigationList>
        <li>Facebook <FaFacebook /> </li>
        <li>Instagram <FaInstagram /> </li>
        <li>Google Business <FaGoogle /></li>
      </NavigationList>
    </MediaWrapper>
  )
}
const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0;
`;
const Title = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;
const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    color: #B5B5B5;
    margin: 0;
    padding: 6px 0;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;
