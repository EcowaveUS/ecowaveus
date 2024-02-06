import { StandardButton } from '../buttons/StandardButton';
import styled from 'styled-components'

export const SwitchFuture = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Excellent Service. Reasonable Prices.</Title>
        <Text>
          At ecoWAVEus, we will help you find the suitable solution to make your house or your business more energy-efficient and environmentally friendly according to your priorities and preferences, at an affordable price.
        </Text>
        <StandardButton
          title='Schedule now!'
        />
      </HeaderContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 935px; /* 100% of the viewport height */
  background-image: url('/images/energy-solar-station.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 81px;
  letter-spacing: 0.32px;
  text-transform: capitalize;
  width: 75%;
`;

const Text = styled.p`
  width: 75%;
  color: #FFF;
  text-align: center;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.408px;
  margin-bottom: 24px;
`;
