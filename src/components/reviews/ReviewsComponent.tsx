import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReviewsTitle } from './ReviewsTitle'
import { ReviewCard } from '../cards/ReviewCard'
import { SvgCurvas } from '../svg/SvgCurvas'
import reviews from '../../reviews.json'

export const ReviewsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerScreen, setCardsPerScreen] = useState(1);
  const data = reviews;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  useEffect(() => {
    const calculateCardsPerScreen = () => {
      const cardWidth = 388; // Ancho estimado de cada tarjeta en píxeles, ajusta según tus necesidades
      const screenWidth = window.innerWidth;
      const newCardsPerScreen = Math.floor(screenWidth / cardWidth);
      setCardsPerScreen(newCardsPerScreen);
    };

    calculateCardsPerScreen();
    window.addEventListener('resize', calculateCardsPerScreen);

    return () => {
      window.removeEventListener('resize', calculateCardsPerScreen);
    };
  }, []);
  return (
    <WrapperReviews>
      <Curvas>
        <SvgCurvas />
      </Curvas>
      <TitleWrapper>
        <ReviewsTitle
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </TitleWrapper>
      <CardWrapper>
        {
          data.map((review, index) => {
            return (
            <div
              key={review.id}
              style={{
                display: index >= currentIndex && index < currentIndex + cardsPerScreen ? 'block' : 'none',
              }}
            >
              <ReviewCard
                key={index}
                firstName={review.firstName}
                lastname={review.lastName}
                title={review.title}
                description={review.description}
                score={review.score}
                createdAt={review.createdAt}
              />
            </div>
            )
          })
        }
      </CardWrapper>
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
  padding: 100px 0;
  background-color: #003B76;
`;
const TitleWrapper = styled.div`
  align-items: center;
  width: 90%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  gap: 32px;
  margin: 0 auto;'
`;

