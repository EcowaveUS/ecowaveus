import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/cards/ProjectCard'
import projects from '../projects.json'

export const ProjectsPage = () => {

  return (
    <StyledPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <PageTitle>Our Projects</PageTitle>
    <ProjectsWrapper>
      {
        projects.map((project) => (
          <ProjectCard key={project.id}
            category={project.category}
            image={project.image}
            name={project.name}
          />
        ))
      }
    </ProjectsWrapper>
  </StyledPage>
)
}

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 100%;
`;
const PageTitle = styled.h1`
font-size: 50px;
font-weight: 300;
color: grey;
`;
const ProjectsWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
gap: 2rem;
align-items: center;
width: 80%;
margin: 2rem auto;
`;
