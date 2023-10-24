import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const LogoNavbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src="/images/logo-ecowave.png" alt="logo" />
        <TelText>(978)-500-4081</TelText>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;
const Logo = styled.img`
  width: 280px;
  height: 65px;
  margin-top: 15px;
`;
const TelText = styled.p`
  display: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: #4e9d40;
  text-align: center;
  @media(max-width: 800px){
    display: block;
    margin: 0;
  }
`;