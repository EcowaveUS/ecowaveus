import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

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
        <TextButton>
          <Link to='/contact-us'>{title}</Link>
        </TextButton>
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
const TextButton = styled.p`
color: var(--fore-allways---white, #FFF);
text-align: center;
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 50% */
`