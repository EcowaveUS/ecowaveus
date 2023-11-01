import React from 'react'
import styled from 'styled-components'
import { FaXmark } from "react-icons/fa6";

interface Props {
  title: string,
  content: string,
  images?: string[],
  onClick?: () => void,
}

export const BenefitsContent: React.FC<Props> = ({
  title,
  content,
  onClick,
}) => {
  return (
    <BenefitsWrapper>
        <Title>{title}</Title>
      <Header onClick={onClick}>
        <FaXmark size={24}/>
      </Header>
      <Text>{content}</Text>
    </BenefitsWrapper>
  )
}

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width:70%;
  background-color: #26252B;
  padding: 1rem;
  gap: 1rem;
  border-radius: 10px;
  box-shadow: 8px 8px 8px rgba(0,0,0,0.3);
  margin: 2rem 0;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const Header = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  color: grey;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 600;
  color: grey;
  text-align: center;
  margin: 0;
  font-style: italic;
`;
const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #7A7A7A;
  text-align: center;
`;
