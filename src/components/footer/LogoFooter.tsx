import { Box, Typography, useMediaQuery, Theme } from "@mui/material";
import logoFooter from "../../assets/images/logo-footer.png";
import { Link } from "react-router-dom";

export const LogoFooter = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: isDesktop ? "24px" : "12px",
      }}
    >
      <Link to="/">
        <img src={logoFooter} height={"auto"} width={"183px"} />
      </Link>
      <Typography fontSize="16px" fontFamily={"500"} color="#79C966">
        Riding the wave of Eco-Innovation
      </Typography>
    </Box>
  );
};
