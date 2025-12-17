// Site configuration constants
export const siteConfig = {
  name: "SciVox",
  description: "Scientific voices and communication platform for researchers and academicians.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://scivox.in",
  ogImage: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5aa370ccd0b5df944219_midjourney-main.jpg",
  links: {
    twitter: "https://twitter.com/SciVox",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  creator: {
    name: "SciVox Team",
    twitter: "@Sci_Vox",
  },
} as const;

// Navigation items
export const navItems = [
  { label: "Home", href: "/" },
  { label: "The Latest", href: "/the-latest" },
  { label: "Science", href: "/topic/science" },
  { label: "Podcast", href: "/podcast" },
  { label: "About", href: "/about" },
] as const;

// Social links
export const socialLinks = {
  facebook: "#",
  instagram: "#",
  twitter: "#",
  youtube: "#",
} as const;

