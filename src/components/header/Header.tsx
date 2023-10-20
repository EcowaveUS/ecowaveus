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
  with: 100vw;
  height: auto;
  background-image: url("/images/fondoWave.png");
  background-size: cover;
  background-position: center center;
  @media(max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `;

