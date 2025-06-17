import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "src/components/iconify";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";

import { alpha, useTheme } from "@mui/material/styles";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ----------------------------------------------------------------------

export default function MarketingLandingPlatformHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg,
          #0a0a0a 0%,
          #1a1a2e 25%,
          #16213e 50%,
          #0f3460 75%,
          #533483 100%)`,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 70%)`,
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          animation: `${float} 6s ease-in-out infinite`,
          opacity: 0.6,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          animation: `${float} 8s ease-in-out infinite`,
          opacity: 0.4,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh", py: 8 }}
        >
          <Grid xs={12} md={6}>
            <Box
              sx={{
                animation: `${slideInUp} 1s ease-out`,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: 42, sm: 52, md: 64 },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  color: theme.palette.text.primary,
                }}
              >
                Supervised AI Agents
                <br />
                for{" "}
                <Box
                  component="span"
                  sx={{
                    position: "relative",
                    color: theme.palette.primary.main,
                    fontWeight: 900,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "100%",
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      borderRadius: 2,
                    },
                  }}
                >
                  Human-AI Collaboration
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Empower your team with intelligent automation that works
                alongside humans, not against them. Experience the future of
                collaborative AI.
              </Typography>

              <Stack
                spacing={3}
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretch", sm: "center" }}
                justifyContent={{ xs: "center", md: "flex-start" }}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Iconify width={24} icon="carbon:rocket" />}
                  onClick={() =>
                    window.location.assign("https://greycollar.ai/docs/")
                  }
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: 16,
                    fontWeight: 600,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                    "&:hover": {
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                      transform: "translateY(-2px)",
                      boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Start Building
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Iconify width={24} icon="devicon:github" />}
                  onClick={() =>
                    window.open(
                      "https://github.com/GreyCollar/GreyCollar",
                      "_blank",
                    )
                  }
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: 16,
                    fontWeight: 600,
                    borderColor: theme.palette.divider,
                    color: theme.palette.text.primary,
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      background: alpha(theme.palette.primary.main, 0.05),
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  View on GitHub
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Box
              sx={{
                animation: `${slideInUp} 1s ease-out 0.3s both`,
                position: "relative",
              }}
            >
              <Card
                sx={{
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: `0 24px 48px ${alpha(theme.palette.common.black, 0.12)}`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      background: alpha(theme.palette.background.neutral, 0.5),
                      borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: "#ff5f57",
                        }}
                      />
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: "#ffbd2e",
                        }}
                      />
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: "#28ca42",
                        }}
                      />
                    </Stack>
                    <Typography
                      variant="caption"
                      sx={{
                        ml: 2,
                        color: theme.palette.text.secondary,
                        fontFamily: "monospace",
                      }}
                    >
                      greycollar.ai
                    </Typography>
                  </Box>

                  <Box sx={{ position: "relative" }}>
                    <video
                      loop
                      autoPlay
                      muted
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                      poster="https://cdn.nucleoid.com/media/thumbnail-1.png"
                    >
                      <source src="https://cdn.nucleoid.com/media/618a935b-9b4b-406c-95b5-7223396b8bc4.mp4" />
                    </video>

                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: alpha(theme.palette.common.white, 0.9),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Iconify
                        icon="carbon:play-filled"
                        width={24}
                        sx={{ color: theme.palette.primary.main, ml: 0.5 }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  p: 2,
                  background: alpha(theme.palette.background.paper, 0.9),
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  borderRadius: 2,
                  animation: `${float} 4s ease-in-out infinite`,
                }}
              >
                <Stack alignItems="center" spacing={0.5}>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    99.9%
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Accuracy
                  </Typography>
                </Stack>
              </Card>

              <Card
                sx={{
                  position: "absolute",
                  bottom: -20,
                  left: -20,
                  p: 2,
                  background: alpha(theme.palette.background.paper, 0.9),
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  borderRadius: 2,
                  animation: `${float} 5s ease-in-out infinite`,
                }}
              >
                <Stack alignItems="center" spacing={0.5}>
                  <Typography variant="h4" color="secondary" fontWeight="bold">
                    24/7
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Monitoring
                  </Typography>
                </Stack>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
