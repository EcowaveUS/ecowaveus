import React,{ } from 'react'
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
          images.map((image) => (
            <ImageBox>
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
  grid-template-columns: 43% 57%;
  grid-template-rows: 1fr 1/4fr;
  align-items: center;
  justify-content: center;
  width: 75%;
  min-height: 935px;
  margin: 5rem auto;
  gap: 8px;
`;
const ImageContainer = styled.div`
  grid-column: span 1;
  width: 100%;
  height: 100%;

`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0 24px 0 0;
`
const ContentWrapper = styled.div`
  grid-column: span 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 80px;
  background-color: #fff;
  border-radius: 24px 0px 0px 0px;
`
const Title = styled.h3`
  color: #151B27;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  margin-bottom: 32px;
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
  grid-row: span 1;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 0 0 8px 8px;
`
const ImageBox = styled.div`
  width: 100%;
  object-fit: contain;
  `
const ImageList = styled.img`
  height: 100%;
  width: 100%;
`

