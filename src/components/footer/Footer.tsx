import styled from 'styled-components'
import { LogoFooter } from './LogoFooter'
import { NavigationFooter } from './NavigationFooter'
import { FooterInfo } from './FooterInfo'
import { BottomFooter } from './BottomFooter'
import { TopFooter } from './TopFooter'

export const Footer = () => {
  return (
    <StyledFooter>
      <TopFooter />
      <Separator />
      <MiddleFooter>
        <LogoContainer>
          <LogoFooter />
        </LogoContainer>
        <InfoContainer>
          <NavigationFooter />
          <FooterInfo />
        </InfoContainer>
      </MiddleFooter>
      <Separator />
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
  background-color: #07222B;
`;
const MiddleFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: auto;
  margin-top: 2rem;
  @media (max-width: 1064px) {
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 1064px) {
    width: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
`;
  const LogoContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1064px) {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }
`;
const Separator = styled.div`
  width: 85%;
  height: 1px;
  background-color: grey;
  margin: 0 auto;
`;

