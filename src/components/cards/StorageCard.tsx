import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string;
  content: string;
  image: string;
}

export const StorageCard: React.FC<Props> = ({
  title,
  content,
  image
}) => {
  return (
    <CardWrapper>
      <StyledIcon src={image} alt={title} />
      <Title>{title}</Title>
      <p>{content}</p>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 383px;
  height: 186px;
  gap: 1rem;
`;
const StyledIcon = styled.img`
  width: 64px;
  height: 50px;
  object-fit: cover;
`;
const Title = styled.h3`
  color: #1C1F35;

  font-family: Inter;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

