import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Iconify from "../components/iconify";
import Link from "@mui/material/Link";
import Markdown from "../components/markdown/markdown";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { _caseStudies, _socials } from "src/_mock";

const _mockCaseStudy = _caseStudies[0];
const { title, description, website } = _caseStudies[0];

export default function MarketingCaseStudyDetails() {
  return (
    <Container
      sx={{
        overflow: "hidden",
        pt: 10,
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 8 }}
        direction={{ md: "row-reverse" }}
      >
        <Grid xs={12} md={4}>
          <Stack
            spacing={3}
            sx={{ p: 5, borderRadius: 2, bgcolor: "background.neutral" }}
          >
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: "text.disabled" }}>
                summary
              </Typography>

              <Typography variant="h6">{title}</Typography>

              <Typography variant="body2">{description}</Typography>
            </Stack>

            <Divider sx={{ mt: 5, borderStyle: "dashed" }} />

            <Stack spacing={1}>
              <Typography variant="overline" sx={{ color: "text.disabled" }}>
                Website
              </Typography>

              <Link
                variant="body2"
                color="inherit"
                href={website}
                sx={{ fontSize: "0.70rem" }}
              >
                {website}
              </Link>
            </Stack>

            <Divider sx={{ borderStyle: "dashed" }} />

            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Stack direction="row">
                {_socials.map((social) => (
                  <Link key={social.value} href={social.url}>
                    <IconButton key={social.value}>
                      <Iconify
                        icon={social.icon}
                        sx={{ color: social.color }}
                      />
                    </IconButton>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} md={8}>
          <Markdown content={_mockCaseStudy.content} />
        </Grid>
      </Grid>
    </Container>
  );
}
