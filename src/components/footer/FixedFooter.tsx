import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FixedFooter = () => {
  return (
    <Container>
      <ItemContainer component={Link} to={"/contact-us#contact-form"}>
        <ItemIcon src={"/images/icons/icon-book.svg"} />
        <ItemText>Book</ItemText>
      </ItemContainer>
      <ItemContainer component={Link} to="tel:+19785004081">
        <ItemIcon src={"/images/icons/icon-call.svg"} />
        <ItemText>Call</ItemText>
      </ItemContainer>
      <ItemContainer
        component={Link}
        sx={{ borderRight: "none" }}
        to="mailto:info@ecowaveus.com"
      >
        <ItemIcon src={"/images/icons/icon-email.svg"} />
        <ItemText>Email</ItemText>
      </ItemContainer>
    </Container>
  );
};

const Container = styled(Box)`
  position: fixed;
  height: 60px;
  background-color: #022241;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 100;
  border-radius: 10px 10px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ffffff1a;
`;

const ItemContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right: 2px solid #ffffff1a;
`;

const ItemText = styled(Typography)`
  color: white;
  font-family: Inter !important;
  font-weight: 700 !important;
  font-size: 13px !important;
`;

const ItemIcon = styled("img")`
  width: 18px;
  height: 18px;
`;
