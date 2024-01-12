import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
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
      <TopNavbar>
        {
          windowWidth < 800 &&
            <HambuguerMenu>
              <AiOutlineMenu
                size={40}
                onClick={showSidebar}
              />
            </HambuguerMenu>
        }
      </TopNavbar>
      <StyledLinks>
        <Link to='/'><li>Home</li></Link>
        <Link to='/heat-pumps'><li>Heat pumps</li></Link>
        <Link to='/ev-chargers'><li>EV chargers</li></Link>
        <Link to='/energy-storage'><li>Energy Storage</li></Link>
        <Link to='/about-us'><li>About us</li></Link>
        <Link to='/contact-us'><li>Contact us</li></Link>
      </StyledLinks>
      <SideBar showSidebar={showSidebar} sidebar={sidebar} />
    </>
  )
}

const TopNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  `;
  const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;
  @media(max-width: 824px){
    display: none;
  }
  li {
    list-style: none;
    font-size: 15px;
    color: #242424;
    text-align: center;
    font-family: Inter;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
    width: 120px;
    position: relative;
    transition: color 0.3s ease-in-out;
    &::before {
      content: "";
      position: absolute;
      bottom: -0.5rem;
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
      &::before {
        width: 100%;
      }
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

