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
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;
const Bottomtext = styled.p`
color: #343434;
text-align: center;
font-family: Be Vietnam Pro;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 175% */
opacity: 0.6;
`;
