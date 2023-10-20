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
        {Icon && <Icon />}
        {title}
      </StyledButton>
    </>
  );
};

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