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
              <Infotext>Our hours 8:00am to 5:00pm Mon to Fri<span>(978)-500-4081</span></Infotext>
            </NavbarInfo>
                {
                  windowWidth > 800 ?
                    (
                      <ButtonContainer>
                        <Link to='/contact-us'>
                          <StandardButton
                            title='FREE estimate'
                          />
                        </Link>
                        <StandardButton
                          title='MENU'
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
        </TopNavbar>
        <StyledLinks>
          <Link to='/'><li>HOME</li></Link>
          <Link to='/heat-pumps'><li>HEAT PUMPS</li></Link>
          <Link to='/ev-chargers'><li>EV CHARGERS</li></Link>
          <Link to='/energy-storage'><li>ENERGY STORAGE</li></Link>
          <Link to='/about-us'>
            <li>ABOUT US</li>
          </Link>
          <Link to='/contact-us'><li>CONTACT US</li></Link>
        </StyledLinks>

      </Wrapper>
      <SideBar showSidebar={showSidebar} sidebar={sidebar} />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 75%;
`;
const TopNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const NavbarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const Infotext = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  color: 595954;
  margin-left: 2rem;
  @media(max-width: 1280px){
    display: none;
  }
  span {
    margin-left: 2rem;
    color: #000;
    font-weight: 500;
  }
`;
// const TelText = styled.p`
//   font-family: 'Roboto', sans-serif;
//   font-size: 1.5rem;
//   font-weight: 500;
//   color: 595954;
//   padding-left: 1.5rem;
//   @media(max-width: 1280px){
//     margin-right: 1.5rem;
//   }
//   @media(max-width: 800px){
//     display: none;
//   }
// `;
const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media(max-width: 1024px){
    display: none;
  }
  li {
    font-family: 'Roboto', sans-serif;
    list-style: none;
    font-size: 0.9rem;
    font-weight: 400;
    color: #1b5b8d;
    padding: 0 0.5rem 1rem 0;
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
    &.active::before {
      width: 100%;
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
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.5rem;
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

