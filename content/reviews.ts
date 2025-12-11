export type Review = {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  image: string;
  excerpt: string;
};

export const reviews: Review[] = [
  {
    slug: "wireless-audio",
    title: "Wireless audio that actually feels wired",
    category: "Audio",
    author: "Lena Ortiz",
    authorSlug: "lena-ortiz",
    date: "Jan 14, 2025",
    image: "/assets/reviews/2.jpg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    slug: "robot-companion",
    title: "A day with a personal robot companion",
    category: "Robotics",
    author: "Samir Desai",
    authorSlug: "samir-desai",
    date: "Jan 9, 2025",
    image: "/assets/reviews/3.jpg",
    excerpt: "Praesent rhoncus sapien nec gravida tempus.",
  },
  {
    slug: "display-bright",
    title: "A display that stays bright in any light",
    category: "Displays",
    author: "Mara Fielding",
    authorSlug: "mara-fielding",
    date: "Jan 6, 2025",
    image: "/assets/reviews/4.jpg",
    excerpt: "Suspendisse dignissim tortor quis massa elementum.",
  },
  {
    slug: "camera-lab",
    title: "Camera lab notes: crisp color science",
    category: "Cameras",
    author: "Hannah Lee",
    authorSlug: "hannah-lee",
    date: "Jan 2, 2025",
    image: "/assets/reviews/2.jpg",
    excerpt: "Curabitur accumsan turpis vitae egestas gravida.",
  },
];


