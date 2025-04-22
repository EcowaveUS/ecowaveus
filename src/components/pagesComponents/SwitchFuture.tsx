import { Box, Typography } from "@mui/material";
import { CommonButton } from "../common/CommonButton";
import { useNavigate } from "react-router";
import useWindowWidth from "../../custom-hooks/useWindowWidth";

export const SwitchFuture = () => {
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

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
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        gap: "1rem",
        "@media (max-width: 720px)": {
          padding: "2rem 1.5rem",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
      }}
    >
      {windowWidth > 720 ? (
        <Typography sx={{ textAlign: "center" }} variant="h1">
          Riding the wave off eco- <br />
          innovation
        </Typography>
      ) : (
        <Typography sx={{ textAlign: "left", color: '#fff' }} variant="h3">
          Riding the wave off eco- <br />
          innovation
        </Typography>
      )}
      <Typography
        variant="body1"
        sx={{
          width: "45%",
          textAlign: "center",
          marginBottom: "24px",
          color: "#fff",
          "@media (max-width: 720px)": {
            width: "80%",
            textAlign: "left",
          },
        }}
      >
        Affordable solutions tailored for savings and efficiency.
      </Typography>
      <CommonButton
        onClick={() => navigate("/contact-us")}
        sx={{
          width: `${windowWidth > 720 ? "auto" : "100%"}`,
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
  );
};
