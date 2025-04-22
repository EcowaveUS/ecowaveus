import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const LogoNavbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Link to="/">
        <img
          src="/images/logo-header.png"
          alt="logo"
          style={{ width: "117px", height: "28px" }}
        />
      </Link>
    </Box>
  );
};
