import React from 'react'
import styled from 'styled-components'

interface Props {
  onClick: () => void;
}

export const RightArrow: React.FC<Props> = ({ onClick }) => {
  return (
    <StyldedWrapper onClick={onClick}>
      <ArrowImage src="/src/assets/icons/arrow-right.png" alt="arrow-left" />
    </StyldedWrapper>
  )
}

const StyldedWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -2rem;
  cursor: pointer;
  align-items: center;
  width: 64px;
  height: 64px;
  z-index: 1;
  `;
  const ArrowImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
  margin: 0;
  padding: 0;
`;