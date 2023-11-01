import styled from 'styled-components'

export const NavigationFooter = () => {
  return (
    <NavigationWrapper>
      <Title>Navigation</Title>
      <NavigationList>
        <li>Home</li>
        <li>Heat Pumps</li>
        <li>Ev Chargers</li>
        <li>Energy Storage</li>
        <li>Contact Us</li>
        <li>About Us</li>
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

