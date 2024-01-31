import styled from 'styled-components'
import { ProjectCard } from '../cards/ProjectCard';
import projects from '../../projects.json'

export const ProjectCards = () => {
  const cards = projects.slice(0, 4)
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
      <ImageBrackground >
        <StyledButton>More Work</StyledButton>
      </ImageBrackground>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  color: #1C1F35;
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
  width: 90%;
  margin-bottom: -5rem;
`;
const ImageBrackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: -1;
  background-image: url('/images/project-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 340px;
`;
const StyledButton = styled.button`
  display: flex;
  height: var(--padding, 48px);

  padding: 17px 24px 15px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: var(--medium, 6px);
  background: #003B76;

  color: var(--fore-allways---white, #FFF);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  margin-top: 3rem;
  cursor: pointer;
`;

