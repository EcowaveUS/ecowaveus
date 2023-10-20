import styled from 'styled-components'

export const NavigationFooter = () => {
  return (
    <NavigationWrapper>
      <Title>NAVIGATION</Title>
      <NavigationList>
        <li>HOME</li>
        <li>HEAT PUMS</li>
        <li>EV CHARGERS</li>
        <li>ENERGY STORAGE</li>
        <li>CONTACT US</li>
      </NavigationList>
    </NavigationWrapper>
  )
}
const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
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
    font-size: 16px;
    font-weight: 400;
    color: grey;
    margin: 0;
    padding: 0.5rem 0;
    &:hover {
      color: #4e9d40;
      cursor: pointer;
    }
  }
`;

