'use client'

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#6B7280" },   // gray-500
    background: {
      default: "#F3F4F6",          // gray-100
      paper: "#FFFFFF"
    },
    text: {
      primary: "#1F2937",          // gray-800
      secondary: "#6B7280"         // gray-500
    }
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none" }
      }
    }
  }
});

export default theme;