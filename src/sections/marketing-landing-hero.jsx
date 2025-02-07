import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import Image from "src/components/image";
import React from "react";
import Typography from "@mui/material/Typography";
import { useResponsive } from "src/hooks/use-responsive";

import { alpha, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

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
          src="/assets/048a1e78-e374-4237-839c-e0441a194c0d.mp4"
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
          backgroundColor: alpha(theme.palette.background.default, 0.9),
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
            >

            </Typography>
            <Typography fontSize={60}>
              Your Supervised AI Colleague
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>

            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
