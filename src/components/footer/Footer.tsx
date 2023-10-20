import styled from 'styled-components'
import { LogoFooter } from './LogoFooter'
import { NavigationFooter } from './NavigationFooter'
import { FooterInfo } from './FooterInfo'
import { MediaFooter } from './MediaFooter'
import { BottomFooter } from './BottomFooter'

export const Footer = () => {
  return (
    <StyledFooter>
      <TopFooter>
        <LogoFooter />
        <NavigationFooter />
        <FooterInfo />
        <MediaFooter />
      </TopFooter>
      <Separator />
      <BottomFooter />
    </StyledFooter>
  )
}
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background-color: #1b5b8d;
`;
const TopFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: auto;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }

`;
const Separator = styled.div`
  width: 95%;
  height: 1px;
  background-color: #fff;
  margin: 0 auto;
`;

