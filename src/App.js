import {Routing} from "./routing";
import "./index.css";
import { TopTheme } from "./theme";
import { ThemeProvider } from "@mui/material";



function App() {
  return (
  <div
    style={{
      backgroundColor: "#212121",
      minHeight: "100vh",
    }}
  >
    <ThemeProvider theme={TopTheme}>
      <Routing />
    </ThemeProvider>
  </div>
  );
}

export default App;
