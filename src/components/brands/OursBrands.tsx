import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'

interface Props {
  images: string[]
}

export const OursBrands: React.FC<Props> = ({
  images
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: images.length > 5 ? 5 : images.length,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <StyledSlider {...settings}>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image src={image} alt={`brand-${index}`} />
          </ImageWrapper>
        ))}
      </StyledSlider>
    </>
  );
};

const StyledSlider = styled(Slider)`
  width: 100%;
  margin: 2rem 0;
  overflow-x: hidden;
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 70%;
  aspect-ratio: 4/1;
  object-fit: contain;
  mix-blend-mode: color-burn;
  filter: grayscale(100%) saturate(80%);
`;

