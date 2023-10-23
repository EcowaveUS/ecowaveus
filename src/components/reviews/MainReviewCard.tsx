import React from 'react'
import { FaStar } from "react-icons/fa";
import styled from 'styled-components'

interface MainReviewCardProps {
  title: string
  firstName: string
  lastName: string
}
export const MainReviewCard: React.FC<MainReviewCardProps> = ({
  title,
  firstName,
  lastName
}) => {
  return (
    <CardWrapper>
      <StarsWrapper>
        <FaStar color='#4e9d40' size={32} />
        <FaStar color='#4e9d40' size={32} />
        <FaStar color='#4e9d40' size={32} />
        <FaStar color='#4e9d40' size={32} />
        <FaStar color='#4e9d40' size={32} />
      </StarsWrapper>
      <ReviewTitle>{title}</ReviewTitle>
      <p>-{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</p>
      <StyledButtom>More Reviews</StyledButtom>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  width: 480px;
  height: 220px;
  background-color: #1b5b8d;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
`;

const StarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;
const ReviewTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
`;
const StyledButtom = styled.button`
  width: 50%;
  height: 40px;
  background-color: #4e9d40;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #4e9d40;
    opacity: 0.8;
    transition: opacity 0.5s ease-in-out;
  }
`;