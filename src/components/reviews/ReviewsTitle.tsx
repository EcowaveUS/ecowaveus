import React from 'react'
import styled from 'styled-components'


export const ReviewsTitle = () => {
  return (
    <TitleContainer>
      <TitleText>Look for ours reviews</TitleText>
      <MoreButton>See more</MoreButton>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TitleText = styled.h3`
color: var(--fore-allways---white, #FFF);
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 40px; /* 100% */
letter-spacing: 0.2px;
text-align: left;
`;
const MoreButton = styled.button`
  color: #1FA500;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04px;
  text-align: center;
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

`;


