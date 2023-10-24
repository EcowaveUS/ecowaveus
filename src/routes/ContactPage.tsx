import styled from 'styled-components'
import { ContactForm } from '../components/forms/ContactForm'
import { LocationInfo } from '../components/forms/LocationInfo'

export const ContactPage = () => {
  return (
      <StyledPage>
        <TitleContainer>
          <PageTitle>Contact Us</PageTitle>
        </TitleContainer>
        <Separator />
        <WrapperComponents>
          <LocationInfo />
          <ContactForm />
        </WrapperComponents>
      </StyledPage>
  )
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  `;
  const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url('/images/contact-img.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
`;
const PageTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #000;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
`;
const WrapperComponents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 90%;
`;
const Separator = styled.div`
  width: 90%;
  height: 1px;
  background-color: grey;
  margin: 20px 0;
`;