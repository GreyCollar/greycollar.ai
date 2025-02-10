import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Typography from "@mui/material/Typography";
import { useResponsive } from "src/hooks/use-responsive";

import { alpha, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

  // eslint-disable-next-line no-unused-vars
  const mdUp = useResponsive("up", "md");

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { md: "100vh" },
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="https://cdn.nucleoid.com/media/60d6f6fa-cd94-4a0d-9ecc-764bdea35f84.png"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src="http://cdn.nucleoid.com/media/d5709f50-75cf-445c-b990-729f95199fcb.mp4"
          type="video/mp4"
        />
      </video>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: alpha(theme.palette.background.default, 0.7),
          zIndex: -1,
        }}
      />
      <Container
        sx={{
          mt: 0,
          display: { md: "flex" },
          alignItems: { md: "center" },
          justifyContent: { md: "center" },
          height: { md: `100vh` },
        }}
      >
        <Grid container>
          <Grid
            xs={12}
            md={12}
            lg={12}
            sx={{
              textAlign: { xs: "center", md: "center" },
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "secondary.main" }}
            ></Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Typography
                fontSize={{ xs: 20, sm: 40, md: 60 }}
                sx={{ textShadow: "4px 4px 6px rgba(0,0,0,1)" }}
              >
                Your Supervised AI Colleague
              </Typography>
            </Box>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
