import styled from "styled-components";
import { ContactForm } from "../components/forms/ContactForm";
import { LocationInfo } from "../components/forms/LocationInfo";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Box, Theme, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";

export const ContactPage = () => {
  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      setTimeout(() => {
        contactFormRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  const contactFormRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  return (
    <StyledPage
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Contact EcowaveUS | Get a Free Heat Pump Quote</title>
        <meta
          name="description"
          content="Contact EcowaveUS for free estimates on heat pumps, solar, EV chargers & energy storage in Beverly, MA. Expert installation & Mass Save rebates. Call 978-500-4081!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ecowaveus.com/contact-us" />
      </Helmet>
      <BackgroundComponent></BackgroundComponent>
      <Title>Contact Us</Title>
      <WrapperComponents>
        <LocationInfo />
        <Box
          component={"div"}
          ref={contactFormRef}
          sx={{ scrollMarginTop: isDesktop ? "120px" : "80px" }}
        >
          <ContactForm />
        </Box>
      </WrapperComponents>
    </StyledPage>
  );
};

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 8rem;
  padding-bottom: 4rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
`;
const BackgroundComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/images/contact-us-background-2.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  
  @media (max-width: 768px) {
    height: 100%;
    min-height: 100vh;
    position: absolute;
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
  gap: 24px;
  margin-bottom: 4rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    margin-bottom: 3rem;
  }
  @media (max-width: 360px) {
    width: 95%;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const Title = styled.h1`
  color: var(--fore-allways---white, #fff);
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  width: 80%;
  margin: 2rem 0 2rem 0;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 90%;
    font-size: 2.5rem;
    margin: 2rem 0 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 1.5rem 0 1rem 0;
  }
  
  @media (max-width: 375px) {
    font-size: 1.8rem;
    margin: 1rem 0 1rem 0;
  }
`;
