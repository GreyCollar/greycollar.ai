import BlogFeaturedPost from "./blog-featured-post";
import BlogPostCard from "./blog-post-card";
import { useState } from "react";

import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import { blogPosts, categories } from "src/_mock/_blog";

// ----------------------------------------------------------------------

export default function BlogPostsView() {
  const [currentTab, setCurrentTab] = useState("All");

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const allCategories = ["All", ...categories];

  const filteredPosts =
    currentTab === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === currentTab);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme) =>
            theme.palette.mode === "light" ? "grey.200" : "grey.800",
        }}
      >
        <Container>
          <Stack spacing={3} sx={{ textAlign: "center", mb: 5 }}>
            <Typography variant="h2" component="h1">
              Our Blog
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                maxWidth: 480,
                mx: "auto",
              }}
            >
              Insights and expertise on AI, machine learning, and business
              automation
            </Typography>
          </Stack>
        </Container>
      </Box>

      {featuredPosts.length > 0 && (
        <Container sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Featured Posts
          </Typography>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
          >
            {featuredPosts.map((post) => (
              <BlogFeaturedPost key={post.id} post={post} />
            ))}
          </Box>
        </Container>
      )}

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          All Posts
        </Typography>

        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "primary.main",
            },
            mb: 5,
          }}
        >
          {allCategories.map((category) => (
            <Tab
              key={category}
              label={category}
              value={category}
              sx={{
                "&.Mui-selected": {
                  color: "primary.main",
                },
                "&:hover": {
                  color: "primary.main",
                  opacity: 0.7,
                },
              }}
            />
          ))}
        </Tabs>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          sx={{ mb: 10 }}
        >
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </Box>

        {filteredPosts.length === 0 && (
          <Box sx={{ py: 12, textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              No posts found in this category.
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
}
