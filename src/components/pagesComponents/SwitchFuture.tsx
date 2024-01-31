import { StandardButton } from '../buttons/StandardButton';
import styled from 'styled-components'

export const SwitchFuture = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>HVAC & Plumbing Excellence for Homes & Businesses</Title>
        <Text>
          EAt EcoWave, we offer efficient HVAC and plumbing solutions for both homes and businesses. Our skilled team ensures top-notch installations, repairs, and maintenance at competitive prices, focusing on reliable and tailored services for every client.
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
  height: 100vh; /* 100% of the viewport height */
  background-image: url('/images/energy-solar-station.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position:0 7rem;
`;

const HeaderContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 8rem;
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
