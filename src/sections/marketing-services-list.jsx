import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "src/components/image";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: "Standalone",
    description:
      "Operates independently without reliance on programmed static flows, offering complete flexibility and control.",
    icon: "https://cdn.nucleoid.com/media/019-cube.png",
  },
  {
    title: "Supervised Learning",
    description:
      "Allows for human-in-the-loop oversight, ensuring alignment with business goals and directions for complex jobs.",
    icon: "https://cdn.nucleoid.com/media/015-code.png",
  },
  {
    title: "Realistic",
    description:
      "Delivers context-aware, natural interactions that mirror real-world decision-making processes for day-to-day tasks.",
    icon: "https://cdn.nucleoid.com/media/007-AI.png",
  },
  {
    title: "MCP Support",
    description:
      "Enables seamless integration for handling complex tasks, leveraging the power of the Model Context Protocol.",
    icon: "https://cdn.nucleoid.com/media/028-network.png",
  },
  {
    title: "Autonomous Workflow",
    description:
      "Facilitates self-sufficient task execution, allowing agents to make decisions and adapt without manual intervention.",
    icon: "https://cdn.nucleoid.com/media/019-database-5.png",
  },
  {
    title: "Event-driven Architecture",
    description:
      "Unlike linear or static workflows, EDA is designed to handle unpredictable scenarios and asynchronous triggers.",
    icon: "https://cdn.nucleoid.com/media/leaf.png",
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesList() {
  return (
    <Container
      sx={{
        textAlign: "center",
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <Image
              visibleByDefault
              disabledEffect
              alt="marketing market"
              src={value.icon}
              sx={{ width: 64, height: 64, mx: "auto" }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              {" "}
              {value.description}{" "}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
