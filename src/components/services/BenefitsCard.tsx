import React,{ useState } from 'react'
import styled from 'styled-components'

interface Props {
    Icon?: React.ElementType,
    title: string,
    color?: string,
    benefitsTitle?: string,
    benefitsContent?: string,
    showEfficency?: boolean,
  }

export const BenefitsCard: React.FC<Props> = ({
    Icon,
    title,
    color,
}) => {
  return (
    <>
      <IconCard
      >
        <StyledIcon
          color={color}
        >
          {Icon && <Icon />}
        </StyledIcon>
        <IconText>{title}</IconText>
      </IconCard>
    </>
  )
}

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledIcon = styled.div<{ color?: string }>`
  font-size: 100px;
  color: ${props => props.color || 'green'};
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.3;
  }
`;
const IconText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #7A7A7A;
  text-align: center;
`;