import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationFooter = () => {
  return (
    <NavigationWrapper>
      <Title>Navigation</Title>
      <NavigationList>
        <Link to='/'><li>Home</li></Link>
        <Link to='/heat-pumps'><li>Heat Pumps</li></Link>
        <Link to='/ev-chargers'><li>Ev Chargers</li></Link>
        <Link to='energy-storage'><li>Energy Storage</li></Link>
        <Link to='contact-us'><li>Contact Us</li></Link>
        <Link to='/about-us'><li>About Us</li></Link>
      </NavigationList>
    </NavigationWrapper>
  )
}
const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0;
  @media (max-width: 768px) {
    align-items: center;
    padding: 1rem;
  }
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
    font-family: 'Roboto', sans-serif;
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

