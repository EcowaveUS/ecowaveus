import React from 'react'
import styled from 'styled-components'

interface Props {
  title?: string
  subtitle?: string
  content?: string
  pathLocation?: string
  backgroundImage?: string
}

export const MainPageComponent: React.FC<Props> = ({
  title,
  subtitle,
  content,
  pathLocation,
  backgroundImage
}) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <HeaderContainer pathLocation={pathLocation}>
        <HeaderContent>
          {subtitle && <AuxiliarText>{subtitle}</AuxiliarText>}
          <Title>{title}</Title>
          <Text>{content}</Text>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  )
}

const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 100vh; /* 100% of the viewport height */
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position:0 7rem;
`;

const HeaderContainer = styled.div<Props>`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.pathLocation === '/heat-pumps'
      ? 'flex-start'
      : props.pathLocation === '/ev-chargers'
      ? 'flex-end'
      :
      'center'
  };
  margin-top: 5rem;
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  margin-left: 6rem;
  margin-right: 12rem;
  gap: 1rem;
`;

const Title = styled.h1`
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: left;
`;

const Text = styled.p`
  color: var(--fore-allways---white, #FFF);

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%;
`;
const AuxiliarText = styled.p`
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-left: 4px solid #68BE54 ;
  background: rgba(4, 28, 55, 0.50);
  padding: 3px 9px 3px 8px;
`;