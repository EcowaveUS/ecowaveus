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
        <HeaderContent pathLocation={pathLocation}>
          {subtitle && <AuxiliarText>{subtitle}</AuxiliarText>}
          <Title pathLocation={pathLocation}>{title}</Title>
          <Text pathLocation={pathLocation}>{content}</Text>
        </HeaderContent>
      </HeaderContainer>
    </Container>
  )
}


const Container = styled.div<Props>`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* 100% of the viewport height */
  background: url(${props => props.backgroundImage}) no-repeat center; /* ver de agregar fixed */
  background-size: cover;
  background-color: #E4ECF6;
  padding-top: 8rem;
  @media (max-width: 1024px) {
    background-position: center center;
    align-items: ${props => props.pathLocation === '/ev-chargers' ? 'flex-start' : 'center'};
  }
  @media (max-width: 768px) {
    padding-top: 12rem;
    justify-content: flex-start;
    align-items: flex-start;
    background-position: center center;
    height: 1164px;
  }
`;

const HeaderContainer = styled.div<Props>`
  height: auto;
  width: ${props => props.pathLocation === '/ev-chargers' ? '75%' : '75%'};
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  align-items: ${props =>
    props.pathLocation === '/heat-pumps'
      ? 'flex-start'
      : props.pathLocation === '/ev-chargers'
      ? 'flex-end'
      : props.pathLocation === '/energy-storage'
      ? 'flex-start'
      : 'center'
  };
  @media (max-width: 1024px) {
    width: 95%;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;
const HeaderContent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.pathLocation === '/ev-chargers' ? 'flex-end' : 'flex-start'};
  width: 70%;
  gap: 1rem;
  @media (max-width: 1024px) {
    width: 90%;
    align-items: center;
  }
`;

const Title = styled.h1<Props>`
width: 90%;
align-self: right;
color: var(--White, var(--fore-allways---white, #FFF));
text-align: right;
font-family: Inter;
font-size: 4rem;
font-style: normal;
font-weight: 700;
line-height: 110%; /* 66px */
text-align: ${props => props.pathLocation === '/ev-chargers' ? 'right' : 'left'};
@media (max-width: 1024px) {
  font-size: 3rem;
  width: 100%;
}

`;

const Text = styled.p<Props>`
  width: 90%;
  color: var(--White, var(--fore-allways---white, #FFF));
  font-family: Roboto;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 38.4px */
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
  align-self: flex-start;
`;