import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";
import { MenuComponent } from './MenuComponent';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [ menuModal, setMenuModal ] = useState(false)
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

  const toogleMenu = () => {
    setMenuModal(!menuModal)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {menuModal ?
      <MenuComponent
      toogleMenu={toogleMenu}
      menuModal={menuModal}
      /> :
    <Wrapper>
      <TopNavbar>
        <NavbarInfo>
          <Infotext>Hour hours 8:00am top 5:00pm Mon to Sat</Infotext>
          <TelText>(978)-500-4081</TelText>
        </NavbarInfo>
        <StyledLinks>
          <Link to='/'><li>HOME</li></Link>
          <Link to='/heat-pumps'><li>HEAT PUMPS</li></Link>
          <Link to='/ev-chargers'><li>EV CHARGERS</li></Link>
          <Link to='/energy-storage'><li>ENERGY STORAGE</li></Link>
        </StyledLinks>
      </TopNavbar>
      {
        windowWidth > 800 ?
          (<ButtonContainer>
            <StyledButton>Free stimate</StyledButton>
            <StyledButton
              onClick={toogleMenu}
            >
              <AiOutlineMenu /> Menu
            </StyledButton>
          </ButtonContainer>) :
          (<HambuguerMenu>
            <AiOutlineMenu
              size={40}
              onClick={toogleMenu}
            />
          </HambuguerMenu>)
      }
    </Wrapper>
    }
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  @media(max-width: 1024px){
    justify-content: flex-start;
  }
`;
const TopNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
const NavbarInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 2rem;
  @media(max-width: 1280px){
    justify-content: flex-end;
  }
  @media(max-width: 800px){
    justify-content: center;
    height: 3rem;
  }
`;
const Infotext = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
  padding-left: 1rem;
  @media(max-width: 1280px){
    display: none;
  }
`;
const TelText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #4e9d40;
  padding-left: 1.5rem;
  @media(max-width: 1280px){
    margin-right: 1.5rem;
  }
`;
const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  @media(max-width: 1024px){
    display: none;
  }
  li {
    list-style: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: #1b5b8d;
    padding: 0 1rem 1rem 0;

    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #1b5b8d;
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      color: #4e9d40;
      &::before {
        width: 85%;
      }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media(max-width: 800px){
    display: none;
  }
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: space-between;
  gap: 0.5rem;
  background-color: #1b5b8d;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  width: 175px;
  margin-right: 1rem;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: #4e9d40;
    color: #1b5b8d;
    border: 1px solid #1b5b8d;
  }
`;

const HambuguerMenu = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #1b5b8d;
  border-radius: 55%;
  padding: 0.5rem;
  cursor: pointer;
  align-items: center;
`;

