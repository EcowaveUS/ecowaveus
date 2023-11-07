import React from 'react'
import styled from 'styled-components'

interface Props {
  title?: string,
}

export const ServiceTitle: React.FC<Props> = ({
  title
}) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  )
}
const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-size: cover;
background-position: center;
width: 100%;
padding: 1rem;
background-color: #07222B;
box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.5);
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #A1A1A1;
  letter-spacing: 5px;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;
