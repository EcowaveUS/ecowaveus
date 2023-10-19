import styled from 'styled-components'

export const CustormerFirtsComponent = () => {
  return (
    <StyledWrapper>
      <h1>A Customer-Prioritized Company</h1>
      <h3>Why We're The First Choice</h3>
      <ListWrapper>
        <li>
          <LiwWrapper>
            <StyledIcon src='/src/assets/images/logo-ecowave.png' alt='logo-ecowave' />
            <p>Quality Technicians & Brands</p>
          </LiwWrapper>
        </li>
        <li>
          <LiwWrapper>
            <StyledIcon src='/src/assets/images/logo-ecowave.png' alt='logo-ecowave' />
            <p>Preventative Maintenance Plans</p>
          </LiwWrapper>
        </li>
        <li>
          <LiwWrapper>
            <StyledIcon src='/src/assets/images/logo-ecowave.png' alt='logo-ecowave' />
            <p>Local & Community Involved</p>
          </LiwWrapper>
        </li>
        <li>
          <LiwWrapper>
            <StyledIcon src='/src/assets/images/logo-ecowave.png' alt='logo-ecowave' />
            <p>We're On Time for Appointments</p>
          </LiwWrapper>
        </li>
        <li>
          <LiwWrapper>
            <StyledIcon src='/src/assets/images/logo-ecowave.png' alt='logo-ecowave' />
            <p>24 Hour Emergency Service</p>
          </LiwWrapper>
        </li>
        <li>
          <LiwWrapper>
            <StyledIcon src='/src/assets/images/logo-ecowave.png' alt='logo-ecowave' />
            <p>BBB A+ Rated + 5 Star Reviews</p>
          </LiwWrapper>
        </li>
        <li>
          <LiwWrapper>
            <StyledIcon src='/src/assets/images/logo-ecowave.png' alt='logo-ecowave' />
            <p>In Business Since 1998</p>
          </LiwWrapper>
        </li>
        <li>
          <LiwWrapper>
            <StyledIcon src='/src/assets/images/logo-ecowave.png' alt='logo-ecowave' />
            <p>Free Estimates Available</p>
          </LiwWrapper>
        </li>
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