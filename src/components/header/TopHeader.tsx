import React from 'react'
import styled from 'styled-components'

export const TopHeader = () => {
  return (
    <TopHeaderWrapper>TopHeader</TopHeaderWrapper>
  )
}

const TopHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(9, 18, 66, 0.30);
  position: absolute;
`;