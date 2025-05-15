import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { useLocation } from "react-router";
import styled from "styled-components";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Manejar el scroll de la página
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Manejar el click del botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Agregar un event listener cuando el componente se monta
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
          <FaAngleUp style={{ width: 24, height: 24 }} />
        </ScrollToTopButton>
      )}
    </>
  );
};

const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 6rem;
  right: 1rem;
  padding: 15px;
  background-color: #003b76;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  z-index: 1000;
`;
