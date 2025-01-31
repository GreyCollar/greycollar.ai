import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { useResponsive } from "../hooks/use-responsive";

// ----------------------------------------------------------------------

export default function Chat() {
  const mdUp = useResponsive("up", "md");
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        {mdUp && (
          <video
            src="https://cdn.nucleoid.com/media/af35074b-dbfa-448f-ae18-c6f41441f2ea.mp4"
            controls
          />
        )}
        {!mdUp && (
          <video
            width="100%"
            height="auto"
            src="https://cdn.nucleoid.com/media/af35074b-dbfa-448f-ae18-c6f41441f2ea.mp4"
            controls
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          size="large"
          variant="outlined"
          onClick={() => {
            window.location.assign("https://nucleoid.com/ide/chat");
          }}
          sx={{
            mx: 1,
            textTransform: "none",
            color: "white",
          }}
        >
          Go to Nucleoid Chat
        </Button>
      </Box>
    </Container>
  );
}
