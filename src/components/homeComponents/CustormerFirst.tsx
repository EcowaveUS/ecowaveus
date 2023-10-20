import styled from 'styled-components'

interface Props {
  title: string
  subtitle: string
  listContent: {
    icon: string
    content: string
  }[]
  }

export const CustormerFirst: React.FC<Props> = ({
  title,
  subtitle,
  listContent
}) => {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <ListWrapper>
        {
          listContent.map((item, index) => (
            <LiwWrapper key={index}>
              <StyledIcon src={item.icon}/>
              <p>{item.content}</p>
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
  width: 100%;
  background-color: #1b5b8d;
  align-items: center;
  margin-top: 2rem;
  `;
  const ListWrapper = styled.div`
  margin: 1rem auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 90%;
  height: 100%;
  list-style: none;
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
`;
const StyledIcon = styled.img`
  width: 100px;
  height: 33px;
  margin: 0 auto;
`;