import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import aiStyles from "src/theme/ai-modern-styles";
import { useResponsive } from "src/hooks/use-responsive";

import { alpha, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    prompt: 'Customer: "Do you have a parking spot at your store?"',
    code:
      "> SESSION.USER_MESSAGED                 \n" +
      "{                                     \n" +
      'sessionId: "2116847c",              \n' +
      'content: "Do you ... at your store?"\n' +
      "}                                     \n",
    direction: "left",
    type: "user",
  },
  {
    prompt: 'AI: "Please wait a moment while working on the answer."',
    direction: "right",
    type: "ai",
    code: `> SUPERVISING.RAISED
  {
    sessionId: "2116847c",
    question: "Do you ... at your store?"
  }`,
  },
  {
    prompt:
      'Supervisor: "Yes, we have a parking spot in the back of the store."',
    direction: "right",
    type: "supervisor",
    code: `> SUPERVISING.ANSWERED
  {
    sessionId: "2116847c",
    question: "Yes, we have ... of the store."
  }`,
  },
  {
    prompt: "Knowledge is stored for future reference. 🧠",
    direction: "right",
    type: "system",
  },
  {
    prompt: 'AI: "Yes, we have a parking spot in the back of the store."',
    direction: "right",
    type: "ai",
    code: `> SESSION.USER_MESSAGED
  {
    sessionId: "2116847c",
    question: "Yes, we have ... of the store."
  }`,
  },
  {
    prompt: "A Few Moments Later... 🍍",
    direction: "right",
    type: "system",
  },
  {
    prompt:
      'Customer #2: "Planning to come down there, how is parking situation?"',
    code:
      "> SESSION.USER_MESSAGED                 \n" +
      "{                                     \n" +
      'sessionId: "3746a52b",              \n' +
      'content: "Planning ... situation?"  \n' +
      "}                                     \n",
    direction: "left",
    type: "user",
  },
  {
    prompt: 'AI: "Yes, most certainly, we have a parking spot in the back. 😎"',
    direction: "right",
    type: "ai",
    code: `> SESSION.USER_MESSAGED
  {
    sessionId: "3746a52b",
    question: "Yes, most ... in the back."
  }`,
  },
];

const getTypeColor = (type) => {
  switch (type) {
    case "user":
      return "primary";
    case "ai":
      return "secondary";
    case "supervisor":
      return "warning";
    case "system":
      return "success";
    default:
      return "primary";
  }
};

const getTypeBackground = (type) => {
  switch (type) {
    case "user":
      return "rgba(99, 102, 241, 0.1)";
    case "ai":
      return "rgba(139, 92, 246, 0.1)";
    case "supervisor":
      return "rgba(245, 158, 11, 0.1)";
    case "system":
      return "rgba(16, 185, 129, 0.1)";
    default:
      return "rgba(99, 102, 241, 0.1)";
  }
};

// ----------------------------------------------------------------------

export default function MarketingServicesHowItWorks() {
  const theme = useTheme();
  const mdUp = useResponsive("up", "md");

  return (
    <Box sx={aiStyles.containers.aiPage()}>
      <Box sx={aiStyles.floatingElements.primary("8%", "85%", 120)} />
      <Box sx={aiStyles.floatingElements.secondary("15%", "10%", 80)} />
      <Box sx={aiStyles.floatingElements.primary("70%", "90%", 60)} />

      <Container sx={aiStyles.layouts.mainContainer()}>
        <Box sx={{ py: { xs: 10, md: 15 } }}>
          <Box sx={aiStyles.layouts.heroSection()}>
            <Typography variant="h2" sx={aiStyles.typography.aiPageTitle()}>
              Event-driven AI Agent Platform
            </Typography>

            <Typography
              sx={{
                ...aiStyles.typography.sectionSubtitle,
                maxWidth: 600,
                mx: "auto",
                fontSize: "1.2rem",
                fontWeight: 500,
                mb: 2,
              }}
            >
              &quot;AI without own-generated flow is not AI agent, but still
              need a platform to do it&quot;
            </Typography>

            <Typography
              sx={{
                cursor: "default",
                color: alpha(theme.palette.text.secondary, 0.7),
                fontStyle: "italic",
                fontSize: "1rem",
              }}
            >
              btw, probably Skynet was event-driven too 😬
            </Typography>
          </Box>

          <Box sx={aiStyles.animationUtils.leftSlideAnimation(0.3)}>
            <Timeline position={mdUp ? "alternate-reverse" : "right"}>
              {TIMELINES.map((value, index) => (
                <TimelineItem
                  key={`timeline-${index}`}
                  position={mdUp ? value.direction : "right"}
                  sx={{
                    cursor: "default",
                    "&:before": {
                      ...(!mdUp && { display: "none" }),
                    },
                    ...aiStyles.animationUtils.staggeredAnimation(
                      aiStyles.animations.slideInUp,
                      0.5,
                      0.1,
                    )(index),
                  }}
                >
                  <TimelineSeparator>
                    <TimelineDot
                      color={getTypeColor(value.type)}
                      sx={{
                        width: 16,
                        height: 16,
                        boxShadow: `0 0 20px ${alpha(theme.palette[getTypeColor(value.type)].main, 0.4)}`,
                        animation: `${aiStyles.animations.glowPulse} 3s ease-in-out infinite`,
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.3)}, ${alpha(theme.palette.secondary.main, 0.3)})`,
                        width: 2,
                      }}
                    />
                  </TimelineSeparator>

                  <TimelineContent sx={{ pb: { xs: 4, md: 6 } }}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${getTypeBackground(value.type)}, rgba(255, 255, 255, 0.02))`,
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${alpha(theme.palette[getTypeColor(value.type)].main, 0.2)}`,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          border: `1px solid ${alpha(theme.palette[getTypeColor(value.type)].main, 0.4)}`,
                          background: `linear-gradient(135deg, ${getTypeBackground(value.type)}, rgba(255, 255, 255, 0.05))`,
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "2px",
                          background: `linear-gradient(90deg, ${theme.palette[getTypeColor(value.type)].main}, transparent)`,
                          opacity: 0.6,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.primary",
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                          fontWeight: 600,
                          mb: value.code ? 2 : 0,
                          lineHeight: 1.6,
                        }}
                      >
                        {value.prompt}
                      </Typography>

                      {value.code && (
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            background: "rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            position: "relative",
                            overflow: "hidden",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: aiStyles.backgrounds.shimmerOverlay,
                              animation: `${aiStyles.animations.shimmer} 4s ease-in-out infinite`,
                              pointerEvents: "none",
                            },
                          }}
                        >
                          <Typography
                            component="pre"
                            sx={{
                              fontSize: { xs: "0.75rem", md: "0.85rem" },
                              color: alpha(theme.palette.text.primary, 0.8),
                              fontFamily: "monospace",
                              lineHeight: 1.5,
                              margin: 0,
                              position: "relative",
                              zIndex: 1,
                            }}
                          >
                            <code>{value.code}</code>
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
