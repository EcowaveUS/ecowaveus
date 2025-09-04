import styled from "styled-components";
import { ContactForm } from "../forms/ContactForm";
import { Button, Theme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

interface Props {
  title?: string;
  subtitle?: string;
  content?: string;
  pathLocation?: string;
  backgroundImage?: string;
}

export const MainPageComponentEvChargers: React.FC<Props> = ({
  title,
  subtitle,
  content,
  pathLocation,
  backgroundImage,
}) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const navigate = useNavigate();
  return (
    <Container backgroundImage={backgroundImage}>
      <HeaderContainer pathLocation={pathLocation} className="container">
        <HeaderContent pathLocation={pathLocation}>
          {subtitle && <AuxiliarText>{subtitle}</AuxiliarText>}
          <Title pathLocation={pathLocation} style={{ textAlign: "left" }}>
            {title}
          </Title>
          <Text pathLocation={pathLocation} style={{ textAlign: "left" }}>
            {content}
          </Text>
          <Button
            sx={{
              marginTop: isDesktop ? "24px" : "32px",
              backgroundColor: "#198400",
              color: "white",
              borderRadius: "999px",
              padding: "12px 20px",
              width: isDesktop ? "320px" : "100%",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              cursor: "pointer",
              transition: "background 0.3s ease",
              border: "none",
              fontFamily: "Inter !important",
              letterSpacing: "1% !important",
              "&:hover": { backgroundColor: "#198400" },
            }}
            onClick={() => navigate("/contact-us#contact-form")}
          >
            Schedule now
          </Button>
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
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 800px;
  background: url(${(props) => props.backgroundImage}) no-repeat center; /* ver de agregar fixed */
  background-size: cover;
  background-color: #e4ecf6;
  padding-top: 8rem;
  @media (max-width: 1024px) {
    background-position: center center;
    align-items: ${(props) =>
      props.pathLocation === "/ev-chargers" ? "flex-start" : "center"};
  }
  @media (max-width: 899px) {
    padding-top: 3rem;
    justify-content: flex-start;
    align-items: flex-start;
    background-position: center center;
    height: fit-content;
    padding-bottom: 2rem;
  }
`;

const HeaderContainer = styled.div<Props>`
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
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
  text-align: ${(props) =>
    props.pathLocation === "/ev-chargers" ? "right" : "left"};
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
  text-align: ${(props) =>
    props.pathLocation === "/ev-chargers" ? "right" : "left"};
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
