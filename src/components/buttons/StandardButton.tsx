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
  background-color: #FFF;
  border-radius: 6px;
  color: #033E78;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  padding: 17px 24px;
`;