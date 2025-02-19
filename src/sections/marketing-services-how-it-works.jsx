import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import { bgGradient } from "src/theme/css";
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
  },
  {
    prompt: 'AI: "Please wait a moment while working on the answer."',
    direction: "right",
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
    code: `> SUPERVISING.ANSWERED
  {
    sessionId: "2116847c",
    question: "Yes, we have ... of the store."
  }`,
  },
  {
    prompt: "Knowledge is stored for future reference. 🧠",
    direction: "right",
  },
  {
    prompt: 'AI: "Yes, we have a parking spot in the back of the store."',
    direction: "right",
    code: `> SESSION.USER_MESSAGED
  {
    sessionId: "2116847c",
    question: "Yes, we have ... of the store."
  }`,
  },
  {
    prompt: "A Few Moments Later... 🍍",
    direction: "right",
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
  },
  {
    prompt: 'AI: "Yes, most certainly, we have a parking spot in the back. 😎"',
    direction: "right",
    code: `> SESSION.USER_MESSAGED
  {
    sessionId: "3746a52b",
    question: "Yes, most ... in the back."
  }`,
  },
];

const COLORS = ["primary", "secondary", "warning", "success"];

// ----------------------------------------------------------------------

export default function MarketingServicesHowItWorks() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: "/assets/background/overlay_2.jpg",
        }),
        color: "common.white",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Event-driven AI Agent Platform
        </Typography>
        <Typography
          sx={{
            m: 3,
            mx: "auto",
            opacity: 0.72,
            maxWidth: 480,
            textAlign: "center",
          }}
          fontSize={22}
        >
          &quot;AI without own-generated flow is not AI agent, but still need a
          platform to do it&quot;
        </Typography>
        <Typography
          sx={{
            mx: "auto",
            opacity: 0.72,
            maxWidth: 480,
            textAlign: "center",
            mb: { xs: 8, md: 10 },
          }}
        >
          <i>btw, probably Skynet was event-driven too</i> 😬
        </Typography>

        <Timeline position={mdUp ? "alternate-reverse" : "right"}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              position={mdUp ? value.direction : "right"}
              sx={{
                "&:before": {
                  ...(!mdUp && { display: "none" }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index % 5]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography
                  color="gray"
                  sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}
                >
                  {value.prompt}
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}>
                  <pre>
                    <code>{value.code}</code>
                  </pre>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
