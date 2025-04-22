import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

interface NavProps {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

export const NavigationFooter: React.FC<NavProps> = ({ title, links }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "1.5rem",

      }}
    >
      <Typography
        variant="body2"
        color="#ffffff"
        fontWeight={700}
      >
          {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.5rem",
          paddingRight: "5rem",
          '& > li': {
            listStyle: "none",
            color: "#ffffff",
            fontFamily: "InterLight",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20px", /* 125% */
            opacity: 0.8,
            textDecoration: "none",
          },
        }}
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </Box>
    </Box>
  );
};
