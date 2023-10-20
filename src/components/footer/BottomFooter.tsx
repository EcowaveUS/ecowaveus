import styled from 'styled-components'

export const BottomFooter = () => {
  return (
    <BottomWrapper>
      <p>© 2021 Ecowave. All Rights Reserved.</p>
      <p>Privacy Policy</p>
    </BottomWrapper>
  )
}
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem ;
`;
