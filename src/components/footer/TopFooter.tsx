import styled from 'styled-components'

export const TopFooter = () => {
  return (
    <StyledTopFooter>
      <Title>Ready to get in touch?</Title>
      <div>
        <StyledButton>Contact</StyledButton>
      </div>
    </StyledTopFooter>
  )
}

const StyledTopFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  width: 85%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 2rem;
  }
`;
const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #fff;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const StyledButton = styled.button`
  background-color: #00768D;
  color: #fff;
  border: none;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
  padding: 16px 32px;
  &:hover {
    color: #1b5b8d;
    cursor: pointer;
  }
`;
