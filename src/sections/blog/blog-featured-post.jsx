import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import PropTypes from "prop-types";
import { RouterLink } from "src/routes/components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { fDate } from "src/utils/format-time";
import { paths } from "src/routes/paths";

// ----------------------------------------------------------------------

export default function BlogFeaturedPost({ post }) {
  const {
    slug,
    title,
    description,
    coverUrl,
    publishedAt,
    readTime,
    author,
    tags,
    category,
  } = post;

  return (
    <Card sx={{ height: 1, position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        <Image
          src={coverUrl}
          alt={title}
          ratio="16/9"
          sx={{
            borderRadius: 1,
          }}
        />

        <Stack
          spacing={1}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
          }}
        >
          <Chip
            size="small"
            label="Featured"
            color="primary"
            sx={{
              fontWeight: "fontWeightSemiBold",
            }}
          />
          <Chip
            size="small"
            label={category}
            sx={{
              bgcolor: "background.paper",
              color: "text.primary",
              fontWeight: "fontWeightSemiBold",
              ":hover": {
                color: "primary.main",
                cursor: "default",
              },
            }}
          />
        </Stack>
      </Box>

      <CardContent sx={{ pt: 3 }}>
        <Stack spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {fDate(publishedAt, "MMM dd, yyyy")}
            </Typography>
            <Box
              sx={{
                width: 4,
                height: 4,
                bgcolor: "text.disabled",
                borderRadius: "50%",
              }}
            />
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {readTime}
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Typography
              component={RouterLink}
              href={paths.blog.post(slug)}
              variant="h5"
              sx={{
                color: "text.primary",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {tags.slice(0, 3).map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
            {tags.length > 3 && (
              <Chip
                label={`+${tags.length - 3}`}
                size="small"
                variant="outlined"
              />
            )}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Avatar src={author.avatarUrl} sx={{ width: 36, height: 36 }} />
              <Stack>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {author.role}
                </Typography>
              </Stack>
            </Stack>

            <Button
              component={RouterLink}
              href={paths.blog.post(slug)}
              color="inherit"
              endIcon={<Iconify icon="carbon:arrow-right" />}
            >
              Read More
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

BlogFeaturedPost.propTypes = {
  post: PropTypes.object,
};
