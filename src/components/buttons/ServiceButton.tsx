import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface Props {
  title?: string,
  route: string,
}

export const ServiceButton: React.FC<Props> = ({
  title,
  route,
}) => {
  return (
    <Link to={route ? route : '/'}>
      <StyledButton>{title}</StyledButton>
    </Link>
  )
}

const StyledButton = styled.button`
  padding: 8px 16px;
  background: none;
  border: 2px solid #1b5b8d;
  border-radius: 5px;
  width: 200px;
  color: #1b5b8d;
  cursor: pointer;
  &:hover {
    background-color: #1b5b8d;
    color: #4e9d40;
  }
`;