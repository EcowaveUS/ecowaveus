import { Box, Typography } from "@mui/material";
import { CommonButton } from "../common/CommonButton";
import { useNavigate } from "react-router";

export const SwitchFuture = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundImage: `url("/images/wind-farm.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "16/7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          gap: "1rem",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="h1">
          Riding the wave off eco- <br />
          innovation
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: "45%",
            textAlign: "center",
            marginBottom: "24px",
            color: "#fff",
          }}
        >
          Affordable solutions tailored for savings and efficiency.
        </Typography>
        <CommonButton
          onClick={() => navigate("/contact-us")}
          sx={{
            backgroundColor: "#198400",
            padding: "12px 20px",
            color: "#fff",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: "1%",
            borderRadius: "50px",
          }}
        >
          Schedule now
        </CommonButton>
      </Box>
    </Box>
  );
};
