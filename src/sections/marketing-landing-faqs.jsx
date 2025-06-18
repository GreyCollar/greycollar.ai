import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { _faqs } from "src/_mock";
import aiStyles from "src/theme/ai-modern-styles";
import { useResponsive } from "src/hooks/use-responsive";
import { useTheme } from "@mui/material/styles";

import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import { useCallback, useState } from "react";

// ----------------------------------------------------------------------

export default function MarketingLandingFaqs() {
  const theme = useTheme();
  const mdUp = useResponsive("up", "md");

  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    [],
  );

  return (
    <Box sx={aiStyles.containers.aiPage()}>
      <Box sx={aiStyles.floatingElements.primary()} />
      <Box sx={aiStyles.floatingElements.secondary()} />

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 15 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={aiStyles.layouts.heroSection()}>
          <Typography
            variant="h2"
            sx={{
              ...aiStyles.typography.aiPageTitle(),
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Questions
            <br />
            Answered
          </Typography>

          <Typography
            variant="h6"
            sx={{
              ...aiStyles.typography.sectionSubtitle,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Get instant answers to common questions about our AI technology,
            implementation process, and how it can transform your business.
          </Typography>
        </Box>

        <Grid
          container
          {...aiStyles.layouts.twoColumnLayout.container}
          sx={{ alignItems: "stretch" }}
        >
          <Grid {...aiStyles.layouts.twoColumnLayout.leftColumn}>
            <Box
              sx={{
                ...aiStyles.animationUtils.leftSlideAnimation(),
                height: "100%",
              }}
            >
              <Stack spacing={3} sx={{ height: "100%" }}>
                {_faqs.map((faq, index) => (
                  <Accordion
                    key={faq.id}
                    expanded={expanded === faq.question}
                    onChange={handleChangeExpanded(faq.question)}
                    sx={{
                      ...aiStyles.components.enhancedCard,
                      overflow: "hidden",
                      ...aiStyles.animationUtils.staggeredAnimation(
                        aiStyles.animations.slideInLeft,
                        0.4,
                        0.1,
                      )(index),
                      "&.Mui-expanded": {
                        background:
                          "linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.08))",
                        border: "1px solid rgba(99, 102, 241, 0.4)",
                      },
                      "&::before": {
                        display: "none",
                      },
                      "& .MuiAccordion-root": {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        minHeight: 72,
                        px: 3,
                        py: 2,
                        [`& .${accordionSummaryClasses.content}`]: {
                          p: 0,
                          m: 0,
                        },
                        [`&.${accordionSummaryClasses.expanded}`]: {
                          background:
                            "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          flexGrow: 1,
                          fontWeight: 600,
                          color: "text.primary",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        {faq.question}
                      </Typography>

                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          background:
                            expanded === faq.question
                              ? "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))"
                              : aiStyles.backgrounds.glassMorphism.secondary,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <Iconify
                          width={20}
                          height={20}
                          icon={
                            expanded === faq.question
                              ? "carbon:subtract"
                              : "carbon:add"
                          }
                          sx={{
                            color:
                              expanded === faq.question
                                ? "primary.main"
                                : "text.secondary",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        />
                      </Box>
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        px: 3,
                        pb: 3,
                        pt: 0,
                        borderTop: "1px solid rgba(99, 102, 241, 0.2)",
                        background:
                          "linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))",
                      }}
                    >
                      <Typography
                        sx={{
                          ...aiStyles.typography.sectionSubtitle,
                          fontSize: "1rem",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Box>
          </Grid>

          {mdUp && (
            <Grid {...aiStyles.layouts.twoColumnLayout.rightColumn}>
              <Box
                sx={{
                  ...aiStyles.animationUtils.rightSlideAnimation(),
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 4,
                    overflow: "hidden",
                    ...aiStyles.containers.glassContainer(3),
                    width: "100%",
                    height: "auto",
                    minHeight: "500px",
                    display: "flex",
                    alignItems: "center",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Image
                    alt="AI FAQ Illustration"
                    src="https://cdn.nucleoid.com/media/d1afb01b-ca2e-4752-8f5b-d01f9c73e8d6.png"
                    sx={{
                      borderRadius: 3,
                      filter: "brightness(1.1) contrast(1.05)",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(45deg, transparent 0%, rgba(99, 102, 241, 0.05) 50%, transparent 100%)",
                      borderRadius: 4,
                      pointerEvents: "none",
                    }}
                  />

                  <Box sx={aiStyles.components.shimmerOverlay} />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent)",
                    animation: `${aiStyles.animations.floatAnimation} 4s ease-in-out infinite`,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -15,
                    left: -15,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent)",
                    animation: `${aiStyles.animations.floatAnimation} 5s ease-in-out infinite reverse`,
                  }}
                />
              </Box>
            </Grid>
          )}
        </Grid>

        <Box
          sx={{
            textAlign: "center",
            mt: 10,
            p: 6,
            borderRadius: 4,
            background: aiStyles.backgrounds.glassMorphism.accent,
            border: "1px solid rgba(99, 102, 241, 0.1)",
            position: "relative",
            overflow: "hidden",
            ...aiStyles.animationUtils.leftSlideAnimation(1),
          }}
        >
          <Box
            sx={{
              ...aiStyles.components.shimmerOverlay,
              animation: `${aiStyles.animations.shimmer} 3s ease-in-out infinite`,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              ...aiStyles.typography.sectionSubtitle,
              mb: 2,
              fontWeight: 700,
              color: "text.primary",
              position: "relative",
              zIndex: 1,
            }}
          >
            Still Have Questions?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              ...aiStyles.typography.sectionSubtitle,
              maxWidth: 500,
              mx: "auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            Our AI experts are here to help you understand how our technology
            can transform your business. Get in touch for personalized answers.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
