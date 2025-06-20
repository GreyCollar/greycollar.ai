import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Iconify from "src/components/iconify";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { generateRandomDarkGradient } from "src/utils/background-generator";
import { keyframes } from "@mui/system";

import { alpha, useTheme } from "@mui/material/styles";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
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

export default function MarketingLandingPlatformHero() {
  const theme = useTheme();

  const backgroundGradient = generateRandomDarkGradient();

  return (
    <Box
      sx={{
        background:
          backgroundGradient ||
          `linear-gradient(135deg,
          #1A0836 0%,
          #0F0320 25%,
          #0F2732 50%,
          #103035 75%,
          #1A0836 100%)`,
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: 8 }}>
        <Stack
          spacing={6}
          alignItems="center"
          sx={{ minHeight: "100vh", justifyContent: "center" }}
        >
          <Box
            sx={{
              animation: `${slideInUp} 1s ease-out`,
              textAlign: "center",
              width: "100%",
              maxWidth: 800,
              mx: "auto",
              mt: 3,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 38, sm: 42, md: 42 },
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
                Human-AI Collabs
              </Box>
              🤝
            </Typography>

            <Typography
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: { xs: 18, sm: 20, md: 22 },
              }}
            >
              &quot;Hallucination Control&quot; by Human-in-the-Loop
              Human-in-the-Loop
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                startIcon={
                  <Iconify
                    width={24}
                    icon="devicon:github"
                    sx={{ color: "white" }}
                  />
                }
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
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  boxShadow: `0 8px 24px ${alpha(
                    theme.palette.primary.main,
                    0.3,
                  )}`,
                  "&:hover": {
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                    transform: "translateY(-2px)",
                    boxShadow: `0 12px 32px ${alpha(
                      theme.palette.primary.main,
                      0.4,
                    )}`,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Star us on GitHub
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Iconify width={24} icon="lucide:book-open" />}
                onClick={() =>
                  window.location.assign("https://greycollar.ai/docs/")
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
                Go to Docs
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              animation: `${slideInUp} 1s ease-out 0.3s both`,
              position: "relative",
              width: "100%",
              maxWidth: 900,
              mx: "auto",
            }}
          >
            <Card
              sx={{
                background: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: "blur(20px)",
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: `0 24px 48px ${alpha(
                  theme.palette.common.black,
                  0.12,
                )}`,
                position: "relative",
              }}
            >
              <CardContent
                sx={{
                  p: 0,
                  "&:last-child": {
                    paddingBottom: "0px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    py: 1,
                    background: alpha(theme.palette.background.neutral, 0.5),
                    borderBottom: `1px solid ${alpha(
                      theme.palette.divider,
                      0.1,
                    )}`,
                  }}
                ></Box>

                <Box sx={{ position: "relative" }}>
                  <video
                    loop
                    autoPlay
                    muted
                    style={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      maxHeight: "520px",
                      objectFit: "cover",
                    }}
                    poster="https://cdn.nucleoid.com/media/thumbnail-1.png"
                  >
                    <source src="https://cdn.nucleoid.com/media/618a935b-9b4b-406c-95b5-7223396b8bc4.mp4" />
                  </video>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
