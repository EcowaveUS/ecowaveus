import { LogoNavbar } from './LogoNavbar';
import { Navbar } from './Navbar';
import styled from 'styled-components';

export const Header = () => {

  return (
    <Wrapper>
      <LogoNavbar />
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  width: 100%;
  background-image: url("/images/fondo-prueba.png");
  background-size: cover;
  background-position: center center;
  background-color: #fff;
  z-index: 99;
  margin: 0 auto;
  @media(max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  `;

