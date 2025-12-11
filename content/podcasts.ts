export type Episode = {
  slug: string;
  title: string;
  date: string;
  duration: string;
  image: string;
};

export const episodes: Episode[] = [
  {
    slug: "signal-noise",
    title: "Signal, noise, and the future of comms",
    date: "Jan 15, 2025",
    duration: "42 min",
    image: "/assets/podcasts/cover.jpg",
  },
  {
    slug: "ethics-ai",
    title: "Ethics in AI: where to draw the lines",
    date: "Jan 12, 2025",
    duration: "48 min",
    image: "/assets/podcasts/cover.jpg",
  },
  {
    slug: "orbital-habitats",
    title: "Orbital habitats and living off-world",
    date: "Jan 10, 2025",
    duration: "55 min",
    image: "/assets/podcasts/cover.jpg",
  },
  {
    slug: "climate-dashboards",
    title: "Climate dashboards for every city",
    date: "Jan 8, 2025",
    duration: "35 min",
    image: "/assets/podcasts/cover.jpg",
  },
  {
    slug: "biointerfaces",
    title: "Biointerfaces meet everyday devices",
    date: "Jan 5, 2025",
    duration: "50 min",
    image: "/assets/podcasts/cover.jpg",
  },
  {
    slug: "design-fiction",
    title: "Design fiction as strategy",
    date: "Jan 2, 2025",
    duration: "38 min",
    image: "/assets/podcasts/cover.jpg",
  },
];


