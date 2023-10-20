import styled from 'styled-components'

export const FooterInfo = () => {
  return (
    <InfoWrapper>
      <div>
        <Title>HOURS</Title>
        <p>Mondat-Friday 8:00pam to 5:00pm</p>
        <p>Service Available</p>
      </div>
      <div>
        <Title>LOCAL OFFICE</Title>
        <p>22 Broadway Street</p>
        <p>Beverly, MA, 01915</p>
        <p>info@ecowaveus.com</p>
        <p>Map</p>
      </div>
    </InfoWrapper>
  )
}
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2rem 0;
`;
const Title = styled.h5`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin: 0;
`;
