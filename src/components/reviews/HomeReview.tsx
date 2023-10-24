import styled from 'styled-components'
import { MainReviewCard } from './MainReviewCard'
import { TotalReviews } from './TotalReviews'

export const HomeReview = () => {
  return (
      <StyledHomeReview>
        <ReviewsTitle>Look for ours reviews</ReviewsTitle>
        <StyledImg src='/images/reviews-background.jpg' alt='line' />
        <WrapperComponets>
          <MainReviewCard
            title='“Great service and great people!”'
            firstName='John'
            lastName='Doe'
          />
          <TotalReviews
            title='5 Stars Google'
            description='Based on 1,000 + Reviews'
          />
        </WrapperComponets>
      </StyledHomeReview>
  )
}
  const StyledHomeReview = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  margin-bottom: 8rem;
  @media (max-width: 1240px) {
    justify-content: center;
    align-items: center;
  }
`
const StyledImg = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
  z-index: -1;
  @media (max-width: 1240px) {
    align-items: center;
    height: 280px;
    width: 100%;
  }
`;
const ReviewsTitle = styled.h1`
  width: 100%;
  align-self: center;
  font-size: 35px;
  font-weight: 400;
  color: grey;
  text-align: center;
  @media (max-width: 1240px) {
    left: auto;
  }

`
const WrapperComponets = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  top: calc(50% + 120px);

  @media (max-width: 1240px) {
    position: static;
    top: auto;
    align-items: flex-end;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`

