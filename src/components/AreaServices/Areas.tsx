import { Box, Divider, Typography } from "@mui/material";
import locationsImage from "../../assets/images/locations-background.png";

const Areas = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        backgroundImage: `url(${locationsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "19/7",
        padding: "0 4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "24px",
          width: "45%",
          paddingLeft: "4rem",
        }}
      >
        <Typography variant="h3" color="#fff">
          Service Areas
        </Typography>
        <Divider
          sx={{ width: "85%", backgroundColor: "#fff", height: "1px" }}
        />
        <Typography variant="body1" color="#fff">
          North Shore of Massachusetts
        </Typography>
        <Typography variant="body2" color="#fff">
          Beverly | Manchester-by-the-Sea | Hamilton | Essex | Gloucester
          Marblehead | Wenham | Ipswich | Lynnfield
        </Typography>
      </Box>
    </Box>
  );
};

export default Areas;
