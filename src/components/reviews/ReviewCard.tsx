import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion'

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('reviews-page');
      if (element && window.scrollY + window.innerHeight >= element.offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <CardWrapper
      id="reviews-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, transition: { duration: 2, type:'linear' } }}
      exit={{ opacity: 0 }}
    >
      <StarsWrapper>
        {
          Array(5).fill('').map((_, index) => {
            if (index < score) {
              return <FaStar key={index} color='#FFD80A' size={18}  />
            }
            return <FaStar key={index} color='#8A8632' size={18} />
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

const CardWrapper = styled(motion.div)`
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
  background-color: #07222B;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
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


