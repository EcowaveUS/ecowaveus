import { ReviewCard } from './ReviewCard'
import reviews from '../../reviews.json'
import styled from 'styled-components'

export const ReviewsComponents = () => {
  return (
    <>
      <StyledReviews>
        {
          reviews.map(review => (
            <ReviewCard
              key={review.id}
              id={review.id}
              score={review.score}
              firstName={review.firstName}
              lastName={review.lastName}
              title={review.title}
              description={review.description}
              createdAt={review.createdAt}

            />
          ))
        }
      </StyledReviews>
    </>
  )
}

const StyledReviews = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
`;