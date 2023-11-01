import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/projects/ProjectCard'

export const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      category: 'EV-Chargers',
      image: ['/images/ev-chargers-02.jpg'],
      name: 'Business Project',
      description: 'This is a business project',
      date: '2021-04-10',
      score: 5,
    },
    {
      id: 2,
      category: 'Heat Pumps',
      image: ['/images/energy-storage-01.jpg'],
      name: 'Business Project',
      description: 'This is a business project',
      date: '2021-04-10',
      score: 4,
    },
    {
      id: 3,
      category: 'Energy Storage',
      image: ['/images/energy-storage-01.jpg'],
      name: 'Business Project',
      description: 'This is a business project',
      date: '2021-04-10',
      score: 5,
    },
    {
      id: 4,
      category: 'Heat Pumps',
      image: ['/images/heat-pumps-ppl.jpg'],
      name: 'Business Project',
      description: 'This is a business project',
      date: '2021-04-10',
      score: 4,
    },
    {
      id: 5,
      category: 'Energy Storage',
      image: ['/images/heat-pumps-ppl.jpg'],
      name: 'Business Project',
      description: 'This is a business project',
      date: '2021-04-10',
      score: 5,
    },
    {
      id: 6,
      category: 'EV-Chargers',
      image: ['/images/heat-pumps-ppl.jpg'],
      name: 'Business Project',
      description: 'This is a business project',
      date: '2021-04-10',
      score: 4,
    },
    {
      id: 7,
      category: 'Energy Storage',
      image: ['/images/heat-pumps-ppl.jpg'],
      name: 'Business Project',
      description: 'This is a business project',
      date: '2021-04-10',
      score: 3,
    },
    {
      id: 8,
      category: 'EV-Chargers',
      image: ['/images/heat-pumps-ppl.jpg'],
      name: 'Business t',
      description: 'This is a business project',
      date: '2021-04-10',
      score: 4,
    },

  ]
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
            id={project.id}
            category={project.category}
            image={project.image}
            name={project.name}
            description={project.description}
            date={project.date}
            score={project.score}
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
