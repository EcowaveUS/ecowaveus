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
  height: auto;
  background-image: url("/images/fondoWave.png");
  background-size: cover;
  background-position: center center;
  position: sticky;
  top: 0;
  z-index: 100;
  @media(max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  `;

