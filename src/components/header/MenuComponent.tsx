import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import { ContactForm } from '../forms/ContactForm';


interface MenuComponentProps {
  toogleMenu: () => void,
  menuModal?: boolean
}

export const MenuComponent: React.FC<MenuComponentProps> = ({
  toogleMenu,
}) => {

  return (
    <>
      <MenuWrapper>
        <CloseButton onClick={toogleMenu}>
          <AiOutlineClose />
        </CloseButton>
        <SideMenu>
          <MenuTitle>Menu</MenuTitle>
          <StyledLinks>
            <li>HOME</li>
            <li>HEAT PUMPS</li>
            <li>EV CHARGERS</li>
            <li>ENERGY STORAGE</li>
            <li>PROJECTS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </StyledLinks>
        </SideMenu>
        <ContactForm />
      </MenuWrapper>
    </>
  )
}
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 99;
  @media(max-width: 1024px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  background-color: #b4cdea;
  padding-top: 3rem;
  @media(max-width: 1024px){
    width: 100%;
  }
  `;
  const MenuTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #000;
  width: 100%;
  margin-left: 3rem;
`;
  const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 3rem;
  width: 100%;
  li {
    list-style: none;
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
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
