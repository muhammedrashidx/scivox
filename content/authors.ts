export type Author = {
  name: string;
  slug: string;
  role: string;
  image: string;
};

export const authors: Author[] = [
  { name: "Lena Ortiz", slug: "lena-ortiz", role: "Editor in Chief", image: "/assets/authors/1.jpg" },
  { name: "Samir Desai", slug: "samir-desai", role: "Executive Editor", image: "/assets/authors/2.jpg" },
  { name: "Priya Nandakumar", slug: "priya-nandakumar", role: "Senior Writer", image: "/assets/authors/3.jpg" },
  { name: "Hannah Lee", slug: "hannah-lee", role: "Science Editor", image: "/assets/authors/4.jpg" },
];

export function getAuthorBySlug(slug: string) {
  return authors.find((author) => author.slug === slug);
}


