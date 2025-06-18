import { INTEGRATION } from "src/_mock/_integrations";
import Iconify from "src/components/iconify";
import React from "react";
import aiStyles from "src/theme/ai-modern-styles";

import { Box, Card, CardContent, Container, Typography } from "@mui/material";

export default function MarketingIntegrationsList() {
  return (
    <Box sx={aiStyles.containers.aiPage()}>
      <Box sx={aiStyles.floatingElements.primary("5%", "90%", 100)} />
      <Box sx={aiStyles.floatingElements.secondary("10%", "15%", 80)} />
      <Box sx={aiStyles.floatingElements.primary("80%", "85%", 60)} />

      <Container sx={aiStyles.layouts.mainContainer()}>
        <Box sx={{ py: 8 }}>
          <Box sx={aiStyles.layouts.heroSection()}>
            <Typography variant="h2" sx={aiStyles.typography.aiPageTitle()}>
              Seamless AI-Powered
              <br />
              Integrations
            </Typography>

            <Typography
              variant="h6"
              sx={{
                ...aiStyles.typography.sectionSubtitle,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Connect your favorite tools and platforms with our intelligent
              automation system for seamless workflow optimization.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(auto-fit, minmax(140px, 1fr))",
                sm: "repeat(auto-fit, minmax(160px, 1fr))",
                md: "repeat(auto-fit, minmax(180px, 1fr))",
              },
              gap: 3,
              maxWidth: 1400,
              mx: "auto",
              position: "relative",
              ...aiStyles.animationUtils.leftSlideAnimation(0.2),
            }}
          >
            {INTEGRATION.map((integration, index) => (
              <Card
                key={integration.id}
                sx={{
                  position: "relative",
                  ...aiStyles.components.enhancedCard,
                  overflow: "hidden",
                  cursor: "pointer",
                  animation: `${aiStyles.animations.floatAnimation} ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,

                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    animation: `${aiStyles.animations.glowPulse} 2s ease-in-out infinite`,
                    border: "1px solid rgba(99, 102, 241, 0.4)",
                    background: aiStyles.backgrounds.glassMorphism.accent,

                    "&::before": {
                      opacity: 1,
                    },

                    "& .integration-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                    },

                    "& .integration-name": {
                      color: "primary.main",
                    },
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                    transition: "left 0.5s",
                    opacity: 0,
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: aiStyles.backgrounds.gradientText.primary,
                    opacity: 0,
                    transition: "opacity 0.3s",
                  },

                  "&:hover::after": {
                    opacity: 1,
                  },

                  "&:hover::before": {
                    left: "100%",
                    opacity: 1,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    height: 140,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Box
                    className="integration-icon"
                    sx={{
                      mb: 2,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                    }}
                  >
                    <Iconify icon={integration.icon} width={48} height={48} />
                  </Box>

                  <Typography
                    className="integration-name"
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      textAlign: "center",
                      transition: "color 0.3s",
                      color: "text.primary",
                      fontSize: "0.875rem",
                    }}
                  >
                    {integration.name}
                  </Typography>
                </CardContent>

                <Box sx={aiStyles.floatingElements.sparkle()} />
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
