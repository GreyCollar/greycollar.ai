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
import { Navigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { TEAM_MEMBERS } from "src/_mock/_people";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useRouter } from "src/routes/hooks";
import { useTheme } from "@mui/material/styles";
export default function PersonProfilePage() {
  const { employeeName } = useParams();
  const theme = useTheme();
  const router = useRouter();

  const member = TEAM_MEMBERS.find((m) => m.urlName === employeeName);

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  const handleGoBack = () => {
    router.back();
  };

  const handleContactMember = (type, value) => {
    switch (type) {
      case "email":
        window.open(`mailto:${value}`);
        break;
      case "linkedin":
        window.open(`https://linkedin.com/in/${value}`, "_blank");
        break;
      case "github":
        window.open(`https://github.com/${value}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      <Button
        startIcon={<Iconify icon="carbon:arrow-left" />}
        onClick={handleGoBack}
        sx={{ mb: 4 }}
      >
        Back to Team
      </Button>

      <Grid container spacing={6}>
        <Grid xs={12} md={4}>
          <Card sx={{ p: 4, textAlign: "center", position: "sticky", top: 24 }}>
            <Avatar
              src={member.avatar}
              alt={member.name}
              sx={{
                width: 160,
                height: 160,
                mx: "auto",
                mb: 3,
                border: `4px solid ${theme.palette.primary.main}`,
              }}
            />

            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              {member.name}
            </Typography>

            <Typography variant="h6" sx={{ color: "primary.main", mb: 1 }}>
              {member.role}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
              {member.specialization}
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Stack spacing={2}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Iconify icon="carbon:email" />}
                onClick={() => handleContactMember("email", member.email)}
              >
                Send Email
              </Button>

              <Stack direction="row" spacing={1} justifyContent="center">
                <IconButton
                  size="large"
                  onClick={() =>
                    handleContactMember("linkedin", member.linkedin)
                  }
                  sx={{
                    bgcolor: "action.hover",
                    "&:hover": { bgcolor: "primary.main", color: "white" },
                  }}
                >
                  <Iconify icon="carbon:logo-linkedin" />
                </IconButton>

                <IconButton
                  size="large"
                  onClick={() => handleContactMember("github", member.github)}
                  sx={{
                    bgcolor: "action.hover",
                    "&:hover": { bgcolor: "primary.main", color: "white" },
                  }}
                >
                  <Iconify icon="carbon:logo-github" />
                </IconButton>
              </Stack>
            </Stack>
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Stack spacing={4}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                About {member.name.split(" ")[0]}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {member.detailedBio}
              </Typography>
            </Card>

            <Card sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Core Skills & Technologies
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{ gap: 1 }}
              >
                {member.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        borderColor: "primary.main",
                        cursor: "default",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Card>

            <Card sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Professional Experience
              </Typography>
              <Stack spacing={3}>
                {member.experience.map((exp, index) => (
                  <Box key={index}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Iconify
                        icon="carbon:building"
                        width={20}
                        height={20}
                        sx={{ mr: 1, color: "primary.main" }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {exp.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "primary.main", mb: 1 }}
                    >
                      {exp.company} • {exp.duration}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      {exp.description}
                    </Typography>
                    {index < member.experience.length - 1 && <Divider />}
                  </Box>
                ))}
              </Stack>
            </Card>

            <Card sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Key Achievements
              </Typography>
              <Stack spacing={2}>
                {member.achievements.map((achievement, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Iconify
                      icon="carbon:trophy"
                      width={24}
                      height={24}
                      sx={{ mr: 2, color: "success.main" }}
                    />
                    <Typography variant="body1">{achievement}</Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
