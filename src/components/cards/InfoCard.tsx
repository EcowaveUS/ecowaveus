import { Box, Typography } from "@mui/material";
import styled from "styled-components";

interface Props {
  title: string;
  content?: string;
  icon: JSX.Element;
}
interface StyledProps {
  content?: string;
}
export const InfoCard: React.FC<Props> = ({ title, content, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",

      }}
    >
      {icon}
      <Box>
        <Typography
          variant="body2"
          component={"p"}
          sx={{
            color: "#1c1f35",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "135.023%", /* 18.903px */
          }}
        >
          {title}
        </Typography>
        <Text content={content}>{content}</Text>
      </Box>
    </Box>
  );
};


const Text = styled.p<StyledProps>`
  color: #1c1f35;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 135.023%; /* 18.903px */
`;
