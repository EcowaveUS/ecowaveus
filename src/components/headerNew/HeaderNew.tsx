import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { FaEnvelope, FaPhone, FaRegClock } from "react-icons/fa";
import styled from "styled-components";

export const HeaderNew = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      component={"div"}
      bgcolor={"#01162C"}
      sx={{ display: isDesktop ? "block" : "none" }}
    >
      <Box
        component={"div"}
        className="container"
        height={"40px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"end"}
        gap={"24px"}
      >
        <InfoContainer>
          <IconContainer>
            <FaRegClock size={13} color={"#FFFFFF"} />
          </IconContainer>
          <InfoText>Mon - Fri 8:00AM - 5:00PM</InfoText>
        </InfoContainer>
        <InfoContainer>
          <IconContainer>
            <FaEnvelope size={13} color={"#FFFFFF"} />
          </IconContainer>
          <InfoText>info@ecowaveus.com</InfoText>
        </InfoContainer>
        <InfoContainer>
          <IconContainer>
            <FaPhone size={13} color={"#FFFFFF"} />
          </IconContainer>
          <InfoText>(978) 500 4081</InfoText>
        </InfoContainer>
      </Box>
    </Box>
  );
};

const InfoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: "4px",
});

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
});

const InfoText = styled(Typography)({
  fontSize: "12px !important",
  fontWeight: "600 !important",
  color: "#FFFFFF",
});
