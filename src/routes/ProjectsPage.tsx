import styled from 'styled-components'
export const ProjectsPage = () => {
  return (
    <StyledPage>
    <PageTitle>Projects</PageTitle>
  </StyledPage>
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
