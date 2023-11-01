import React from 'react'
import styled from 'styled-components'
import { FaAngleRight } from "react-icons/fa6";

interface Props {
  id: number,
  item: string,
  content: string[],
}

export const ProccesCard: React.FC<Props> = ({
  item,
  content,
}) => {
  return (
    <CardWarpper>
      <NumberWrapper>
        <p>STEP</p>
        <TextNumber>{item}</TextNumber>
      </NumberWrapper>
      <FaAngleRight size={16} color="#B5B5B5" />
      <TextWrapper>
        {content.map((item, index) => (
          <StyledList>
            <li key={index}><Text>{item}</Text></li>
          </StyledList>
        ))}
      </TextWrapper>
    </CardWarpper>
  )
}
const CardWarpper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  height: auto;
  padding: 4px 8px;
  margin: 0.5rem auto;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const TextNumber = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2rem;
  color: #fff;
  text-align: left;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const StyledList = styled.ul`
  margin-left: 1.5rem;
  padding: 0;
`;
const Text = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 1rem;
font-weight: 500;
line-height: 1.5rem;
color: #B5B5B5;
text-align: left;
padding: 2px;
&:hover {
  color: #fff;
}
@media (max-width: 768px) {
  text-align: center;
}
`;