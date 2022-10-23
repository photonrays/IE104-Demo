import { Container, Typography, Box, Stack } from "@mui/material";
import ResponsiveAppBar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import Banner from "./components/banner";
import Products from "./components/product";
import Footer from "./components/footer";
import Promotions from "./components/promotions";
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
          <ResponsiveAppBar />
          <Banner />
          {/* <Promotions /> */}
          <Products />
          <Footer />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
