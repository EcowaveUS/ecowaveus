import styled from 'styled-components'
import { ProjectCard } from '../cards/ProjectCard';
import projects from '../../projects.json'

export const ProjectCards = () => {
  const cards = projects.slice(0, 3)
  return (
    <Wrapper>
      <Title>Our Projects</Title>
      <CardWrapper>
        {cards.map((card) => (
          <ProjectCard
            key={card.id}
            category={card.category}
            image={card.image}
            name={card.name}
          />
          ))}
      </CardWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  width: 100%;
  background-image: url('/images/background-projects.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 648px;
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2rem;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  width: 70%;
`;

