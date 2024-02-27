import React,{ Suspense } from 'react'
import styled from 'styled-components'

interface Props {
  images: {
    img: string,
    title: string,
    rows?: number,
    cols?: number,
  }[],
  logo: string
  title: string
  content?: string
}

export const Inovation: React.FC<Props> = ({
  images,
  title,
  content
}) => {
  return (
    <StyledContent>
      <ContentWrapper>
        <Title>{title}</Title>
        <Text>{content}</Text>
      </ContentWrapper>
      <ImageContainer>
        <Image src='/images/innovation-01.png' />
      </ImageContainer>
      <ImageWrapper>
        {
          images.map((image, index) => (
            <ImageBox key={index}>
              <ImageList src={image.img} />
            </ImageBox>
          ))
        }
      </ImageWrapper>
    </StyledContent>
  )
}

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 47% 53%;
  grid-template-rows: 555px 253px;
  align-items: center;
  justify-content: center;
  width: 75%;
  min-height: auto;
  gap: 8px;
  margin-bottom: 5rem;
  @media (max-width: 1024px) {
    min-height: auto;
    width: 90%;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    gap: 0;
  }
`;
const ImageContainer = styled.div`
  grid-column: span 1;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    border-radius: 0 0 24px 0;
  }

`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 24px 0 0;
  @media (max-width: 1024px) {
    border-radius: 0 0 24px 0;
  }
`
const ContentWrapper = styled.div`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 80px;
  background-color: #fff;
  border-radius: 24px 0px 0px 0px;
  @media (max-width: 768px) {
    padding: 32px;
  }
`
const Title = styled.h3`
  color: #151B27;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  margin-bottom: 32px;
  align-self: flex-start;
`
const Text = styled.p`
  color: rgba(21, 27, 39, 0.87);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`
const ImageWrapper = styled.div`
  grid-column: span 2;
  grid-row: 2;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 0 0 8px 8px;
  @media (max-width: 1024px) {
    display: none;
  }
`
const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  `
const ImageList = styled.img`
  height: 100%;
  width: 100%;
`

