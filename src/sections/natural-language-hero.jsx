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
import { bgGradient } from "src/theme/css";
import { useResponsive } from "src/hooks/use-responsive";

import { alpha, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function NaturalLanguageHero() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_1.jpg",
        }),
        overflow: "hidden",
      }}
    >
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
              mt: 4,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Neuro-Symbolic AI
            </Typography>

            <Typography variant="h2" sx={{ my: 2 }}>
              Coding with
              <br />
              Natural Language
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              Declarative Logic with{" "}
              <Link href="https://nucleoid.com/docs">D(L)RE</Link> in ubiquitous
              syntax
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "center", md: "unset" }}
              justifyContent={{ xs: "center", md: "unset" }}
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                color="inherit"
                size="large"
                startIcon={<Iconify width={24} icon="carbon:document" />}
                onClick={() =>
                  window.location.assign("https://nucleoid.com/docs/")
                }
              >
                Go to Docs
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: "h6" }}
              >
                <Fab
                  size="medium"
                  sx={{ mr: 1 }}
                  onClick={() =>
                    window.location.assign("https://nucleoid.com/ide/chat")
                  }
                >
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                Try it out
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="https://cdn.nucleoid.com/media/2fa38753-6e6e-4498-850d-dd72a71b8a5f.png"
                width={958}
                height={716}
                sx={{
                  ml: {
                    xs: "-50%",
                    sm: "-50%",
                    md: "-50%",
                    lg: "-30%",
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
