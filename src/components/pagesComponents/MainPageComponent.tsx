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
          <Title pathLocation={pathLocation}>{title}</Title>
          <Text pathLocation={pathLocation}>{content}</Text>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  )
}

const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* 100% of the viewport height */
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderContainer = styled.div<Props>`
  height: auto;
  width: ${props => props.pathLocation === '/ev-chargers' ? '60%' : '75%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props =>
    props.pathLocation === '/heat-pumps'
      ? 'flex-start'
      : props.pathLocation === '/ev-chargers'
      ? 'flex-end'
      :
      'flex-start'
  };
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  gap: 2rem;
`;

const Title = styled.h1<Props>`
  color: var(--fore-allways---white, #FFF);

  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: ${props => props.pathLocation === '/ev-chargers' ? 'right' : 'left'};
`;

const Text = styled.p<Props>`
  color: var(--fore-allways---white, #FFF);

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 151.523%;
  text-align: ${props => props.pathLocation === '/ev-chargers' ? 'right' : 'left'};
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