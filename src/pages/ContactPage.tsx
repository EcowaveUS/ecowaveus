import { Layout } from '../utils/Layout'
import styled from 'styled-components'

export const ContactPage = () => {
  return (
    <Layout>
      <StyledPage>
        <PageTitle>Contact Page</PageTitle>
      </StyledPage>
    </Layout>
  )
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: grey;
`;