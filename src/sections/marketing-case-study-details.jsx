import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Iconify from "../components/iconify";
import Link from "@mui/material/Link";
import Markdown from "../components/markdown/markdown";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import aiStyles from "src/theme/ai-modern-styles";
import { useTheme } from "@mui/material/styles";

import { _caseStudies, _socials } from "src/_mock";

const _mockCaseStudy = _caseStudies[0];
const { title, description, website } = _caseStudies[0];

export default function MarketingCaseStudyDetails() {
  const theme = useTheme();

  return (
    <Box sx={aiStyles.containers.aiPage()}>
      <Box sx={aiStyles.floatingElements.primary("10%", "85%", 100)} />
      <Box sx={aiStyles.floatingElements.secondary("20%", "5%", 80)} />
      <Box sx={aiStyles.floatingElements.primary("70%", "90%", 60)} />

      <Container sx={aiStyles.layouts.mainContainer()}>
        <Box sx={{ pt: 10, pb: { xs: 10, md: 15 } }}>
          <Box sx={aiStyles.layouts.heroSection()}>
            <Typography variant="h2" sx={aiStyles.typography.aiPageTitle()}>
              AI Implementation
              <br />
              Success Story
            </Typography>

            <Typography
              variant="h6"
              sx={{
                ...aiStyles.typography.sectionSubtitle,
                maxWidth: 700,
                mx: "auto",
              }}
            >
              Discover how our AI technology transformed business operations and
              delivered exceptional results through intelligent automation.
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 5, md: 8 }}
            direction={{ md: "row-reverse" }}
          >
            <Grid xs={12} md={4}>
              <Box sx={aiStyles.animationUtils.rightSlideAnimation()}>
                <Stack
                  spacing={4}
                  sx={{
                    ...aiStyles.containers.enhancedGlassContainer(),
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 32px rgba(99, 102, 241, 0.15)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: aiStyles.backgrounds.gradientText.primary,
                      borderRadius: "4px 4px 0 0",
                    },
                  }}
                >
                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{
                          cursor: "default",
                          color: "primary.main",
                          fontWeight: 700,
                          letterSpacing: 1.5,
                          fontSize: "0.75rem",
                        }}
                      >
                        PROJECT SUMMARY
                      </Typography>

                      <Typography
                        variant="h5"
                        sx={{
                          ...aiStyles.typography.gradientHeading(),
                          mt: 2,
                          mb: 2,
                          fontSize: { xs: 18, sm: 20 },
                          lineHeight: 1.3,
                        }}
                      >
                        {title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          cursor: "default",
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>

                    <Box sx={aiStyles.components.gradientBorder.top} />

                    <Stack spacing={2}>
                      <Typography
                        variant="overline"
                        sx={{
                          cursor: "default",
                          color: "secondary.main",
                          fontWeight: 700,
                          letterSpacing: 1.5,
                          fontSize: "0.75rem",
                        }}
                      >
                        PROJECT LINK
                      </Typography>

                      <Link
                        variant="body2"
                        color="inherit"
                        href={website}
                        sx={{
                          fontSize: "0.75rem",
                          color: "text.primary",
                          textDecoration: "none",
                          p: 2,
                          borderRadius: 2,
                          background: aiStyles.backgrounds.glassMorphism.accent,
                          border: "1px solid rgba(99, 102, 241, 0.2)",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          display: "block",
                          "&:hover": {
                            background:
                              aiStyles.backgrounds.glassMorphism.secondary,
                            border: "1px solid rgba(99, 102, 241, 0.4)",
                            transform: "translateX(5px)",
                          },
                        }}
                      >
                        {website}
                      </Link>
                    </Stack>

                    <Box sx={aiStyles.components.gradientBorder.bottom} />

                    <Stack spacing={2}>
                      <Typography
                        variant="overline"
                        sx={{
                          cursor: "default",
                          color: "success.main",
                          fontWeight: 700,
                          letterSpacing: 1.5,
                          fontSize: "0.75rem",
                        }}
                      >
                        CONNECT WITH US
                      </Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {_socials.map((social) => (
                          <Link key={social.value} href={social.url}>
                            <IconButton
                              sx={{
                                background:
                                  aiStyles.backgrounds.glassMorphism.primary,
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                transition: "all 0.2s ease-in-out",
                                "&:hover": {
                                  background:
                                    aiStyles.backgrounds.glassMorphism.accent,
                                  border: "1px solid rgba(99, 102, 241, 0.3)",
                                  transform: "translateY(-2px)",
                                  boxShadow: `0 4px 12px rgba(99, 102, 241, 0.2)`,
                                },
                              }}
                            >
                              <Iconify
                                icon={social.icon}
                                sx={{
                                  color:
                                    social.color || theme.palette.primary.main,
                                  width: 20,
                                  height: 20,
                                }}
                              />
                            </IconButton>
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>

                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)",
                      opacity: 0.6,
                    }}
                  />
                </Stack>
              </Box>
            </Grid>

            <Grid xs={12} md={8}>
              <Box sx={aiStyles.animationUtils.leftSlideAnimation(0.4)}>
                <Box
                  sx={{
                    ...aiStyles.containers.glassContainer(),
                    position: "relative",
                    overflow: "hidden",
                    transition: "border 0.3s ease-in-out",
                    "&:hover": {
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                    },
                    "& .markdown": {
                      color: "text.primary",
                      "& h1, & h2, & h3, & h4, & h5, & h6": {
                        ...aiStyles.typography.gradientHeading(),
                        marginBottom: 2,
                        marginTop: 3,
                      },
                      "& p": {
                        color: "text.secondary",
                        lineHeight: 1.7,
                        fontSize: "1.1rem",
                        marginBottom: 2,
                      },
                      "& ul, & ol": {
                        "& li": {
                          color: "text.secondary",
                          lineHeight: 1.6,
                          marginBottom: 1,
                        },
                      },
                      "& blockquote": {
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        background: aiStyles.backgrounds.glassMorphism.accent,
                        padding: 3,
                        borderRadius: 2,
                        margin: "24px 0",
                        "& p": {
                          color: "text.primary",
                          fontStyle: "italic",
                        },
                      },
                      "& pre": {
                        background: "rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: 2,
                        padding: 2,
                        overflow: "auto",
                      },
                      "& code": {
                        background: "rgba(0, 0, 0, 0.2)",
                        padding: "2px 6px",
                        borderRadius: 1,
                        fontSize: "0.9em",
                        color: theme.palette.primary.light,
                      },
                      "& img": {
                        borderRadius: 2,
                        maxWidth: "100%",
                        height: "auto",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      },
                    },
                  }}
                >
                  <Markdown
                    sx={{ cursor: "default" }}
                    content={_mockCaseStudy.content}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.4) 50%, transparent 100%)",
                      opacity: 0.8,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
