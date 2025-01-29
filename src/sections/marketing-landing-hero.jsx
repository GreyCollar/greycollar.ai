import { alpha, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import Link from "@mui/material/Link";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useResponsive } from "src/hooks/use-responsive";

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
          src="https://cdn.nucleoid.com/media/03f0f590-de87-4733-a66d-5c6476bef9dc.mp4"
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
          mt: 8,
          py: 15,
          display: { md: "flex" },
          alignItems: { md: "center" },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              fontSize={20}
              fontWeight={100}
              variant="overline"
              sx={{ color: "secondary.main" }}
            >
              <Iconify width={22} icon="ph:signature-light" />
              &nbsp;Inspired by Nature
            </Typography>

            <Typography variant="h2" sx={{ my: 2 }}>
              GreyCollar
            </Typography>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="https://cdn.nucleoid.com/media/6ccfe678-176b-4b5b-ae3c-0e506bdc94ba.png"
                width={958}
                height={615}
                sx={{
                  ml: {
                    xs: "-50%",
                    sm: "-50%",
                    md: "-50%",
                    lg: "-50%",
                    xl: "-30%",
                  },
                }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
