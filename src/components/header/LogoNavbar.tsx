import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const LogoNavbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src="/images/logo-header.png" alt="logo" />
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  width: 25%;
  padding: 1rem 0 1rem 0;
  &: hover {
    cursor: pointer;
    opacity: 0.8;

  }
`;
const Logo = styled.img`x
  width: 127px;
  height: 30px;
`;