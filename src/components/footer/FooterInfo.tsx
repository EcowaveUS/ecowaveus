import styled from 'styled-components'

export const FooterInfo = () => {
  return (
    <InfoWrapper>
        <Title>Hours</Title>
        <InfoText>Monday-Friday 8:00pam to 5:00pm</InfoText>
        <InfoText>Service Available</InfoText>
        <Title>Local Office</Title>
        <InfoText>22 Broadway Street</InfoText>
        <InfoText>Beverly, MA, 01915</InfoText>
        <InfoText>info@ecowaveus.com</InfoText>
        <InfoText>Map</InfoText>
    </InfoWrapper>
  )
}
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0;
  @media (max-width: 768px) {
    align-items: center;
    margin: 0;
  }
`;
const Title = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;
const InfoText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #B5B5B5;
  margin: 0;
  padding: 6px 0;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
