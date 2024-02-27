import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {  useState } from 'react';

export const Navbar = () => {

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <StyledLinks>
      <Link to='/'>
        <li className={activeLink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>Home</li>
      </Link>
      <Separator/>
      <Link to='/heat-pumps'>
        <li className={activeLink === '/heat-pumps' ? 'active' : ''} onClick={() => handleLinkClick('/heat-pumps')}>Heat pumps</li>
      </Link>
      <Separator/>
      <Link to='/ev-chargers'>
        <li className={activeLink === '/ev-chargers' ? 'active' : ''} onClick={() => handleLinkClick('/ev-chargers')}>EV Chargers</li>
      </Link>
      <Separator/>
      <Link to='/energy-storage'>
        <li className={activeLink === '/energy-storage' ? 'active' : ''} onClick={() => handleLinkClick('/energy-storage')}>Energy Storage</li>
      </Link>
      <Separator/>
      <Link to='/about-us'>
        <li className={activeLink === '/about-us' ? 'active' : ''} onClick={() => handleLinkClick('/about-us')}>About Us</li>
      </Link>
      <Separator/>
      <Link to='/contact-us'>
        <li className={activeLink === '/contact-us' ? 'active' : ''} onClick={() => handleLinkClick('/contact-us')}>Contact Us</li>
      </Link>
    </StyledLinks>
    </>
  )
}

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  li {
    white-space: nowrap;
    list-style: none;
    font-size: 1rem;
    color: #fff;
    text-align: left;
    font-family: Inter;
    font-weight: 500;
    line-height: 135.023%;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease-in-out;
    &::before {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #FFFFFF;
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

const Separator = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.20);
  height: 19px;
`;

