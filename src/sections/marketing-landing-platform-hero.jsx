import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "src/components/iconify";
import Link from "@mui/material/Link";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { bgGradient } from "src/theme/css";
import { alpha, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function MarketingLandingPlatformHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_3.jpg",
        }),
        overflow: "hidden",
      }}
    >
      <Container>
        <Grid
          container
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item>
            <Typography
              sx={{
                mt: 12,
                fontSize: { xs: 36, md: 48 },
                fontWeight: 400,
              }}
            >
              Supervised AI Agents
              <br />
              for&nbsp;
              <Link href="https://github.com/GreyCollar/GreyCollar">
                Human-AI Collabs
              </Link>
              🤝
            </Typography>
            <Stack
              spacing={3}
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "center", md: "center" }}
              justifyContent={{ xs: "center", md: "center" }}
              sx={{
                mt: 2,
                mb: 3,
              }}
            >
              <Button
                variant="contained"
                color="inherit"
                size="medium"
                startIcon={<Iconify width={24} icon="carbon:document" />}
                onClick={() =>
                  window.location.assign("https://greycollar.ai/docs/")
                }
              >
                Go to Docs
              </Button>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: "h6", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/GreyCollar/GreyCollar",
                    "_blank",
                  )
                }
              >
                <Fab size="small" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="devicon:github" />
                </Fab>
                GitHub
              </Stack>
            </Stack>
          </Grid>
          <Grid item>
            <img
              style={{
                display: "block",
                width: "100%",
                maxWidth: "800px",
                height: "15px",
                borderRadius: "3px 3px 0px 0px",
              }}
              src="https://cdn.nucleoid.com/media/frame.png"
              alt="Frame"
            />
            <video
              loop
              autoPlay
              muted
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                maxWidth: "800px",
                borderColor: "#464646",
                borderStyle: "solid",
                borderWidth: "0px 1px 1px 2px",
                background: "#464646",
                boxShadow: "12px 12px 8px rgba(0, 0, 0, 0.3)",
              }}
              poster="https://cdn.nucleoid.com/media/thumbnail-1.png"
            >
              <source src="https://cdn.nucleoid.com/media/618a935b-9b4b-406c-95b5-7223396b8bc4.mp4" />
            </video>
            <br />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
