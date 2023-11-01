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
  padding-left: 2rem;
  transition: all 0.3s ease-in-out;
  &: hover {
    cursor: pointer;
    opacity: 0.8;

  }
`;
const Logo = styled.img`
  width: 280px;
  height: 65px;
  margin-top: 15px;
`;
const TelText = styled.p`
  display: none;
  font-size: 1.7rem;
  font-weight: 500;
  color: #000;
  text-align: center;
  @media(max-width: 800px){
    display: block;
    margin: 0;
  }
`;