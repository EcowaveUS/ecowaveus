import { useEffect, useState } from 'react'
import { HomeReview } from '../components/reviews/HomeReview'
import { ReviewsComponents } from '../components/reviews/ReviewsComponents'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ReviewsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('reviews-page');
      if (element && window.scrollY + window.innerHeight >= element.offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <StyledPage
      id="reviews-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, transition: { duration: 1.5, type:'linear' } }}
      exit={{ opacity: 0 }}
    >
      <HomeReview />
      <ReviewsComponents />
    </StyledPage>
  )
}
const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;
