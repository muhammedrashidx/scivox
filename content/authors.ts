export type Author = {
  name: string;
  slug: string;
  role: string;
  image: string;
};

export const authors: Author[] = [
  { name: "Muhammed Rashid", slug: "lena-ortiz", role: "Editor in Chief", image: "/assets/authors/1.jpg" },
  { name: "Aslam Villan", slug: "samir-desai", role: "Executive Editor", image: "/assets/authors/2.jpg" },
  { name: "Siva Prabhakar", slug: "priya-nandakumar", role: "Senior Writer", image: "/assets/authors/3.jpg" },
  { name: "Dipin Thacharakkal", slug: "hannah-lee", role: "Science Editor", image: "/assets/authors/4.jpg" },
];

export function getAuthorBySlug(slug: string) {
  return authors.find((author) => author.slug === slug);
}


