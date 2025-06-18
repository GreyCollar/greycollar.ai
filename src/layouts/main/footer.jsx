import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Iconify from "src/components/iconify";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Logo from "src/components/logo";
import Masonry from "@mui/lab/Masonry";
/* eslint-disable */
import PropTypes from "prop-types";
import { RouterLink } from "src/routes/components";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { _socials } from "src/_mock";
import aiStyles from "src/theme/ai-modern-styles";
import { useBoolean } from "src/hooks/use-boolean";
import { usePathname } from "src/routes/hooks";
import { useResponsive } from "src/hooks/use-responsive";

import Button, { buttonClasses } from "@mui/material/Button";
import { navConfig, pageLinks } from "./config-navigation";
import { styled, useTheme } from "@mui/material/styles";

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: "12px 16px",
  color: theme.palette.common.white,
  background: aiStyles.backgrounds.glassMorphism.accent,
  border: "1px solid rgba(99, 102, 241, 0.3)",
  borderRadius: 12,
  backdropFilter: "blur(10px)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background:
      "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))",
    border: "1px solid rgba(99, 102, 241, 0.5)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
  },
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const theme = useTheme();
  const mdUp = useResponsive("up", "md");

  const pathname = usePathname();

  const mobileList = navConfig.find((i) => i.title === "Pages")?.children || [];

  const desktopList = pageLinks.sort(
    (listA, listB) => Number(listA.order) - Number(listB.order),
  );

  const renderLists = mdUp ? desktopList : mobileList;

  const isHome = pathname === "/";

  const simpleFooter = (
    <Box sx={aiStyles.containers.aiPage("auto")}>
      <Box sx={aiStyles.floatingElements.primary("20%", "10%", 80)} />

      <Container
        sx={{
          py: 8,
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={aiStyles.animationUtils.heroAnimation}>
          <Logo single />

          <Typography
            variant="caption"
            component="div"
            sx={{
              ...aiStyles.typography.sectionSubtitle,
              mt: 3,
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            © 2025 All rights reserved • Powered by AI Innovation
          </Typography>
        </Box>
      </Container>
    </Box>
  );

  const mainFooter = (
    <Box sx={aiStyles.containers.aiPage("auto")}>
      <Box sx={aiStyles.floatingElements.primary("15%", "8%", 100)} />
      <Box sx={aiStyles.floatingElements.secondary("20%", "5%", 70)} />

      <Box sx={aiStyles.components.gradientBorder.top} />

      <Container
        sx={{
          overflow: "hidden",
          py: { xs: 8, md: 10 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container spacing={6} justifyContent={{ md: "space-between" }}>
          <Grid xs={12} md={4}>
            <Stack
              spacing={{ xs: 4, md: 5 }}
              sx={aiStyles.animationUtils.heroAnimation}
            >
              <Stack alignItems="flex-start" spacing={3}>
                <Logo />

                <Typography
                  variant="body2"
                  sx={{
                    ...aiStyles.typography.sectionSubtitle,
                    fontSize: "1rem",
                  }}
                >
                  Transforming businesses with cutting-edge AI technology. Build
                  faster, scale smarter, and innovate beyond limits with our
                  AI-powered platform.
                </Typography>
              </Stack>

              <Stack spacing={2} alignItems="flex-start">
                <Typography
                  variant="h6"
                  sx={{
                    ...aiStyles.typography.gradientHeading(
                      aiStyles.backgrounds.gradientText.secondary,
                    ),
                    fontWeight: 700,
                  }}
                >
                  AI Resources
                </Typography>

                {[
                  "Documentation",
                  "API Reference",
                  "Tutorials",
                  "Community",
                ].map((item, index) => (
                  <Link
                    key={item}
                    variant="body2"
                    sx={{
                      ...aiStyles.typography.sectionSubtitle,
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateX(8px)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: -16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: aiStyles.backgrounds.gradientText.accent,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover::before": {
                        opacity: 1,
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>

              <Box
                sx={{
                  ...aiStyles.containers.glassContainer(4),
                  "&:hover": {
                    transform: "translateY(-2px)",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                  },
                }}
              >
                <Box sx={aiStyles.components.shimmerOverlay} />

                <Stack spacing={3} sx={{ position: "relative", zIndex: 1 }}>
                  <Stack spacing={1}>
                    <Typography
                      variant="h6"
                      sx={{
                        ...aiStyles.typography.gradientHeading(
                          aiStyles.backgrounds.gradientText.accent,
                        ),
                        fontWeight: 700,
                      }}
                    >
                      AI Newsletter
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        ...aiStyles.typography.sectionSubtitle,
                        fontSize: "0.9rem",
                      }}
                    >
                      Get the latest AI insights and feature updates delivered
                      to your inbox.
                    </Typography>
                  </Stack>

                  <TextField
                    fullWidth
                    hiddenLabel
                    placeholder="Enter email address"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            variant="contained"
                            size="medium"
                            sx={{
                              mr: -1,
                              px: 3,
                              background:
                                aiStyles.backgrounds.gradientText.accent,
                              fontWeight: 600,
                              transition:
                                "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, #5855eb 0%, #7c3aed 100%)",
                                transform: "translateY(-1px)",
                                boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
                              },
                            }}
                          >
                            <Iconify
                              icon="carbon:send"
                              width={16}
                              sx={{ mr: 0.5 }}
                            />
                            Subscribe
                          </Button>
                        </InputAdornment>
                      ),
                      sx: {
                        background:
                          aiStyles.backgrounds.glassMorphism.secondary,
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: 2,
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "&:hover": {
                          border: "1px solid rgba(99, 102, 241, 0.3)",
                        },
                        "&.Mui-focused": {
                          border: "1px solid rgba(99, 102, 241, 0.5)",
                        },
                        "& input": {
                          color: "white",
                          fontSize: "0.9rem",
                          "&::placeholder": {
                            color: "rgba(255, 255, 255, 0.6)",
                            opacity: 1,
                          },
                        },
                      },
                    }}
                  />
                </Stack>
              </Box>

              <Stack spacing={3}>
                <Typography
                  variant="h6"
                  sx={{
                    ...aiStyles.typography.gradientHeading(
                      aiStyles.backgrounds.gradientText.secondary,
                    ),
                    fontWeight: 700,
                  }}
                >
                  Connect with AI Community
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  {_socials.map((social, index) => (
                    <IconButton
                      key={social.value}
                      sx={{
                        background:
                          aiStyles.backgrounds.glassMorphism.secondary,
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: theme.palette.primary.main,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        ...aiStyles.animationUtils.staggeredAnimation(
                          aiStyles.animations.slideInUp,
                          0.5,
                          0.1,
                        )(index),
                        "&:hover": {
                          background: aiStyles.backgrounds.glassMorphism.accent,
                          border: "1px solid rgba(99, 102, 241, 0.4)",
                          transform: "translateY(-3px) scale(1.1)",
                          boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
                        },
                      }}
                    >
                      <Iconify icon={social.icon} width={20} />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>

              <Stack spacing={3}>
                <Typography
                  variant="h6"
                  sx={{
                    ...aiStyles.typography.gradientHeading(
                      aiStyles.backgrounds.gradientText.secondary,
                    ),
                    fontWeight: 700,
                  }}
                >
                  AI Mobile Apps
                </Typography>
                <AppStoreButton />
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Box sx={aiStyles.animationUtils.leftSlideAnimation(0.3)}>
              {mdUp ? (
                <Masonry
                  columns={4}
                  spacing={3}
                  defaultColumns={4}
                  defaultSpacing={3}
                >
                  {renderLists.map((list, index) => (
                    <Box
                      key={list.subheader}
                      sx={aiStyles.animationUtils.staggeredAnimation(
                        aiStyles.animations.slideInUp,
                        0.5,
                        0.1,
                      )(index)}
                    >
                      <ListDesktop list={list} />
                    </Box>
                  ))}
                </Masonry>
              ) : (
                <Stack spacing={2}>
                  {renderLists.map((list, index) => (
                    <Box
                      key={list.subheader}
                      sx={aiStyles.animationUtils.staggeredAnimation(
                        aiStyles.animations.slideInUp,
                        0.5,
                        0.1,
                      )(index)}
                    >
                      <ListMobile list={list} />
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={aiStyles.components.gradientBorder.bottom} />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            py: 4,
            textAlign: "center",
            ...aiStyles.animationUtils.leftSlideAnimation(0.8),
          }}
        >
          <Typography
            variant="caption"
            sx={{
              ...aiStyles.typography.sectionSubtitle,
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            © 2025 All rights reserved • Empowering the future with AI
          </Typography>

          <Stack direction="row" spacing={4} justifyContent="center">
            {["Privacy Policy", "Terms of Service", "AI Ethics"].map((item) => (
              <Link
                key={item}
                variant="caption"
                sx={{
                  ...aiStyles.typography.sectionSubtitle,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );

  return <footer>{isHome || true ? simpleFooter : mainFooter}</footer>;
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }) {
  const pathname = usePathname();

  return (
    <Stack spacing={2} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        sx={{
          ...aiStyles.typography.gradientHeading(
            aiStyles.backgrounds.gradientText.secondary,
          ),
          fontWeight: 700,
          fontSize: "1rem",
        }}
      >
        {list.subheader}
      </Typography>

      {list.items?.map((link, index) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              ...aiStyles.typography.sectionSubtitle,
              cursor: "pointer",
              fontSize: "0.9rem",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              ...aiStyles.animationUtils.staggeredAnimation(
                aiStyles.animations.slideInUp,
                0.1,
                0.05,
              )(index),
              "&:hover": {
                color: "primary.main",
                transform: "translateX(8px)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                left: -12,
                top: "50%",
                transform: "translateY(-50%)",
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: aiStyles.backgrounds.gradientText.accent,
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
              "&:hover::before": {
                opacity: 1,
              },
              ...(active && {
                color: "primary.main",
                fontWeight: "600",
                "&::before": {
                  opacity: 1,
                },
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

export function ListMobile({ list }) {
  const pathname = usePathname();
  const listExpand = useBoolean();

  return (
    <Box
      sx={{
        ...aiStyles.components.enhancedCard,
        p: 3,
      }}
    >
      <Stack spacing={2} alignItems="flex-start">
        <Typography
          variant="subtitle2"
          onClick={listExpand.onToggle}
          sx={{
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            ...aiStyles.typography.gradientHeading(
              aiStyles.backgrounds.gradientText.secondary,
            ),
            fontWeight: 700,
            fontSize: "1rem",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              background: aiStyles.backgrounds.gradientText.accent,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
          }}
        >
          {list.subheader}
          <Iconify
            width={16}
            icon={
              listExpand.value ? "carbon:chevron-down" : "carbon:chevron-right"
            }
            sx={{
              ml: 1,
              color: "primary.main",
              transition: "transform 0.3s ease",
              transform: listExpand.value ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          />
        </Typography>

        <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
          <Stack spacing={2} alignItems="flex-start" sx={{ mt: 1 }}>
            {list.items?.map((link, index) => (
              <Link
                component={RouterLink}
                key={link.title}
                href={link.path}
                variant="caption"
                sx={{
                  ...aiStyles.typography.sectionSubtitle,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  ...aiStyles.animationUtils.staggeredAnimation(
                    aiStyles.animations.slideInUp,
                    0.3,
                    0.05,
                  )(index),
                  "&:hover": {
                    color: "primary.main",
                    transform: "translateX(8px)",
                  },
                  ...(pathname === `${link.path}/` && {
                    color: "primary.main",
                    fontWeight: "600",
                  }),
                }}
              >
                {link.title}
              </Link>
            ))}
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
}

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <StyledAppStoreButton
        startIcon={<Iconify icon="ri:apple-fill" width={28} />}
      >
        <Stack alignItems="flex-start">
          <Typography
            variant="caption"
            sx={{ opacity: 0.8, fontSize: "0.75rem" }}
          >
            Download on the
          </Typography>

          <Typography
            variant="h6"
            sx={{ mt: -0.5, fontSize: "1rem", fontWeight: 600 }}
          >
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton
        startIcon={<Iconify icon="logos:google-play-icon" width={28} />}
      >
        <Stack alignItems="flex-start">
          <Typography
            variant="caption"
            sx={{ opacity: 0.8, fontSize: "0.75rem" }}
          >
            Download from
          </Typography>

          <Typography
            variant="h6"
            sx={{ mt: -0.5, fontSize: "1rem", fontWeight: 600 }}
          >
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
