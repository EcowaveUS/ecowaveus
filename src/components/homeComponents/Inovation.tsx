import React from 'react'
import styled from 'styled-components'

interface Props {
  images: string[]
  logo: string
  title: string
  content?: string
}

export const Inovation: React.FC<Props> = ({
  images,
  logo,
  title,
  content
}) => {
  return (
    <StyledContent>
      <StyledLogo src={logo}/>
      <ContentTitle>{title}</ContentTitle>
      <Text>{content}</Text>
      <ContentWrapper>
        {
          images.map((image, index) => (
            <Image key={index} src={image} />
          ))
        }
      </ContentWrapper>
    </StyledContent>
  )
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  width: 90%;
`;
const StyledLogo = styled.img`
  width: 280px;
  height: 80px;
`;
const ContentTitle = styled.h3`
  margin: 1rem;
  font-size: 35px;
  font-weight: 400;
  color: grey;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  border-radius: 8px;
  margin: 2rem;
  padding: 0.5rem;
  width: 90%;
`;
const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: grey;
  text-align: center;
  margin: 2rem;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
