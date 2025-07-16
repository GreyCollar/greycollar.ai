import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Image from "src/components/image";
import PropTypes from "prop-types";
import { RouterLink } from "src/routes/components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { fDate } from "src/utils/format-time";
import { paths } from "src/routes/paths";

// ----------------------------------------------------------------------

export default function BlogPostCard({ post }) {
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
    <Card sx={{ height: 1 }}>
      <Box sx={{ position: "relative" }}>
        <Image
          src={coverUrl}
          alt={title}
          ratio="4/3"
          sx={{
            borderRadius: 1,
          }}
        />

        <Chip
          size="small"
          label={category}
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: "background.paper",
            color: "text.primary",
            fontWeight: "fontWeightSemiBold",
            ":hover": {
              color: "primary.main",
              cursor: "default",
            },
          }}
        />
      </Box>

      <CardContent sx={{ pt: 3 }}>
        <Stack spacing={2}>
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

          <Stack spacing={1}>
            <Typography
              component={RouterLink}
              href={paths.blog.post(slug)}
              variant="h6"
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
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {tags.slice(0, 2).map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
            {tags.length > 2 && (
              <Chip
                label={`+${tags.length - 2}`}
                size="small"
                variant="outlined"
              />
            )}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Avatar src={author.avatarUrl} sx={{ width: 32, height: 32 }} />
            <Stack>
              <Typography
                variant="caption"
                sx={{ fontWeight: "fontWeightSemiBold" }}
              >
                {author.name}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {author.role}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

BlogPostCard.propTypes = {
  post: PropTypes.object,
};
