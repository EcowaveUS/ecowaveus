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
  &: hover {
    cursor: pointer;
    opacity: 0.8;

  }
`;
const Logo = styled.img`x
  width: 413px;
  height: 98px;
  @media (max-width: 1024px) {
    width: 300px;
    height: 70px;
  }
`;