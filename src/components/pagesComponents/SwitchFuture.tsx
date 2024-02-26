import { StandardButton } from '../buttons/StandardButton';
import styled from 'styled-components'

export const SwitchFuture = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Riding the wave of eco-innovation</Title>
        <Text>
          Our priority is to help you find the most cost-effective and eco-friendly solutions for your home or business
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
  background-image: url('/images/wind-farm.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderContainer = styled.div`
  width:90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 150px;
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
  width: 100%;
`;

const Text = styled.p`
  width: 45%;
  color: #FFF;
  text-align: center;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.408px;
  margin-bottom: 24px;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;
