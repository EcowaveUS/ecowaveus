import styled from 'styled-components'

export const BottomFooter = () => {
  return (
    <BottomWrapper>
      <Bottomtext>© 2021 Ecowave. All Rights Reserved.</Bottomtext>
      <Bottomtext>Privacy Policy</Bottomtext>
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
const Bottomtext = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #B5B5B5;

`;
