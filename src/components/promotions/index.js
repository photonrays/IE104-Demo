import { createTheme, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";

const messages = ["20% off on your first order!", "New product has arrived!"];

const theme = createTheme({});

export default function Promotions() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      overflow="hidden"
      sx={{
        [theme.breakpoints.up("md")]: {
          padding: "40px 0px 40px 0px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0px 20px 0px",
        overflow: "hidden",
        background: "#9E7676",
      }}
    >
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            sx={{
              fontFamily: '"Montez", "cursive"',
              [theme.breakpoints.up("md")]: {
                fontSize: "3rem",
              },
              color: "#fff",
              fontSize: "1.5rem",
            }}
          >
            {messages[messageIndex]}
          </Typography>
        </Box>
      </Slide>
    </Box>
  );
}
