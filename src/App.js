import { Container, Stack } from "@mui/material";
import Appbar from "./components/Appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <Appbar />
          <Banner />
          <Products />
          <Footer />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
