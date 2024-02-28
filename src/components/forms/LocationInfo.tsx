import styled from 'styled-components'
import { SvgTriangles } from '../svg/SvgTriangles';

export const LocationInfo = () => {
  return (
    <LocationWrapper>
      <Triangles>
        <SvgTriangles />
      </Triangles>
      <Title>EcowaveUS, address</Title>
      <CardContainer>
        <SubTitles>Address</SubTitles>
        <Text>12 Broadway</Text>
        <Text> Beverly, MA 01915</Text>
        <Separator />
      </CardContainer>
      <CardContainer>
        <SubTitles>Phone</SubTitles>
        <Text>(978) 500 - 4081</Text>
        <Separator />
      </CardContainer>
      <CardContainer>
        <SubTitles>Email</SubTitles>
        <Text>info@ecowaveus.com</Text>
        <Separator />
      </CardContainer>
      <CardContainer>
        <SubTitles>Address</SubTitles>
        <Text>Monday – Friday: 8:00 AM – 5:00 PM</Text>
        <Text>Saturday – Sunday: Closed</Text>
      </CardContainer>
      <Dots>
        <DotsImg src='/images/dots-form.png' alt='map' />
      </Dots>
    </LocationWrapper>
  )
}
const LocationWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 17.723px 47.261px 0px #DCDCEC;
    width: 40%;
    padding: 34px;
    gap: 24px;
    margin: 5rem;
    @media (max-width: 1024px) {
      width: 70%;
      padding: 1rem;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
`;
const Triangles = styled.div`
  position: absolute;
  top: -4rem;
  left: -1.9rem;
  z-index: -1;
`;
const Dots = styled.div`
  position: absolute;
  bottom: -4rem;
  right: -3rem;
  z-index: -1;
  @media (max-width: 768px) {
    right: -1rem;
  }
`;
const DotsImg = styled.img`
  width: 268px;
  height: 148px;
  flex-shrink: 0;
`;
const Title = styled.h3`
  color: #343434;

  font-family: "Be Vietnam Pro";
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 87.5% */
  letter-spacing: -0.08px;
`;
const SubTitles = styled.h4`
  color: #343434;
  font-family: Roboto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.05px;
`;
const Text = styled.p`
  color: #343434;

  font-family: Roboto;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.05px;
`;
const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E4ECF6;
  margin-top: 16px;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
`;