import React from 'react'
import styled from 'styled-components'

interface Props {
  handleNext: () => void;
  handlePrev: () => void;
}

export const ReviewsTitle: React.FC<Props> = ({
  handleNext,
  handlePrev,
}) => {
  return (
    <TitleContainer>
      <TitleText>Look for ours reviews</TitleText>
      <div>
        <LeftButton onClick={handlePrev}>
          <ArrowLeft src="/images/arrow-left-circle.png" alt="" />
        </LeftButton>
        <RigthButton onClick={handleNext}>
          <ArrowRight src="/images/arrow-right-circle.png" alt="" />
        </RigthButton>
      </div>
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
const LeftButton = styled.button`
  border: none;
  background: none;
  width: 64px;
  height: 64px;
  cursor: pointer;
`;
const ArrowLeft = styled.img`
  width: 64px;
  height: 64px;
`;
const RigthButton = styled.button`
  border: none;
  background: none;
  width: 64px;
  height: 64px;
  cursor: pointer;
`;
const ArrowRight = styled.img`
  width: 64px;
  height: 64px;
`;


