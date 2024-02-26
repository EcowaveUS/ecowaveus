import styled from 'styled-components'
import { ProjectCard } from '../cards/ProjectCard';
import projects from '../../projects.json'
import Slider from "react-slick";

export const ProjectCards = () => {
  const cards = projects.slice(0, 4)
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
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
          dots: false
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
      <CardWrapper {...settings} >
        {cards.map((card) => (
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  background: linear-gradient(90deg, #003B76 -1.19%, #4579AD 57.78%, #7CB6F1 115.08%), no-repeat, top, top, fixed;
  z-index: -1;
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
  z-index: 1;
  margin-bottom: 5rem;
  .slick-track {
    display: flex;
    align-items: center;
    padding: 2rem;
  }
  .slick-slide {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

