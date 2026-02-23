import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Art of Diamond Grading: Beyond the 4Cs",
    paragraph:
      "Understand the nuances of diamond quality that go beyond the certificate. Learn how cut, polish, and symmetry affect brilliance.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Rajesh Patel",
      image: "/images/blog/author-01.png",
      designation: "Chief Gemologist",
    },
    tags: ["Education"],
    publishDate: "Feb 10, 2026",
  },
  {
    id: 2,
    title: "2026 Jewelry Trends: The Return of Yellow Gold",
    paragraph:
      "Yellow gold is making a massive comeback this season. Discover how to style these warm tones with modern outfits.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Priya Sharma",
      image: "/images/blog/author-02.png",
      designation: "Design Lead",
    },
    tags: ["Trends"],
    publishDate: "Jan 28, 2026",
  },
  {
    id: 3,
    title: "Caring for Your Platinum Jewelry",
    paragraph:
      "Platinum is durable but still needs care. Here are expert tips to keep your platinum rings and necklaces shining forever.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Sanjay Kumar",
      image: "/images/blog/author-03.png",
      designation: "Master Craftsman",
    },
    tags: ["Care Guide"],
    publishDate: "Jan 15, 2026",
  },
];
export default blogData;
