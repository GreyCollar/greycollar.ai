import BlogPostView from "src/sections/blog/blog-post-view";
import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------------------

export default function BlogPostPage() {
  return (
    <>
      <Helmet>
        <title>Blog Post - GreyCollar AI</title>
        <meta
          name="description"
          content="Read our latest insights about AI, machine learning, and business automation."
        />
      </Helmet>

      <BlogPostView />
    </>
  );
}
