import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Image from "src/components/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import aiStyles from "src/theme/ai-modern-styles";
import { alpha } from "@mui/material/styles";

const SERVICES = [
  {
    title: "Standalone",
    description:
      "Operates independently without reliance on programmed static flows, offering complete flexibility and control.",
    icon: "https://cdn.nucleoid.com/media/019-cube.png",
    color: "#3B82F6",
    badge: "Core",
  },
  {
    title: "Supervised Learning",
    description:
      "Allows for human-in-the-loop oversight, ensuring alignment with business goals and directions for complex jobs.",
    icon: "https://cdn.nucleoid.com/media/015-code.png",
    color: "#8B5CF6",
    badge: "AI/ML",
  },
  {
    title: "Realistic",
    description:
      "Delivers context-aware, natural interactions that mirror real-world decision-making processes for day-to-day tasks.",
    icon: "https://cdn.nucleoid.com/media/007-AI.png",
    color: "#06B6D4",
    badge: "Smart",
  },
  {
    title: "MCP Support",
    description:
      "Enables seamless integration for handling complex tasks, leveraging the power of the Model Context Protocol.",
    icon: "https://cdn.nucleoid.com/media/028-network.png",
    color: "#10B981",
    badge: "Protocol",
  },
  {
    title: "Autonomous Workflow",
    description:
      "Facilitates self-sufficient task execution, allowing agents to make decisions and adapt without manual intervention.",
    icon: "https://cdn.nucleoid.com/media/019-database-5.png",
    color: "#F59E0B",
    badge: "Auto",
  },
  {
    title: "Event-driven Architecture",
    description:
      "Unlike linear or static workflows, EDA is designed to handle unpredictable scenarios and asynchronous triggers.",
    icon: "https://cdn.nucleoid.com/media/leaf.png",
    color: "#EF4444",
    badge: "Advanced",
  },
];

export default function MarketingServicesList() {
  return (
    <Box sx={aiStyles.containers.aiPage()}>
      <Box sx={aiStyles.floatingElements.primary("5%", "90%", 100)} />
      <Box sx={aiStyles.floatingElements.secondary("10%", "15%", 80)} />
      <Box sx={aiStyles.floatingElements.primary("75%", "85%", 60)} />

      <Container sx={aiStyles.layouts.mainContainer()}>
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Box sx={aiStyles.layouts.heroSection()}>
            <Typography variant="h2" sx={aiStyles.typography.aiPageTitle()}>
              Platform Features
            </Typography>

            <Typography
              variant="h6"
              sx={{
                ...aiStyles.typography.sectionSubtitle,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Discover the powerful capabilities that make our AI platform the
              perfect choice for modern enterprises
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 4,
              ...aiStyles.animationUtils.leftSlideAnimation(0.2),
            }}
          >
            {SERVICES.map((service, index) => (
              <Card
                key={service.title}
                sx={{
                  ...aiStyles.components.enhancedCard,
                  overflow: "hidden",
                  position: "relative",
                  ...aiStyles.animationUtils.staggeredAnimation(
                    aiStyles.animations.slideInUp,
                    0,
                    0.1,
                  )(index),
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${service.color}, ${alpha(service.color, 0.6)})`,
                  },
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: `0 20px 40px ${alpha(service.color, 0.2)}`,
                    border: `1px solid ${alpha(service.color, 0.3)}`,
                    background: aiStyles.backgrounds.glassMorphism.accent,
                    "& .service-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                      filter: `drop-shadow(0 0 20px ${alpha(service.color, 0.6)})`,
                    },
                    "& .service-badge": {
                      background: service.color,
                      color: "white",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: "100%" }}>
                  <Stack
                    spacing={3}
                    alignItems="center"
                    textAlign="center"
                    height="100%"
                  >
                    <Chip
                      className="service-badge"
                      label={service.badge}
                      size="small"
                      sx={{
                        alignSelf: "flex-start",
                        background: alpha(service.color, 0.1),
                        color: service.color,
                        border: `1px solid ${alpha(service.color, 0.2)}`,
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        cursor: "default",
                      }}
                    />

                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${alpha(service.color, 0.1)} 0%, transparent 70%)`,
                        border: `2px solid ${alpha(service.color, 0.2)}`,
                      }}
                    >
                      <Image
                        className="service-icon"
                        visibleByDefault
                        disabledEffect
                        alt={service.title}
                        src={service.icon}
                        sx={{
                          width: 40,
                          height: 40,
                          filter: `brightness(1.2) contrast(1.1)`,
                          transition:
                            "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        }}
                      />
                    </Box>

                    <Stack spacing={2} sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          ...aiStyles.typography.gradientHeading(
                            aiStyles.backgrounds.gradientText.secondary,
                          ),
                          fontSize: { xs: 18, md: 20 },
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                          fontSize: 14,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Stack>

                    <Box
                      sx={{
                        width: 40,
                        height: 2,
                        borderRadius: 1,
                        background: `linear-gradient(90deg, ${service.color}, transparent)`,
                        alignSelf: "center",
                      }}
                    />
                  </Stack>
                </CardContent>

                <Box sx={aiStyles.components.shimmerOverlay} />
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
