import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";

export const MediaFooter = () => {
  return (
    <MediaWrapper>
      <AppointmentButton>Request Appointment</AppointmentButton>
      <Title>FOLLOW US</Title>
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
  align-items: left;
  padding: 2rem 0;
`;
const AppointmentButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #4e9d40;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  &:hover {
    color: #1b5b8d;
    cursor: pointer;
  }
`;
const Title = styled.h5`
  font-size: 20px;
  font-weight: 500;
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
    font-size: 16px;
    font-weight: 300;
    color: grey;
    margin: 0;
    padding: 0.5rem 0;
    &:hover {
      color: #4e9d40;
      cursor: pointer;
    }
  }
`;
