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
  typography: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
        },
      },
    },
  },
});
