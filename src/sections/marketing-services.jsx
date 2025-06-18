import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import aiStyles from "src/theme/ai-modern-styles";

import { alpha, useTheme } from "@mui/material/styles";

const LISTS = [
  {
    icon: "material-symbols:auto-awesome",
    text: "Autonomous Workflow: An AI agent gathers information, processes it, and takes actions to achieve goals, adjusting to its environment as needed.",
  },
  {
    icon: "material-symbols:psychology",
    text: "Supervised learning: Enhances decision-making by learning from labeled data to recognize patterns and make accurate predictions.",
  },
  {
    icon: "material-symbols:adaptive-audio-mic",
    text: "Adaptation: Learns over time, refining actions through feedback to handle dynamic environments and complex tasks",
  },
];

export default function MarketingServices() {
  const theme = useTheme();

  return (
    <Box sx={aiStyles.containers.aiPage()}>
      <Box sx={aiStyles.floatingElements.primary("10%", "85%", 120)} />
      <Box sx={aiStyles.floatingElements.secondary("20%", "10%", 80)} />
      <Box sx={aiStyles.floatingElements.primary("75%", "90%", 60)} />

      <Container sx={aiStyles.layouts.mainContainer()}>
        <Box sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 10, md: 15 } }}>
          <Grid
            container
            spacing={6}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid xs={12} md={6} lg={5}>
              <Box sx={aiStyles.animationUtils.leftSlideAnimation()}>
                <Box
                  sx={{
                    ...aiStyles.containers.enhancedGlassContainer({
                      xs: 2,
                      md: 2,
                    }),
                    borderRadius: 4,
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      animation: `${aiStyles.animations.glowPulse} 2s ease-in-out infinite`,
                    },
                  }}
                >
                  <Image
                    alt="AI Agent Services"
                    src="/assets/images/marketing/297fde45-b543-4b00-96bf-9f02950db079.png"
                    sx={{
                      borderRadius: 3,
                      width: "100%",
                      filter: "brightness(1.1) contrast(1.05)",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: aiStyles.backgrounds.shimmerOverlay,
                      borderRadius: 4,
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} md={6} lg={6}>
              <Box sx={aiStyles.animationUtils.rightSlideAnimation()}>
                <Stack spacing={2} sx={{ mb: 2 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      ...aiStyles.typography.gradientHeading(),
                      fontSize: { xs: 28, sm: 30, md: 36 },
                      fontWeight: 600,
                      mb: 1,
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    What is an AI Agent?
                  </Typography>

                  <Typography
                    sx={{
                      ...aiStyles.typography.sectionSubtitle,
                      fontSize: "1.1rem",
                      textAlign: "left",
                    }}
                  >
                    An AI agent is an autonomous system designed to perceive its
                    environment, process information, and take actions to
                    achieve specific goals. It gathers inputs from its
                    surroundings, analyzes data through algorithms or predefined
                    rules, and performs actions that influence its environment.
                  </Typography>

                  <Typography
                    sx={{
                      ...aiStyles.typography.sectionSubtitle,
                      fontSize: "1.1rem",
                      textAlign: "left",
                    }}
                  >
                    Advanced AI agents can incorporate learning mechanisms,
                    allowing them to improve their performance over time through
                    experience. In supervised learning, the agent adjusts its
                    behavior based on feedback from the training data,
                    minimizing errors by comparing its predictions to the
                    correct outcomes.
                  </Typography>

                  <Stack spacing={3} sx={{ mt: 4 }}>
                    {LISTS.map((item, index) => (
                      <Box
                        key={item.text}
                        sx={{
                          cursor: "default",
                          display: "flex",
                          alignItems: "flex-start",
                          ...aiStyles.containers.glassContainer({
                            xs: 3,
                            md: 3,
                          }),
                          borderRadius: 3,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          ...aiStyles.animationUtils.staggeredAnimation(
                            aiStyles.animations.slideInRight,
                            0.4,
                            0.1,
                          )(index),
                          "&:hover": {
                            transform: "translateX(10px)",
                            border: "1px solid rgba(99, 102, 241, 0.3)",
                            background:
                              aiStyles.backgrounds.glassMorphism.accent,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            mr: 3,
                            mt: 0.5,
                            p: 1,
                            borderRadius: 2,
                            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Iconify
                            icon={item.icon}
                            width={20}
                            height={20}
                            sx={{ color: "primary.main" }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            color: "text.primary",
                            lineHeight: 1.6,
                            fontWeight: 500,
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>

                <Box sx={{ textAlign: "center", mt: 6 }}>
                  <Box
                    sx={{
                      display: "inline-block",
                      background: aiStyles.backgrounds.gradientText.primary,
                      borderRadius: 3,
                      p: "2px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05) translateY(-3px)",
                        animation: `${aiStyles.animations.glowPulse} 2s ease-in-out infinite`,
                      },
                    }}
                  >
                    <Button
                      onClick={() =>
                        window.open(
                          "https://github.com/greycollar/greycollar",
                          "_blank",
                        )
                      }
                      size="large"
                      variant="contained"
                      endIcon={<Iconify icon="carbon:chevron-right" />}
                      sx={{
                        py: 2,
                        px: 4,
                        fontSize: 16,
                        fontWeight: 600,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                          transform: "translateY(-3px)",
                          boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.4)}`,
                        },
                      }}
                    >
                      Check Our Work
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
