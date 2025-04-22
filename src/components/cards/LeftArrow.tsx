import React from 'react'
import styled from 'styled-components'
import leftIcon from '../../assets/icons/arrow-left.png'

interface Props {
  onClick: () => void;
}

export const LeftArrow: React.FC<Props> = ({ onClick }) => {
  return (
    <StyldedWrapper onClick={onClick}>
      <ArrowImage src={leftIcon} alt="arrow-left" />
    </StyldedWrapper>
  )
}

const StyldedWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: -1.5rem;
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

