import React from 'react'
import { FaStar } from "react-icons/fa";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
      <Link to='/about-us'><StyledButtom>More Reviews</StyledButtom></Link>
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
  width: 380px;
  height: auto;
  background-color: #1b5b8d;
  border-radius: 8px 0 0 8px;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
  @media (max-width: 1240px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    border-radius: 8px;
  }
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
`;
const StyledButtom = styled.button`
  height: 40px;
  padding: 0 2rem;
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