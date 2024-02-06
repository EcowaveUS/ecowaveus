import styled from 'styled-components'
import { ReviewsTitle } from './ReviewsTitle'
import { ReviewCard } from '../cards/ReviewCard'
import { SvgCurvas } from '../svg/SvgCurvas'
import Slider from "react-slick";
import reviews from '../../reviews.json';
import { LeftArrow } from '../cards/LeftArrow';
import { useRef } from 'react';
import { RightArrow } from '../cards/RightArrow';

export const ReviewsComponent = () => {
  const data = reviews;
  const sliderRef = useRef<Slider>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  var settings = {
      dots: false,
      infinite: true,
      arrows: true,
      nextArrow: <RightArrow onClick={handleNextClick} />,
      prevArrow: <LeftArrow onClick={handlePrevClick}/>,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
      ]
    };
  return (
    <WrapperReviews>
      <Curvas>
        <SvgCurvas />
      </Curvas>
      <TitleWrapper>
        <ReviewsTitle />
      </TitleWrapper>
        <StyledSlider ref={sliderRef} {...settings}>
          {data.map((review, index) => (
            <CardWarpper>
              <ReviewCard
                key={index}
                firstName={review.firstName}
                lastName={review.lastName}
                title={review.title}
                description={review.description}
                score={review.score}
                createdAt={review.createdAt}
              />
            </CardWarpper>
          ))}
        </StyledSlider>
    </WrapperReviews>
  )
}
const Curvas = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
`;
const WrapperReviews = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 7rem 0;
  background-color: #003B76;
`;
const TitleWrapper = styled.div`
  align-items: center;
  width: 75%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledSlider = styled(Slider)`
  width: 75%;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  align-self: center;
  z-index: 1;
  .slick-track {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
  }
  .slick-slide {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const CardWarpper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;