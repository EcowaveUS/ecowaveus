import { useRef } from 'react'
import styled from 'styled-components'
import { ProjectCard } from '../cards/ProjectCard';
import projects from '../../projects.json'
import Slider from "react-slick";
import { RightArrow } from '../cards/RightArrow';
import { LeftArrow } from '../cards/LeftArrow';

export const ProjectCards = () => {

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
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    ]
  };
  return (
    <Wrapper>
      <Title>Our Projects</Title>
      <CardWrapper ref={sliderRef} {...settings} >
        {projects.map((card) => (
          <ProjectCard
            key={card.id}
            category={card.category}
            image={card.image}
            name={card.name}
          />
          ))}
      </CardWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  background: linear-gradient(90deg, #003B76 -1.19%, #4579AD 57.78%, #7CB6F1 115.08%), no-repeat, top, top, fixed;
  border-radius: 3rem 3rem 0 0;
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 2rem;
  `
const CardWrapper = styled(Slider)`
  width: 80%;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 5rem;
  .slick-track {
    z-index: -1;
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
  @media (max-width: 960px) {
    width: 100%;
  }
`;

