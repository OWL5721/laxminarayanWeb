import JournalHero from "@/components/Blog/JournalHero";
import ArticleList from "@/components/Blog/ArticleList";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journal | Laxminarayan",
  description: "Insights, trends, and education from the world of fine jewelry.",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="The Journal"
        description="Curated stories on craftsmanship, design, and luxury."
      />
      <JournalHero />
      <ArticleList />
    </>
  );
};

export default Blog;
