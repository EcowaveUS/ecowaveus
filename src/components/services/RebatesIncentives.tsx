import { useEffect, useState, ReactNode } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode;
}

export const RebatesIncentives: React.FC<Props> = ({ children }) => {
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
        <Title>Maximize your savings</Title>
        <Subtitle>Mass Save Rebates</Subtitle>
        {children}
      </InfoContainer>
    </RebatesWrapper>
  )
}

const RebatesWrapper = styled.div`
  width: 100%;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: break-all;
  background-image: url('/images/savings-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
`;
const Title = styled.h3`
  color: var(--fore-allways---white, #FFF);
  text-align: center;
  font-family: Inter;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 79.2px */
`;
const Subtitle = styled.h5`
  color: var(--White, var(--fore-allways---white, #FFF));
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-top: 8px;
`;
const InfoContainer = styled(motion.div)`
  width: 75%;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
