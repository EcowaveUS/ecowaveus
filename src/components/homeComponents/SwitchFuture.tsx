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
      <Image src="/images/fondo.png" alt="switch-future" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0;
  background-color: #003B76;
`;

const HeaderContainer = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 130px;
  margin-bottom: 71px;
  @media (max-width: 1024px) {
    width: 80%;
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
const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;
