import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const LogoNavbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src="/src/assets/logo-ecowave.png" alt="logo" />
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
`;
const Logo = styled.img`
  width: 280px;
  height: 65px;
`;