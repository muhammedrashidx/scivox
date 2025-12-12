export type Post = {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "imagination-engine",
    title: "Imagining tomorrow with adaptive systems",
    category: "AI",
    author: "Muhammed Rashid",
    authorSlug: "lena-ortiz",
    date: "Jan 12, 2025",
    image: "/assets/posts/2.jpg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ligula sit amet ipsum tempus posuere.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nulla at orci dictum porttitor. Sed pretium, orci in porttitor mattis, urna mi dapibus augue, vitae consequat lacus erat vitae justo.</p>
      <h2>Shaping the future</h2>
      <p>Vivamus porttitor, risus non viverra luctus, urna elit congue magna, a feugiat lectus enim quis nulla. Suspendisse potenti.</p>
      <blockquote>"Curabitur sit amet eros at turpis gravida hendrerit."</blockquote>
      <p>Aliquam vitae odio vitae mauris luctus consequat. Aenean lacinia sapien vitae dui tincidunt, vitae tempus arcu volutpat.</p>
    `,
  },
  {
    slug: "launch-window",
    title: "Inside the launch window for next-gen missions",
    category: "Space",
    author: "Aslam Villan",
    authorSlug: "samir-desai",
    date: "Jan 10, 2025",
    image: "/assets/posts/3.jpg",
    excerpt: "Praesent rhoncus, sapien nec gravida tempus, libero eros interdum justo, vitae maximus velit mi at nisi.",
    content: `
      <p>Praesent rhoncus, sapien nec gravida tempus, libero eros interdum justo, vitae maximus velit mi at nisi.</p>
      <p>Donec id sapien id purus interdum porttitor sed sed nunc. Donec et leo quam. Suspendisse in massa arcu.</p>
      <h2>Mission cadence</h2>
      <p>Morbi viverra luctus justo, nec congue tortor interdum a. Duis posuere magna sit amet purus vehicula rutrum.</p>
    `,
  },
  {
    slug: "climate-ledger",
    title: "Climate ledgers and the race to net-zero",
    category: "Environment",
    author: "Siva Prabhakar",
    authorSlug: "priya-nandakumar",
    date: "Jan 8, 2025",
    image: "/assets/posts/4.jpg",
    excerpt: "Mauris vehicula, felis in malesuada tristique, arcu orci lacinia nibh, at fermentum ipsum mi non orci.",
    content: `
      <p>Integer non augue posuere, elementum turpis in, interdum ipsum. Sed sed aliquet lorem. Sed sed mi vel mi tincidunt commodo.</p>
      <p>Morbi tincidunt, sapien a malesuada lacinia, sem urna ultrices ipsum, eget fermentum turpis purus ac odio.</p>
    `,
  },
  {
    slug: "health-frontiers",
    title: "Health frontiers built on data signals",
    category: "Health",
    author: "Mara Fielding",
    authorSlug: "mara-fielding",
    date: "Jan 5, 2025",
    image: "/assets/posts/2.jpg",
    excerpt: "Suspendisse dignissim tortor quis massa elementum, ac gravida elit viverra. Cras a neque ut velit dictum consequat.",
    content: `
      <p>Suspendisse dignissim tortor quis massa elementum, ac gravida elit viverra. Cras a neque ut velit dictum consequat.</p>
      <p>Ut vitae nibh vitae lorem gravida luctus. Integer ac neque eget libero dictum vehicula.</p>
    `,
  },
  {
    slug: "mobility-shift",
    title: "Mobility shifts across smart cities",
    category: "Cars",
    author: "Jonah Reid",
    authorSlug: "jonah-reid",
    date: "Jan 3, 2025",
    image: "/assets/posts/3.jpg",
    excerpt: "Curabitur accumsan, turpis vitae egestas gravida, lorem odio blandit arcu, non euismod massa magna sit amet massa.",
    content: `
      <p>Curabitur accumsan, turpis vitae egestas gravida, lorem odio blandit arcu, non euismod massa magna sit amet massa.</p>
      <p>Sed cursus euismod dui, ac varius dui pellentesque non.</p>
    `,
  },
  {
    slug: "policy-signals",
    title: "Policy signals that reshape innovation",
    category: "Policy",
    author: "Evelyn Moore",
    authorSlug: "evelyn-moore",
    date: "Jan 1, 2025",
    image: "/assets/posts/4.jpg",
    excerpt: "Donec auctor, risus id laoreet feugiat, justo odio scelerisque arcu, sit amet molestie neque nisi vitae orci.",
    content: `
      <p>Donec auctor, risus id laoreet feugiat, justo odio scelerisque arcu, sit amet molestie neque nisi vitae orci.</p>
      <p>Vestibulum vehicula dignissim tincidunt. Sed vel aliquet lorem.</p>
    `,
  },
  {
    slug: "design-systems",
    title: "Design systems for immersive experiences",
    category: "Design",
    author: "Rina Patel",
    authorSlug: "rina-patel",
    date: "Dec 28, 2024",
    image: "/assets/posts/2.jpg",
    excerpt: "Aliquam erat volutpat. Etiam elementum, turpis a aliquet pretium, libero ligula mattis augue, vitae sodales magna urna a libero.",
    content: `
      <p>Aliquam erat volutpat. Etiam elementum, turpis a aliquet pretium, libero ligula mattis augue, vitae sodales magna urna a libero.</p>
    `,
  },
  {
    slug: "materials-breakthrough",
    title: "Materials breakthroughs for sustainable hardware",
    category: "Science",
    author: "Dipin Thacharakkal",
    authorSlug: "hannah-lee",
    date: "Dec 20, 2024",
    image: "/assets/posts/3.jpg",
    excerpt: "Pellentesque eu diam non nunc molestie volutpat. Nam gravida at arcu nec molestie. Integer faucibus eget arcu non tempus.",
    content: `
      <p>Pellentesque eu diam non nunc molestie volutpat. Nam gravida at arcu nec molestie. Integer faucibus eget arcu non tempus.</p>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}


