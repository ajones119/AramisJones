import { createTheme, responsiveFontSizes } from "@mui/material";
import { lime, green } from "@mui/material/colors";

export const TopTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: lime[50],
      },
      secondary: {
        main: green[700],
      },
    },
  })
);
