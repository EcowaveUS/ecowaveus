import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const BottomFooter = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      <Typography variant='body2' color="#fff">
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
  );
};
