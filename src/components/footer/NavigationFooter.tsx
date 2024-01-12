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
  gap: 18px;
  @media (max-width: 768px) {
    align-items: center;
    padding: 1rem;
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
`;

