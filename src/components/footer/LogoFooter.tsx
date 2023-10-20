import styled from 'styled-components'

export const LogoFooter = () => {
  return (
    <FooterWrapper>
      <Logo src='/images/logo-ecowave.png'/>
      <ContactText>CONTACT US TODAY</ContactText>
      <NumberText>(978) 500 - 4081</NumberText>
    </FooterWrapper>
  )
}
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 280px;
  height: 90px;
  margin: 0 auto;
  padding: 2rem 0;
`;
const ContactText = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: grey;
  margin: 0;
`;
const NumberText = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: grey;
  margin: 0;
`;
