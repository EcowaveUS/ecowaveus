import styled from 'styled-components'

export const LogoFooter = () => {
  return (
    <FooterWrapper>
      <Logo src='/images/logo-footer.png'/>
      <ContactText>
        Riding The Wave of Eco-Innovation
      </ContactText>
    </FooterWrapper>
  )
}
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: auto;
  height: auto;
  gap: 1rem;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const Logo = styled.img`
  width: 237px;
  height: 56px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
const ContactText = styled.p`
  color: #343434;

  font-family: Be Vietnam Pro;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;
