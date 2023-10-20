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
  font-weight: 300;
  color: grey;
`;
