import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { StandardButton } from '../buttons/StandardButton';
import { SideBar } from './SideBar';

export const Navbar = () => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  const [ sidebar, setsidebar ] = useState(false);

  const showSidebar = () => setsidebar(!sidebar);

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
            <Link to='/about-us'>
              <li>
                ABOUT US
              </li>
            </Link>
            <Link to='/contact-us'><li>CONTACT US</li></Link>
          </StyledLinks>
        </TopNavbar>
        {
          windowWidth > 800 ?
            (
              <ButtonContainer>
                <StandardButton
                  title='Free stimate'
                />
                <StandardButton
                  title='Menu'
                  Icon={AiOutlineMenu}
                  onClick={showSidebar}
                />
            </ButtonContainer>
            )
            :
            (<HambuguerMenu>
              <AiOutlineMenu
                size={40}
                onClick={showSidebar}
              />
            </HambuguerMenu>
          )
        }
      </Wrapper>
      <SideBar showSidebar={showSidebar} sidebar={sidebar} />
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
  justify-content: space-around;
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
  font-weight: 500;
  color: #000;
  padding-left: 1.5rem;
  @media(max-width: 1280px){
    margin-right: 1.5rem;
  }
  @media(max-width: 800px){
    display: none;
  }
`;
const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin-left: 4.5rem;
  @media(max-width: 1024px){
    display: none;
  }
  li {
    list-style: none;
    font-size: 0.9rem;
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

