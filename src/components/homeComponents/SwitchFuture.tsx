import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SwitchFuture = () => {
  return (
    <Container>
      <Title>SWITCH TO THE FUTURE</Title>
      <StyledImage src="/src/assets/fondo.png"/>
      <ServiceInfo>
        <Subtitle>Great Service. <span>Fair Prices.</span></Subtitle>
        <SubtitleInfo>
          Quality HVAC & Plumbing Services for Your Home or Business
        </SubtitleInfo>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores nulla excepturi hic voluptatibus qui repudiandae.
        </Text>
        <ButtonContainer>
          <Link to='/contact'><StyledButton>Schedule Service</StyledButton></Link>
          <Link to='/services'><StyledButton>View Our Services</StyledButton></Link>
        </ButtonContainer>
      </ServiceInfo>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: grey;
  text-align: center;
`
const ServiceInfo = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 30%;
  left: 3%;
  align-items: center;
  width: 35vw;
  @media (max-width: 1024px) {
    position: relative;
    width: 80%;
    margin-top: 2rem;
  }
`
const Subtitle = styled.h2`
  width: 100%;
  margin: 0;
  text-align: left;
  font-size: 35px;
  font-weight: 500;
  color: #1b5b8d;
  span {
    color: #4e9d40;
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
`
const SubtitleInfo = styled.h3`
  width: 100%;
  margin: 1rem;
  font-size: 20px;
  font-weight: 300;
  color: grey;
  margin: 1rem;
  @media (max-width: 1024px) {
    text-align: center;
  }
`
const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: grey;

  @media (max-width: 1024px) {
    text-align: center;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  gap: 1rem;
  margin: 1rem;
  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: left;
  align-items: space-between;
  gap: 0.5rem;
  padding: 8px 16px;
  background-color: #1b5b8d;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: #4e9d40;
    color: #1b5b8d;
    border: 1px solid #1b5b8d;
  }
`;