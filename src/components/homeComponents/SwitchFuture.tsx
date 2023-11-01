import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

export const SwitchFuture = () => {
  return (
    <Container>
      <Title>SWITCH TO THE FUTURE</Title>
      <ImgWapper>
        <StyledImage
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.5, type:'linear' } }}
          src="/images/fondo.png"
        />
      </ImgWapper>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
`;
const ImgWapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;
const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  margin: 0;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  background: linear-gradient(to right, #21AB54, #2133AB);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
  font-style: oblique;
  letter-spacing: 0.5rem;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  margin-top: 4rem;
`;
const ServiceInfo = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 30%;
  left: 3%;
  align-items: center;
  width: 35vw;
  @media (max-width: 1024px) {
    align-items: center;
    position: static;
    width: 90%;
    margin-top: 2rem;
  }
`
const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  text-align: left;
  width: 100%;
  margin: 0;
  color: #1b5b8d;
  font-style: oblique;
  span {
    color: #4e9d40;
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
`
const SubtitleInfo = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  width: 100%;
  margin: 1rem;
  color: #595954;
  @media (max-width: 1024px) {
    text-align: center;
  }
`
const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: ##595954;
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