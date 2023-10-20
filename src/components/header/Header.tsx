import { LogoNavbar } from './LogoNavbar';
import { Navbar } from './Navbar';
import styled from 'styled-components';
import Fondo from '../../assets/fondoWave.png';

interface Props {
  fondo: string;
}

export const Header = () => {
  const fondo = Fondo;
  return (
    <Wrapper fondo={fondo}>
      <LogoNavbar />
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  with: 100vw;
  height: auto;
  background-image: ${Fondo};
  background-size: cover;
  background-position: center center;
  @media(max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `;

