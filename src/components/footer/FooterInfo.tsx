import { Typography } from "@mui/material";
import styled from "styled-components";

export const FooterInfo = () => {
  return (
    <InfoWrapper>
      <Typography variant="body2" color="#ffffff" fontWeight={700}>
        Hours
      </Typography>
      <InfoText>
        Mon - Fri 8:00 AM - 5:00 PM <br /> Sat - Sun Closed
      </InfoText>
      <Title>Local Office</Title>
      <InfoText>22 Broadway,</InfoText>
      <InfoText>Beverly, MA, 01915</InfoText>
    </InfoWrapper>
  );
};
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const Title = styled.h5`
  color: #fff;

  font-family: Be Vietnam Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
const InfoText = styled.p`
  color: #fff;

  font-family: InterLight;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  opacity: 0.8;
`;
