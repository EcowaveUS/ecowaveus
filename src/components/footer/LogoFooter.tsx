import { Box, Typography } from "@mui/material";
import logoFooter from "../../assets/images/logo-footer.png";

export const LogoFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 3,
        padding: '2rem 0 0 0',
        height: "auto",
      }}
    >
      <img src={logoFooter} style={{ width: "183px", height: "43" }} />
      <Typography variant="body2" color="#79C966">
        Riding the wave of Eco-Innovation
      </Typography>
    </Box>
  );
};

