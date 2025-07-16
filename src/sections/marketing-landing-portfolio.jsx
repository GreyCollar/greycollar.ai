import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Iconify from "src/components/iconify";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "src/routes/hooks";
import { useTheme } from "@mui/material/styles";

import { COMPANY_STATS, TEAM_MEMBERS } from "src/_mock/_people";

// ----------------------------------------------------------------------

export default function MarketingLandingPortfolio() {
  const theme = useTheme();
  const router = useRouter();

  const handleViewProfile = (member) => {
    router.push(`/people/${member.urlName}`);
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container sx={{ py: 6 }}>
        <Box>
          <Typography variant="h2" sx={{ mb: 2, textAlign: "center" }}>
            Welcome to GreyCollar AI
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            Meet the innovative minds behind GreyCollar AI
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 900,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Our diverse team of experts combines cutting-edge AI knowledge,
            full-stack development expertise, and data science mastery to
            deliver revolutionary workforce automation solutions. Get to know
            the talented individuals driving innovation at GreyCollar AI.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {COMPANY_STATS.map((stat, index) => (
              <Grid key={index} xs={6} md={3}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                    transition: theme.transitions.create("transform"),
                    "&:hover": {
                      transform: "translateY(-4px)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Iconify
                    icon={stat.icon}
                    width={40}
                    height={40}
                    sx={{ mb: 2, color: "primary.main" }}
                  />
                  <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Our Team
          </Typography>

          <Grid container spacing={4}>
            {TEAM_MEMBERS.map((member) => (
              <Grid key={member.id} xs={12} md={4}>
                <Card
                  sx={{
                    p: 4,
                    height: "100%",
                    cursor: "pointer",
                    transition: theme.transitions.create([
                      "transform",
                      "box-shadow",
                    ]),
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.customShadows.z20,
                    },
                  }}
                  onClick={() => handleViewProfile(member)}
                >
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Avatar
                      src={member.avatar}
                      alt={member.name}
                      sx={{
                        width: 100,
                        height: 100,
                        mx: "auto",
                        mb: 2,
                        border: `3px solid ${theme.palette.primary.main}`,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "primary.main", mb: 1 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {member.specialization}
                    </Typography>
                  </Box>

                  <Divider sx={{ mb: 3 }} />

                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {member.bio}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      Core Skills
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      sx={{ gap: 0.5 }}
                    >
                      {member.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: "0.75rem" }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      Key Achievements
                    </Typography>
                    {member.achievements.map((achievement, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.875rem",
                          mb: 0.5,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Iconify
                          icon="carbon:checkmark"
                          width={16}
                          height={16}
                          sx={{ mr: 1, color: "success.main" }}
                        />
                        {achievement}
                      </Typography>
                    ))}
                  </Box>

                  <Box
                    sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                  >
                    <IconButton size="small" sx={{ color: "text.secondary" }}>
                      <Iconify icon="carbon:logo-github" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "text.secondary" }}>
                      <Iconify icon="carbon:logo-linkedin" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "text.secondary" }}>
                      <Iconify icon="carbon:email" />
                    </IconButton>
                  </Box>

                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      mt: 2,
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                    onClick={() => handleViewProfile(member)}
                  >
                    View Full Profile
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
