import styled from 'styled-components'

export const LogoFooter = () => {
  return (
    <FooterWrapper>
      <Logo src='/images/logo-ecowave.png'/>
      <NumberText>(978) 500 - 4081</NumberText>
      <ContactText>"Specializing in heat pumps, EV chargers, and energy storage installations, our company ensures efficient and sustainable energy solutions."</ContactText>
    </FooterWrapper>
  )
}
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: auto;
  gap: 1rem;
`;
const Logo = styled.img`
  width: 280px;
  height: 65px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
const NumberText = styled.p`
font-size: 20px;
font-weight: 300;
color: grey;
margin: 0;
`;
const ContactText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: #CCCCCC;
  margin: 0;
`;
