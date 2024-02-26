import styled from 'styled-components'
import { LogoFooter } from './LogoFooter'
import { NavigationFooter } from './NavigationFooter'
import { FooterInfo } from './FooterInfo'
import { BottomFooter } from './BottomFooter'
import { MediaFooter } from './MediaFooter'




export const Footer = () => {
  return (
    <StyledFooter>
      <MiddleFooter>
        <LogoFooter />
        <InfoContainer>
          <NavigationFooter />
          <FooterInfo />
          <MediaFooter />
        </InfoContainer>
      </MiddleFooter>
      <BottomFooter />
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #F1F5F9;
  padding: 3rem 0 0 0;
`;
const MiddleFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 75%;
  height: auto;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

