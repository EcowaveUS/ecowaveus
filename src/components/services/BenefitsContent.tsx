import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string,
  content: string,
  images?: string[],
}

export const BenefitsContent: React.FC<Props> = ({
  title,
  content,
  images,
}) => {
  return (
    <BenefitsWrapper>
      <Title>{title}</Title>
      <Text>{content}</Text>
      <ImagesWrapper>
        {
          images?.map((image, index) => (
            <Image
              key={index}
              src={image}
            />
          ))
        }
      </ImagesWrapper>
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
const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin: 2rem 0;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;
