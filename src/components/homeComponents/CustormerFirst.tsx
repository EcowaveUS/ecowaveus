import styled from 'styled-components'

interface Props {
  title: string
  subtitle?: string
  listContent: {
    icon: string
    content: string
  }[]
  }

export const CustormerFirst: React.FC<Props> = ({
  title,
  listContent
}) => {
  return (
    <StyledWrapper>
      <Title>{title}</Title>
      <ListWrapper>
        {
          listContent.map((item, index) => (
            <LiwWrapper key={index}>
              <StyledIcon src={item.icon}/>
              <Text>{item.content}</Text>
            </LiwWrapper>
          ))
        }
      </ListWrapper>
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: #07222B;
align-items: center;
margin-top: 2rem;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 1rem;
  font-style: italic;
`;
  const ListWrapper = styled.div`
  margin: 1rem auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 80%;
  height: 100%;
  list-style: none;
  padding: 1.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    width: 70%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
const LiwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;
const StyledIcon = styled.img`
  width: 100px;
  height: 33px;
  margin: 0 auto;
`;
const Text = styled.p`
  margin-top: 1.5rem;
  font-size: 18px;
  font-weight: 500;
  &: hover {
    font-weight: 600;
    cursor: pointer;
  }
  `;
