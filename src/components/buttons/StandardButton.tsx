import styled from "styled-components";
import React from "react";

interface ButtonProps {
  title: string;
  Icon?: React.ElementType;
  onClick?: () => void;
}

export const StandardButton: React.FC<ButtonProps> = ({
  title,
  onClick
}) => {
  return (
    <>
      <StyledButton
        onClick={onClick}
      >
        {title}
      </StyledButton>
    </>
  );
};


const StyledButton = styled.button`
  background-color: var(--fore-allways---white, trasparent);
  display: flex;
  height: var(--padding, 48px);

  padding: 17px 24px 15px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: var(--medium, 6px);
  border: 2px solid var(--fore-allways---white, #FFF);
  color: var(--fore-allways---white, #FFF);
  cursor: pointer;
`;