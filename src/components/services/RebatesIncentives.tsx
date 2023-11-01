import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'


export const RebatesIncentives = () => {
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
        <Title>Rebates and Incentives</Title>
        <TextContainer>
          <Subtitle>Mass Save Rebates</Subtitle>
            <Text>
              To verify if your town is eligible please click the following link:
            </Text>
            <Link to='https://frontdoor.portal.poweredbyefi.org/initiative/marebates'>
              https://frontdoor.portal.poweredbyefi.org/initiative/marebates
            </Link>
            <StyledList>
              <li><Text>Whole-home rebates are available to customers who install heat pumps as the sole source of heating and cooling. (up to $10,000)</Text></li>
              <li><Text>Partial-home rebates are offered based on equipment/outdoor unit  (tonnage) to customers who plan to keep an existing boiler or furnace in place to supplement a new heat pump system. ($1250 per ton, up to $10,000)</Text></li>
            </StyledList>
          <Subtitle>Federal incentives</Subtitle>
            <Text>
              30% of the cost of the heat pump installation up to $2,000
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
  width: 60%;
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
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
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
const StyledList = styled.ul`
  width: 60%;
  margin-left: 1.5rem;
`;
