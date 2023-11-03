import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


export const EnergyStorageRebates = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('componente');
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
    <RebatesWrapper>
      <InfoContainer
        id='componente'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0, transition: { duration: 1.5, type:'linear' } }}
      >
        <Title>Energy Rebates & Incentives</Title>
        <TextContainer>
          <Subtitle>Federal incentives</Subtitle>
            <Text>
              25D provides households an uncapped 30 percent tax credit for a battery storage installation
            </Text>
        </TextContainer>
      </InfoContainer>
    </RebatesWrapper>
  )
}

const RebatesWrapper = styled.div`
  background-image: url('/images/green-money.jpg');
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  word-break: break-all;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const Title = styled.h3`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ABABAB;
  font-style: italic;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  padding: 1rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Subtitle = styled.h5`
  font-size: 1rem;
  font-weight: 300;
  color: #ABABAB;
  font-style: italic;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const InfoContainer = styled(motion.div)`
  width: 55%;
  height: auto;
  background-color: rgba(0,0,0,0.8);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  transition: all 0.5s ease-in-out;
  padding: 1rem;
  &:hover {
  box-shadow: 8px 8px 10px #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 600px;
    height: auto;
    background-color: rgba(0,0,0,0.6);
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  gap: 1rem;
`;
const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: #A6A6A6;
  text-align: center;
  margin: 0.5rem;
`;
