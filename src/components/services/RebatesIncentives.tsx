import { useEffect, useState, ReactNode } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode;
  route?: string;
}

export const RebatesIncentives: React.FC<Props> = ({ children, route }) => {
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
    <RebatesWrapper route={route}>
      <InfoContainer
        id='componente'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0, transition: { duration: 1.5, type:'linear' } }}
      >
        <Title>Maximize your savings</Title>
        <Subtitle>Mass Save Rebates</Subtitle>
        {children}
      </InfoContainer>
    </RebatesWrapper>
  )
}

const RebatesWrapper = styled.div<Props>`
  width: 100%;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${props => props.route === '/energy-storage' ? 'url(images/savings.background01.png)' : 'url(/images/savings-background.png)'};
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: ${props => props.route === '/energy-storage' ? '0 0 0 8rem' : '0'};
  background-position: 0;
  background-size: cover;
  padding: 8rem 0;
  @media (max-width: 1024px) {
    height: auto;
  }
`;
const Title = styled.h3`
  aling-self: stretch;
  color: var(--fore-allways---white, #FFF);

  text-align: center;
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 66px */
`;
const Subtitle = styled.h5`
  align-self: stretch;
  color: var(--White, var(--fore-allways---white, #FFF));
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 35.2px */
  margin-top: 8px;
`;
const InfoContainer = styled(motion.div)`
  width: 70%;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
