import React,{ useEffect, useState } from 'react'
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);
  return (
    <StyledContent>
      <StyledLogo src={logo}/>
      <ContentTitle>{title}</ContentTitle>
      <TextWrapper>
        <Text>{content}</Text>
      </TextWrapper>
      {
        windowWidth > 764 ?
        (
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
        )
        :
        (
          <img src={images[0].img} alt={images[0].title} style={{width: '90%', height: 'auto'}}/>
        )
      }
    </StyledContent>
  )
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  width: 70%;
  @media (max-width: 764px) {
    width: 95%;
  }
`;
const StyledLogo = styled.img`
  width: 280px;
  height: 65px;
`;
const ContentTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #595954;
  font-style: italic;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  text-align: center;
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0;
  @media (max-width: 764px) {
    width: 100%;
  }
`;
const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rm;
  font-weight: 300;
  color: #595954;
  text-align: center;
  margin: 0.5rem;
  padding: 1rem;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
