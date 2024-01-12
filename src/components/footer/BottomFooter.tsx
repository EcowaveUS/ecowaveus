import styled from 'styled-components'

export const BottomFooter = () => {
  return (
    <BottomWrapper>
      <Bottomtext>
        © 2021 Ecowave. All Rights Reserved.
      </Bottomtext>
    </BottomWrapper>
  )
}
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem ;
`;
const Bottomtext = styled.p`
color: #343434;

font-family: Be Vietnam Pro;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 175% */
opacity: 0.6;

`;
