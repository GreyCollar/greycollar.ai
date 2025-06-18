import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Iconify from "src/components/iconify";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import aiStyles from "src/theme/ai-modern-styles";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function MarketingNewsletter({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...aiStyles.containers.aiPage("80vh"),
        py: { xs: 8, md: 12 },
        ...sx,
      }}
      {...other}
    >
      <Box sx={aiStyles.floatingElements.primary("10%", "15%", 100)} />
      <Box sx={aiStyles.floatingElements.secondary("20%", "8%", 70)} />

      <Container sx={aiStyles.layouts.mainContainer()}>
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
            Stay Ahead with
            <br />
            AI Innovation
          </Typography>

          <Typography
            variant="h6"
            sx={{
              ...aiStyles.typography.sectionSubtitle,
              maxWidth: 600,
              mx: "auto",
              mb: 6,
              fontSize: "1.1rem",
            }}
          >
            Get exclusive insights, feature updates, and cutting-edge AI
            developments delivered directly to your inbox.
          </Typography>
        </Box>

        <Box
          sx={{
            ...aiStyles.containers.enhancedGlassContainer(),
            ...aiStyles.animationUtils.leftSlideAnimation(0.3),
          }}
        >
          <Box sx={aiStyles.components.shimmerOverlay} />

          <Stack
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            direction={{ xs: "column", md: "row" }}
            sx={{ position: "relative", zIndex: 1 }}
          >
            <Stack
              spacing={3}
              alignItems="center"
              direction={{ xs: "column", md: "row" }}
              sx={{
                textAlign: { xs: "center", md: "left" },
                ...aiStyles.animationUtils.leftSlideAnimation(0.5),
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  p: 2,
                  borderRadius: 3,
                  background: aiStyles.backgrounds.glassMorphism.accent,
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "scale(1.05) rotate(2deg)",
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))",
                  },
                }}
              >
                <Iconify
                  icon="carbon:email"
                  width={48}
                  height={48}
                  sx={{
                    color: "primary.main",
                    filter: "drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))",
                  }}
                />

                <Box sx={aiStyles.floatingElements.sparkle()} />
              </Box>

              <Stack spacing={1}>
                <Typography
                  variant="h4"
                  sx={{
                    ...aiStyles.typography.gradientHeading(
                      aiStyles.backgrounds.gradientText.secondary,
                    ),
                    fontWeight: 700,
                  }}
                >
                  Join AI Innovators
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    ...aiStyles.typography.sectionSubtitle,
                    fontSize: "1.1rem",
                  }}
                >
                  Be the first to discover breakthrough AI features and insights
                </Typography>
              </Stack>
            </Stack>

            <Box
              sx={{
                ...aiStyles.animationUtils.rightSlideAnimation(0.7),
                width: { xs: "100%", md: "auto" },
              }}
            >
              <TextField
                fullWidth
                hiddenLabel
                placeholder="Enter your email address"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        size="large"
                        variant="contained"
                        sx={{
                          height: 56,
                          px: 4,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          background: aiStyles.backgrounds.gradientText.accent,
                          fontWeight: 600,
                          fontSize: "1rem",
                          boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #5855eb 0%, #7c3aed 100%)",
                            boxShadow: "0 6px 30px rgba(99, 102, 241, 0.4)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Iconify icon="carbon:send" width={20} sx={{ mr: 1 }} />
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                  sx: {
                    pr: 0,
                    height: 56,
                    background: aiStyles.backgrounds.glassMorphism.secondary,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&:hover": {
                      border: "1px solid rgba(99, 102, 241, 0.3)",
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))",
                    },
                    "&.Mui-focused": {
                      border: "1px solid rgba(99, 102, 241, 0.5)",
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1))",
                    },
                    "& input": {
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: 500,
                      "&::placeholder": {
                        color: "rgba(255, 255, 255, 0.6)",
                        opacity: 1,
                      },
                    },
                  },
                }}
                sx={{
                  maxWidth: 480,
                  minWidth: { xs: "100%", md: 400 },
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  ...aiStyles.typography.sectionSubtitle,
                  display: "block",
                  mt: 2,
                  textAlign: "center",
                  fontSize: "0.85rem",
                  opacity: 0.8,
                }}
              >
                <Iconify
                  icon="carbon:security"
                  width={14}
                  sx={{ mr: 0.5, verticalAlign: "middle" }}
                />
                Your email is secure. Unsubscribe anytime.
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          sx={{
            mt: 8,
            ...aiStyles.animationUtils.leftSlideAnimation(1),
          }}
        >
          {[
            {
              icon: "carbon:ai-launch",
              title: "AI Insights",
              desc: "Latest breakthroughs",
            },
            {
              icon: "carbon:notification",
              title: "Early Access",
              desc: "New features first",
            },
            {
              icon: "carbon:education",
              title: "Expert Tips",
              desc: "Implementation guides",
            },
          ].map((benefit, index) => (
            <Box
              key={benefit.title}
              sx={{
                textAlign: "center",
                p: 3,
                ...aiStyles.components.enhancedCard,
                ...aiStyles.animationUtils.staggeredAnimation(
                  aiStyles.animations.slideInUp,
                  1.2,
                  0.2,
                )(index),
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  p: 2,
                  borderRadius: 2,
                  background: aiStyles.backgrounds.glassMorphism.accent,
                  mb: 2,
                }}
              >
                <Iconify
                  icon={benefit.icon}
                  width={24}
                  height={24}
                  sx={{ color: "primary.main" }}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  ...aiStyles.typography.sectionSubtitle,
                  mb: 1,
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                {benefit.title}
              </Typography>

              <Typography
                variant="body2"
                sx={aiStyles.typography.sectionSubtitle}
              >
                {benefit.desc}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

MarketingNewsletter.propTypes = {
  sx: PropTypes.object,
};
