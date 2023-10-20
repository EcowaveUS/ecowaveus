import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const LogoNavbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src="/images/logo-ecowave.png" alt="logo" />
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 0 0 0 20px;
`;
const Logo = styled.img`
  width: 280px;
  height: 65px;
`;