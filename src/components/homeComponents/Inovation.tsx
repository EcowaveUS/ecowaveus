import React,{ } from 'react'
import styled from 'styled-components'

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

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
  logo,
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
        <Image src='/images/dreamstime.jpg' />
      </ImageContainer>
      <ImageWrapper>
        {
          images.map((image) => (
            <ImageList src={image.img} />
          ))
        }
      </ImageWrapper>
    </StyledContent>
  )
}

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 1fr 1/4fr;
  grid-gap: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5rem auto;
`;
const ImageContainer = styled.div`
  grid-column: span 1;
  height: auto;
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0 24px 0 0;
`
const ContentWrapper = styled.div`
  grid-column: span 1;
  height: auto;
  padding: 80px;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0 0 8px 8px;
  gap: 1rem;
`
const ImageList = styled.img`
  height: 210px;
  width: auto;
`

