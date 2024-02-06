import React from 'react'
import styled from 'styled-components'

interface Props {
  onClick: () => void;
}

export const LeftArrow: React.FC<Props> = ({ onClick }) => {
  return (
    <StyldedWrapper onClick={onClick}>
      <ArrowImage src="/images/arrow-left-circle.png" alt="arrow-left" />
    </StyldedWrapper>
  )
}

const StyldedWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  cursor: pointer;
  align-items: center;
  width: 64px;
  height: 64px;
  z-index: 1;
  background-color: #fff;
  border-radius: 50%;
`;
const ArrowImage = styled.img`
  width: 100%;
  height: 100%;
`;

