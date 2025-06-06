import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#ff6e61",
      contrastText: "#fff",
      light: "#ff998f",
      dark: "#c43e32",
    },
    secondary: {
      main: "#016fc9",
      contrastText: "#fff",
      light: "#4fa2f7",
      dark: "#004080",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.58)",
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
