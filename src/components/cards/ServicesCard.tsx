import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

interface CardProps {
  title: string;
  content: string;
  url: string;
  icon?: string;
}

export const ServicesCard: React.FC<CardProps> = ({
  title,
  content,
  icon,
  url,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        width: "263px",
        height: "auto",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#FFFFFF",
        borderRadius: "15px",
        border: "1px solid #EAEAEA",
        gap: "24px",
        padding: "32px",
      }}
    >
      <Box
        sx={{
          width: "64px",
          height: "64px",
        }}
      >
        <img
          src={icon}
          style={{ width: "100%", height: "100%" }}
          alt="Protecte cloud"
        />
      </Box>
      <Box>
        <Typography sx={{paddingBottom:'16px'}} variant="h5">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </Box>
      <Button
        variant="text"
        onClick={() => navigate(url)}
        sx={{
          color: "#0B6BD9",
          textDecoration: "underline",
          fontFamily: "Inter",
          "&:hover": {
            background: "transparent",
            textDecoration: "underline",
          },
        }}
      >
        Learn more
      </Button>
    </Box>
  );
};

