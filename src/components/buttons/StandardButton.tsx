import styled from "styled-components";
import React from "react";

interface ButtonProps {
  title: string;
  Icon?: React.ElementType;
  onClick?: () => void;
}

export const StandardButton: React.FC<ButtonProps> = ({
  title,
  Icon,
  onClick
}) => {
  return (
    <>
      <StyledButton
        onClick={onClick}
      >
        {title}
        {Icon && <Icon />}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: space-between;
  gap: 0.5rem;
  background-color: #00768D;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
  width: 175px;
  margin-right: 1rem;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    color: #1b5b8d;
    cursor: pointer;
  }
`;