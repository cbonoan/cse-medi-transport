import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D6321F",
      dark: "#A82818",
      light: "#E85C4A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2B2B2E",
      dark: "#1A1A1C",
      light: "#48484C",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0D141C",
      secondary: "#4F7396",
    },
    divider: "rgba(13, 20, 28, 0.08)",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#0D141C",
          borderBottom: "1px solid rgba(13, 20, 28, 0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});
