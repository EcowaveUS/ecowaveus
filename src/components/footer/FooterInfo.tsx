import { Box, Typography } from "@mui/material";

const textStyle = {
  color: "#fff",
  fontFamily: "InterLight",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px", /* 125% */
  opacity: 0.8,
}

export const FooterInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      <Typography variant="body2" color="#ffffff" fontWeight={700}>
        Hours
      </Typography>
      <Typography sx={textStyle}>
        Mon - Fri 8:00 AM - 5:00 PM <br /> Sat - Sun Closed
      </Typography>
      <Typography variant="body2" color="#ffffff" fontWeight={700}>
        Local Office
      </Typography>
      <Typography sx={textStyle}>
        22 Broadway,
      </Typography>
      <Typography sx={textStyle}>Beverly, MA, 01915</Typography>
    </Box>
  );
};
