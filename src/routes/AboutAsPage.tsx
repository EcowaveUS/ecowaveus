import styled from 'styled-components'
import { motion } from 'framer-motion'
import { OursBrands } from '../components/brands/OursBrands';

export const AboutAsPage = () => {
  return (
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <HeaderContent>
            <AuxiliarText>About us</AuxiliarText>
            <Title>Discover Our Story:</Title>
          </HeaderContent>
        </Container>
        <BrandsWrapper>
          <OursBrands
            images={[
                '/images/brands/mitsubishi-logo.png',
                '/images/brands/lg-logo.png',
                '/images/brands/fujitsu-logo.png',
                '/images/brands/daikin-logo.png',
                '/images/brands/tesla-logo.png',
                '/images/brands/fujitsu-logo.png',
                '/images/brands/daikin-logo.png',
              ]}
          />
        </BrandsWrapper>
      </Wrapper>
  )
}
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-image: url('/images/about-us.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 536px;
  flex-shrink: 0;
`;

  const HeaderContent = styled.div`
  margin-top: 8rem;
  margin-left: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
  gap: 1rem;
`;
const AuxiliarText = styled.p`
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-left: 4px solid #68BE54 ;
  padding: 3px 9px 3px 8px;
`;

const Title = styled.h1`
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;
const BrandsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #F5F5F5;
`;


