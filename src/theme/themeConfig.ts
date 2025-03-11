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
    h6:{
      fontFamily: 'InterMedium',
    },
    body1:{
      fontFamily: 'InterMedium',
      fontSize: '0.95rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
        },
      },
    },
  },
});
