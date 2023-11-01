import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
  title?: string,
  images?: string[],
  content: string,
}

export const ServiceInfo: React.FC<Props> = ({
  title,
  content,
}) => {
  return (
    <PumpsWrapper
    initial={{ opacity: 0, y: -200 }}
    animate={{
      opacity: 1, y: 0,
      transition: { duration: 2, type:'linear' } }}
    >
      <PumpsContent>
        <PumpsContentTitle>{title}</PumpsContentTitle>
        <PumpsContentText>
          {content}
        </PumpsContentText>
      </PumpsContent>
    </PumpsWrapper>
  )
}

const PumpsWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width:100%;
  background-image: url('/images/heat-pumps-02.jpg');
  background-size: cover;
  background-position: center;
  padding: 15rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .8;
    background-color: rgba(41, 132, 149, 0.6); /* Color con opacidad */
    background: linear-gradient(180deg, #298495 0%, #2D8E9D 100%); /* Degradado */
  }
`;
const PumpsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  z-index: 1;
  @media (max-width: 1024px) {
    padding: 0 2rem;
    align-items: center;
    width: 90%;
  }
`;
const PumpsContentTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #100909;
  text-align: left;
  margin: 0;
`;
const PumpsContentText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
  color: #B5B5B5;
  text-align: left;
  margin-top: 1rem;
`;
