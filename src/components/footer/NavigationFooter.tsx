import { Box, Collapse, Theme, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavProps {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
  clickable?: boolean;
}

export const NavigationFooter: React.FC<NavProps> = ({
  title,
  links,
  clickable = false,
}) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [open, setOpen] = useState(true);
  return (
    <Box
      component={"div"}
      display={"flex"}
      flexDirection={"column"}
      gap={isDesktop ? "24px" : "16px"}
    >
      <Typography
        fontSize={"14px"}
        color="#ffffff"
        fontWeight={700}
        sx={{ cursor: isDesktop ? "default" : "pointer" }}
        onClick={() => setOpen(!open)}
      >
        {title}
      </Typography>
      <Collapse in={isDesktop || open} timeout="auto" unmountOnExit>
        <Box
          component={"div"}
          display={"flex"}
          flexDirection={"column"}
          gap={"16px"}
        >
          {links.map((link, index) => (
            <Box key={index} fontSize={"14px"} color="#ffffff" fontWeight={400}>
              {clickable ? (
                <Link to={link.url}>{link.text}</Link>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: link.text }} />
              )}
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
