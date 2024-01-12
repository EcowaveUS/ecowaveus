import styled from 'styled-components'

export const FooterInfo = () => {
  return (
    <InfoWrapper>
        <Title>Hours</Title>
        <InfoText>Monday-Friday 8:00pam <br/>  to 5:00pm</InfoText>
        <Title>Local Office</Title>
        <InfoText>22 Broadway Street</InfoText>
        <InfoText>Beverly, MA, 01915</InfoText>
    </InfoWrapper>
  )
}
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  @media (max-width: 768px) {
    align-items: center;
    padding: 1rem;
    gap: 0.2rem;
  }
`;
const Title = styled.h5`
  color: #343434;

  font-family: Be Vietnam Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
const InfoText = styled.p`
  color: #343434;

  font-family: Be Vietnam Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  opacity: 0.8;
`;
