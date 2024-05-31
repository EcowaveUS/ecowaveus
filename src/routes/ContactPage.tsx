import styled from "styled-components";
import { ContactForm } from "../components/forms/ContactForm";
import { LocationInfo } from "../components/forms/LocationInfo";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export const ContactPage = () => {
  return (
    <StyledPage
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>
          Contact ecoWave | Solar Power and Renewable Energy Services
        </title>
        <meta
          name="description"
          content="Our solar installation company in Beverly specializes in energy storage, solar panels, EV charging station installations, and more. Find out how you can save!"
        />
      </Helmet>
      <BackgroundComponent></BackgroundComponent>
      <Title>Contact Us</Title>
      <WrapperComponents>
        <LocationInfo />
        <ContactForm />
      </WrapperComponents>
    </StyledPage>
  );
};

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8rem;
  padding-top: 9rem;
`;
const BackgroundComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 904px; /* 100% of the viewport height */
  background-image: url("/images/contact-us-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: -58rem;
  z-index: -1;
  @media (max-width: 1024px) {
    background-position: 50% 50%;
    background-size: cover;
  }
`;
const WrapperComponents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  background-color: #fff;
  box-shadow: 0px 4px 24px 0px rgba(39, 39, 42, 0.08);
  border-radius: 16px;
  padding: 2rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
  }
`;
const Title = styled.h1`
  color: var(--fore-allways---white, #fff);

  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: left;
  width: 80%;
  margin: 18rem 0 2rem 0;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
