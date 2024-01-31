import { LocationInfo } from './LocationInfo'
import styled from 'styled-components'
import { ContactForm } from './ContactForm'

export const ContactComponent = () => {
  return (
    <WrapperComponent>
      <LocationInfo />
      <ContactForm />
    </WrapperComponent>
  )
}

const WrapperComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin: 5rem auto;
  `;
