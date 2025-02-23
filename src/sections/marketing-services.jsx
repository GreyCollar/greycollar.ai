import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { paths } from "src/routes/paths";

// ----------------------------------------------------------------------

const LISTS = [
  "Autonomous Workflow: An AI agent gathers information, processes it, and takes actions to achieve goals, adjusting to its environment as needed.",
  "Supervised learning: Enhances decision-making by learning from labeled data to recognize patterns and make accurate predictions.",
  "Adaptation: Learns over time, refining actions through feedback to handle dynamic environments and complex tasks",
];

// ----------------------------------------------------------------------

export default function MarketingServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid xs={12} md={6} lg={5}>
          <Image
            alt="services"
            src="/assets/images/marketing/297fde45-b543-4b00-96bf-9f02950db079.png"
            sx={{
              borderRadius: 2,
              width: "100%",
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h3">What is AI Agent?</Typography>

            <Typography sx={{ color: "text.secondary" }}>
              An AI agent is an autonomous system designed to perceive its
              environment, process information, and take actions to achieve
              specific goals. It gathers inputs from its surroundings, analyzes
              data through algorithms or predefined rules, and performs actions
              that influence its environment. Some agents are reactive,
              responding directly to stimuli, while more advanced agents use
              internal models and goals to plan actions strategically.
              <br />
              <br />
              Supervised learning is essential for AI agents as it provides a
              structured approach to learning from labeled data, enabling the
              agent to make accurate predictions and informed decisions.
              Advanced AI agents can incorporate learning mechanisms, allowing
              them to improve their performance over time through experience. In
              supervised learning, the agent adjusts its behavior based on
              feedback from the training data, minimizing errors by comparing
              its predictions to the correct outcomes.
            </Typography>

            <Stack spacing={2}>
              {LISTS.map((text) => (
                <Stack key={text} direction="row" alignItems="center">
                  <Box
                    component="span"
                    sx={{
                      mr: 2,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                    }}
                  />
                  {text}
                </Stack>
              ))}
            </Stack>
          </Stack>
          <br />
          <center>
            <Button
              onClick={() =>
                window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
              }
              href={paths.marketing.caseStudies}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Check Our Work
            </Button>
          </center>
        </Grid>
      </Grid>
    </Container>
  );
}
