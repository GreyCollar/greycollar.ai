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
        loop
        preload="auto"
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
          src="https://cdn.nucleoid.com/media/f8b1743d-04d3-4d5c-aecc-e0193b764404.mp4"
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
            <Typography
              fontSize={60}
              sx={{ textShadow: "4px 4px 6px rgba(0,0,0,1)" }}
            >
              Your Supervised AI Colleague
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
