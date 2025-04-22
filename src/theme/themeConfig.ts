import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#00ff00",
    },
  },
  typography: {
    h1: {
      fontFamily: "InterExtraBold",
      fontSize: "76px",
      lineHeight: 1.3,
      letterSpacing: "0.02em",
    },
    h3: {
      fontFamily: "InterExtraBold",
      fontSize: "48px",
      lineHeight: "58px",
      color: "#252529",
    },
    h4: {
      fontFamily: "InterMedium",
      fontSize: "24px",
      lineHeight: "40px",
      color: "#252529",
    },
    h5: {
      fontFamily: "InterExtraBold",
      fontSize: "20px",
      lineHeight: "28px",
      color: "#252529",
    },
    h6: {
      fontFamily: "InterMedium",
    },
    body1: {
      fontFamily: "InterLight",
      fontSize: "20px",
    },
    body2: {
      fontFamily: "InterLight",
      fontSize: "16px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "44px",
          borderRadius: "16px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #C6C6CC",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #C6C6CC",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #C6C6CC",
          },
          "& .css-ihdtdm": {
            display: "none",
          },
        },
        input: {
          borderRadius: "16px",
          fontSize: "16px",
        },
      },
    },
  },
});
