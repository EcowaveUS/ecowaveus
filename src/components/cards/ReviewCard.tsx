import React from 'react'
import { FaStar } from "react-icons/fa";
import styled from 'styled-components'

interface ReviewProps {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  score: number;
  createdAt: string;
}

export const ReviewCard: React.FC<ReviewProps> = ({
  firstName,
  lastName,
  title,
  description,
  score,
  createdAt
}) => {
  return (
    <CardWrapper>
      <div>
        <Nametext>{`${firstName} ${lastName}`}</Nametext>
        <DateText>{createdAt}</DateText>
      </div>
      <ContentWrapper>
        <ReviewTitle>{title}</ReviewTitle>
        <TextContainer>
          <Reviewtext>{description}</Reviewtext>
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
        </TextContainer>
      </ContentWrapper>
    </CardWrapper>
  )
}
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 384px;
  max-width: 340px;
  height: 388px;
  padding: 40px 32px;
  border-radius: 20px;
  background-color: #FFF;
  gap: 1rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TextContainer = styled.div`
  height: 200px;
  overflow: auto;
`;
const Nametext = styled.h3`
  color: #343434;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04px;
`;
const DateText = styled.p`
  color: #969696;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.035px;
`;
const ReviewTitle = styled.p`
color: #343434;

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: -0.04px;
overflow: hidden;
`;
const Reviewtext = styled.p`
  color: #969696;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.035px;
`;
const StarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;
