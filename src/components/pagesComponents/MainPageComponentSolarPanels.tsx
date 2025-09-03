import styled from "styled-components";
import { ContactForm } from "../forms/ContactForm";

interface Props {
  title?: string;
  subtitle?: string;
  content?: string;
  backgroundImage?: string;
}

export const MainPageComponentSolarPanels: React.FC<Props> = ({
  title,
  subtitle,
  content,
  backgroundImage,
}) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <HeaderContainer className="container">
        <HeaderContent>
          {subtitle && <AuxiliarText>{subtitle}</AuxiliarText>}
          <Title style={{ textAlign: "left" }}>{title}</Title>
          <Text style={{ textAlign: "left" }}>{content}</Text>
        </HeaderContent>
        <FormContainer>
          <ContactForm btnColor="#022241" />
        </FormContainer>
      </HeaderContainer>
    </Container>
  );
};

const Container = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* 100% of the viewport height */
  background: url(${(props) => props.backgroundImage}) no-repeat center; /* ver de agregar fixed */
  background-size: cover;
  background-color: #e4ecf6;
  padding-top: 8rem;
  @media (max-width: 1024px) {
    background-position: center center;
    align-items: flex-start;
  }
  @media (max-width: 899px) {
    padding-top: 3rem;
    justify-content: flex-start;
    align-items: flex-start;
    background-position: center center;
    height: fit-content;
    padding-bottom: 1rem;
  }
`;

const HeaderContainer = styled.div<Props>`
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
  @media (min-width: 900px) {
    align-items: center;
    flex-direction: row;
    gap: 40px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  @media (min-width: 900px) {
    width: 50%;
  }
`;
const HeaderContent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  @media (min-width: 900px) {
    width: 50%;
    align-items: flex-start;
  }
`;

const Title = styled.h1<Props>`
  width: 90%;
  align-self: right;
  color: var(--White, var(--fore-allways---white, #fff));
  text-align: right;
  font-family: Inter;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 66px */
  text-align: right;
  @media (max-width: 1024px) {
    font-size: 3rem;
    width: 100%;
  }
`;

const Text = styled.p<Props>`
  width: 90%;
  color: var(--White, var(--fore-allways---white, #fff));
  font-family: Roboto;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 38.4px */
  text-align: right;
`;

const AuxiliarText = styled.p`
  color: var(--fore-allways---white, #fff);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-left: 4px solid #68be54;
  background: rgba(4, 28, 55, 0.5);
  padding: 3px 9px 3px 8px;
  align-self: flex-start;
`;
