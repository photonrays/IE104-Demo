import { styled } from "@mui/material/styles";
import { Typography, Box, createTheme, Button } from "@mui/material";

const theme = createTheme({});

const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "600px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

export default function Banner() {
  return (
    // <div>Banner</div>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "0px 0px",
        background: "#e6e6e6",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <BannerImage src="/images/banner/banner3.webp" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 420,
          padding: "30px",
          [theme.breakpoints.down("md")]: {
            lineHeight: 1.15,
            letterSpacing: 1.15,
            margin: "1.5em",
          },
        }}
      >
        <Typography variant="h6">New Flavor</Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Poppins"',
            lineHeight: 1.5,
            fontSize: "72px",
            marginBottom: "20px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "42px",
            },
          }}
        >
          CLOUDFEE
        </Typography>

        <Typography
          variant="subtitle"
          sx={{
            lineHeight: 1.25,
            letterSpacing: 1.25,
            marginBottom: "3em",
            [theme.breakpoints.down("md")]: {
              lineHeight: 1.15,
              letterSpacing: 1.15,
              marginBottom: "1.5em",
            },
          }}
        >
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </Typography>

        <Button
          sx={{
            padding: "20px 0px",
            color: "#fff",
            backgroundColor: "#594545",
            fontWeight: "bold",
            fontSize: "16px",
            [theme.breakpoints.down("sm")]: {
              padding: "10px 0px",
              fontSize: "14px",
            },
          }}
          color="primary"
        >
          Try now
        </Button>
      </Box>
    </Box>
  );
}
