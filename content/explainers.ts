export type Explainer = {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  image: string;
  excerpt: string;
};

export const explainers: Explainer[] = [
  {
    slug: "quantum-basics",
    title: "Quantum basics in five minutes",
    category: "Explainers",
    author: "Evelyn Moore",
    authorSlug: "evelyn-moore",
    date: "Jan 11, 2025",
    image: "/assets/explainers/1.jpg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    slug: "fusion-101",
    title: "Fusion 101: what changes next",
    category: "Explainers",
    author: "Dipin Thacharakkal",
    authorSlug: "hannah-lee",
    date: "Jan 7, 2025",
    image: "/assets/explainers/2.jpg",
    excerpt: "Praesent rhoncus sapien nec gravida tempus.",
  },
];


