import styled from 'styled-components'
import { LogoFooter } from './LogoFooter'
import { NavigationFooter } from './NavigationFooter'
import { FooterInfo } from './FooterInfo'
import { BottomFooter } from './BottomFooter'




export const Footer = () => {
  return (
    <StyledFooter>
      <MiddleFooter>
        <LogoFooter />
        <InfoContainer>
          <NavigationFooter />
          <FooterInfo />
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
`;
const InfoContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

