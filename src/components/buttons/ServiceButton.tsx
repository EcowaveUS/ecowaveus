import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface Props {
  title?: string,
  route?: string,
  onPress?: () => void,
}

export const ServiceButton: React.FC<Props> = ({
  title,
  route,
  onPress,
}) => {
  return (
    <Link to={route ? route : '/'}>
      <StyledButton onClick={onPress}>
        <StyledLogo src='/images/logo-img.png' alt='heat-pumps' />
        {title}
      </StyledButton>
    </Link>
  )
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding: 8px 16px;
  background: none;
  border: 1px solid #1b5b8d;
  border-radius: 5px;
  width: 250px;
  color: #1b5b8d;
  cursor: pointer;
  &:hover {
    background-color: #1b5b8d;
    color: #4e9d40;
    transition: 1s;
  }
`;
const StyledLogo = styled.img`
 width: 36px;
 height: 14px;
 `;