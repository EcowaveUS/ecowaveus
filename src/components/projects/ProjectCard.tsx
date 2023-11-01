import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

interface ProjectProps {
  id: number
  category?: string
  image?: string[]
  name?: string
  description?: string
  date?: string
  score: number
}

export const ProjectCard: React.FC<ProjectProps> = ({
    id,
    category,
    image,
    name,
    description,
    date,
    score
  }) => {
  return (
    <CardWrapper>
        <StarsWrapper>
        {
            Array(5).fill('').map((_, index) => {
              if (index < score) {
                return <FaStar key={index} color='#FFD80A' size={16}  />
              }
              return <FaStar key={index} color='#8A8632' size={16} />
            })
          }
        </StarsWrapper>
      <Image src={ image && image[0]} alt={name} />
      <InfoWrapper>
        <CardName>{name}</CardName>
        <Text>{description}</Text>
        <Text>{category}</Text>
        <Text>{date}</Text>
      </InfoWrapper>
      <Button>Project Detail <FaArrowRight/></Button>
    </CardWrapper>
  )
}
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  height: 380px;
  background-color: #07222B;
  border-radius: 5px 5px 0 0;
  position: relative;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
`;
const StarsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  gap: 0.25rem;
  position: absolute;
  top: 5px;
  left: 5px;
  align-self: left;
`;
const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 35%;
  padding: 0.5rem;
`;
const CardName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #ababab;
  margin: 5px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  padding: 4px 16px;
  cursor: pointer;
  background-color: #00768D;
  border: none;
  margin: 0.5rem;
  &:hover {
    background-color: #005C6B;
  }
`;
