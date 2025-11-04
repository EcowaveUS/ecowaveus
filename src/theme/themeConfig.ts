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
      fontFamily: 'Inter',
      fontWeight: 800,
      fontSize: '76px',
      lineHeight: 1.3,
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: 'Inter',
      fontWeight: 800,
      fontSize: '48px',
      lineHeight: '58px',
      color:'#252529'
    },
    h4: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '40px',
      color:'#252529'
    },
    h5: {
      fontFamily: 'Inter',
      fontWeight: 800,
      fontSize: '20px',
      lineHeight: '28px',
      color:'#252529'
    },
    h6:{
      fontFamily: 'Inter',
      fontWeight: 500,
    },
    body1:{
      fontFamily: 'Inter',
      fontWeight: 300,
      fontSize: '20px',
    },
    body2:{
      fontFamily: 'Inter',
      fontWeight: 300,
      fontSize: '16px',
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
  },
});
