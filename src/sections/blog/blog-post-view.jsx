import Avatar from "@mui/material/Avatar";
import BlogPostCard from "./blog-post-card";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
import Iconify from "src/components/iconify";
import Markdown from "src/components/markdown";
import { blogPosts } from "src/_mock/_blog";
import { paths } from "src/routes/paths";
import { useParams } from "react-router-dom";
import { useState } from "react";

import {
  Box,
  Checkbox,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

// ----------------------------------------------------------------------

export default function BlogPostView() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);
  const [favorite, setFavorite] = useState(post?.favorited || false);

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post?.category)
    .slice(0, 3);

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };

  if (!post) {
    return (
      <Container>
        <Box sx={{ py: 20, textAlign: "center" }}>
          <Typography variant="h3" paragraph>
            Post Not Found
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            The blog post you&apos;re looking for doesn&apos;t exist.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: "Home", href: "/" },
            { name: "Blog", href: paths.blog.root },
            { name: post.title },
          ]}
        />
      </Container>

      <Divider />

      <Container>
        <Stack spacing={3} sx={{ py: 5, maxWidth: 720, mx: "auto" }}>
          <Stack spacing={3} sx={{ textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              {post.readTime}
            </Typography>

            <Typography variant="h2" component="h1">
              {post.title}
            </Typography>

            <Typography variant="h5" sx={{ color: "text.secondary" }}>
              {post.description}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              flexWrap="wrap"
            >
              {post.tags.map((tag) => (
                <Chip key={tag} label={tag} variant="outlined" size="small" />
              ))}
            </Stack>
          </Stack>

          <Divider />

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={post.author.avatarUrl}
                sx={{ width: 48, height: 48 }}
              />
              <Stack>
                <Typography variant="subtitle2">{post.author.name}</Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {post.author.role}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" alignItems="center">
              <IconButton>
                <Iconify icon="carbon:share" />
              </IconButton>
              <Checkbox
                color="error"
                checked={favorite}
                onChange={handleChangeFavorite}
                icon={<Iconify icon="carbon:favorite" />}
                checkedIcon={<Iconify icon="carbon:favorite-filled" />}
              />
            </Stack>
          </Stack>

          <Divider />

          <Markdown content={post.content} firstLetter />

          <Box
            sx={{
              p: 3,
              mt: 5,
              borderRadius: 2,
              bgcolor: "background.neutral",
            }}
          >
            <Stack direction="row" spacing={3}>
              <Avatar
                src={post.author.avatarUrl}
                sx={{ width: 64, height: 64 }}
              />
              <Stack spacing={1}>
                <Typography variant="h6">{post.author.name}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {post.author.role}
                </Typography>
                <Typography variant="body2">{post.author.bio}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>

      {relatedPosts.length > 0 && (
        <>
          <Divider />
          <Container sx={{ py: 10 }}>
            <Typography variant="h4" sx={{ mb: 5, textAlign: "center" }}>
              Related Posts
            </Typography>
            <Box
              gap={4}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              {relatedPosts.map((relatedPost) => (
                <BlogPostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </Box>
          </Container>
        </>
      )}
    </>
  );
}
