import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string,
  content: string,
}

export const BenefitsContent: React.FC<Props> = ({
  title,
  content,
}) => {
  return (
    <BenefitsWrapper>
      <Title>{title}</Title>
      <Text>{content}</Text>
    </BenefitsWrapper>
  )
}

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:80%;
`
const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: grey;
  text-align: center;
  margin: 0;
`;
const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #7A7A7A;
  text-align: center;
`;
