import React,{} from 'react'
import styled from 'styled-components';

interface Props {
  title: string;
  content: string;
  icon: JSX.Element;
}

export const InfoCard: React.FC<Props> = ({
  title,
  content,
  icon
}) => {
  return (
    <CardWrapper>
      {icon}
      <div>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 14px;
`

const Text = styled.p`
  color: #1C1F35;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 135.023%; /* 18.903px */
`
