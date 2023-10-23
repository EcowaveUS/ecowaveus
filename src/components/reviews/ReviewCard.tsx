import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
  id: number
  score: number
  firstName: string
  lastName: string
  title: string
  description: string
  createdAt: string
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  score,
  firstName,
  lastName,
  title,
  description,
  createdAt
}: ReviewCardProps) => {
  return (
    <CardWrapper>
      <StarsWrapper>
        {
          Array(5).fill('').map((_, index) => {
            if (index < score) {
              return <FaStar key={index} color='#CEE820'  />
            }
            return <FaStar key={index} color='#BAD03F' />
          })
        }
      </StarsWrapper>
      <ReviewTitle>"{title}"</ReviewTitle>
      <DescriptionWrapper>
        <ReviewDescription>{description}</ReviewDescription>
      </DescriptionWrapper>
      <ReviewCustomer>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</ReviewCustomer>
      <ReviewDate>{createdAt}</ReviewDate>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 15px 0 15px 0;
  margin: 1rem;
  max-width: 280px;
  max-height: 400px;
  background-color: #1b5b8d;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.5);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
`
const StarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;
const ReviewTitle = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
`
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
  margin: 2rem 0;
  padding: 1rem 0;
`;
const ReviewDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
`
const ReviewCustomer = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;
const ReviewDate = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;


