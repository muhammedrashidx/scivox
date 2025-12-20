import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scivox.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SciVox",
    template: "%s | SciVox",
  },
  description: "SciVox - Science Communication Platform | Latest Science News, Technology Articles, Research Reviews & Explainers. Explore cutting-edge research, scientific breakthroughs, and expert insights on science, technology, and innovation.",
  keywords: ["SciVox", "science communication", "science news", "research writing", "scientific blogs", "academic articles", "research reviews", "open science", "data sharing", "scientists", "public understanding of science", "technology", "innovation", "science explainers", "scientific research", "science journalism"],
  authors: [{ name: "SciVox", url: siteUrl }],
  creator: "SciVox",
  publisher: "SciVox",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SciVox",
    title: "SciVox",
    description: "A science communication and research writing platform with blogs, articles, reviews, and data sharing for researchers and the public.",
    images: [
      {
        url: "/assets/branding/logo_.png",
        width: 1200,
        height: 630,
        alt: "SciVox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SciVox",
    description: "Science communication and research writing platform with blogs, articles, reviews, and open data.",
    creator: "Sci_Vox",
    site: "Sci_Vox",
    images: "/assets/branding/logo_.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/branding/favicon.png",
    shortcut: "/assets/branding/favicon.png",
    apple: "/assets/branding/favicon.png",
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scivox.in';
  
  // JSON-LD structured data for better SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SciVox",
    "url": siteUrl,
    "logo": `${siteUrl}/assets/branding/logo.png`,
    "description": "SciVox is a science communication and research writing platform featuring blogs, articles, reviews, data sharing, and scholarly insights for researchers and the public.",
    "sameAs": [
      "https://twitter.com/Sci_Vox",
      "https://linkedin.com/company/scivox"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SciVox",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

