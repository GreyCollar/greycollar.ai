import BlogPostsView from "src/sections/blog/blog-posts-view";
import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------------------

export default function BlogPostsPage() {
  return (
    <>
      <Helmet>
        <title>Blog - GreyCollar AI</title>
        <meta
          name="description"
          content="Discover insights about artificial intelligence, machine learning, and business automation from GreyCollar AI experts."
        />
      </Helmet>

      <BlogPostsView />
    </>
  );
}
