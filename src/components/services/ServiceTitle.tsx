import React from 'react'
import styled from 'styled-components'

interface Props {
  title?: string,
}

export const ServiceTitle: React.FC<Props> = ({
  title
}) => {
  return (
    <Title>{title}</Title>
  )
}
const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #000;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
`;
