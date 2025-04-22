import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const BottomFooter = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem 0",
        '@media (max-width: 1024px)': {
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          margin: '0.5rem 0',
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color="#fff"
          sx={{
            fontSize: '14px'
          }}
        >
          © 2021 Ecowave. All Rights Reserved.
        </Typography>
        <Box>
          <Button
            onClick={() => navigate("/privacy-policy")}
            variant={"text"}
            sx={{
              textTransform: "none",
              fontFamily: "InterMedium",
              fontSize: "0.8rem",
              textDecoration: "underline",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
                backgroundColor: "transparent",
                color: "#ababab",
              },
            }}
          >
            Privacy Policy
          </Button>
          <Button
            onClick={() => navigate("/terms-and-conditions")}
            variant={"text"}
            sx={{
              textTransform: "none",
              fontFamily: "InterMedium",
              fontSize: "0.8rem",
              textDecoration: "underline",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
                backgroundColor: "transparent",
                color: "#ababab",
              },
            }}
          >
            Terms and Conditions
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "32px",
            height: "32px",
          }}
        >
          <img
            src="/src/assets/icons/Icon-ig.png"
            alt="logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            width: "32px",
            height: "32px",
          }}
        >
          <img
            src="/src/assets/icons/Icon-facebook.png"
            alt="logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            width: "32px",
            height: "32px",
          }}
        >
          <img
            src="/src/assets/icons/Icon-facebook.png"
            alt="logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
