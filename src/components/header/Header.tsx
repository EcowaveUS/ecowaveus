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
  height: 100px;
  width: 100%;
  background-image: url("/images/fondo-prueba.png");
  background-size: cover;
  background-position: center center;
  background-color: #fff;
  z-index: 99;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.8);
  @media(max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  `;

