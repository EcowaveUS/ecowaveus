import React from 'react'
import styled from 'styled-components'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
      <StyledLogo src={logo}/>
      <ContentTitle>{title}</ContentTitle>
      <Text>{content}</Text>
      <ImageList
          sx={{ width: '90%', height: 'auto' }}
          variant="quilted"
          cols={4}
          rowHeight={245}
        >
      {images.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
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
