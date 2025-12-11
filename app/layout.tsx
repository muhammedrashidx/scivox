import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scivox.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SciVox - Scientific voices and communication platform",
    template: "%s | SciVox",
  },
  description: "Scientific voices and communication platform for researchers and academicians.",
  keywords: ["science communication", "research", "academia", "technology", "innovation"],
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
    title: "SciVox - Scientific voices and communication platform",
    description: "Scientific voices and communication platform for researchers and academicians.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5aa370ccd0b5df944219_midjourney-main.jpg",
        width: 1200,
        height: 630,
        alt: "SciVox - Scientific voices and communication platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SciVox - Scientific voices and communication platform",
    description: "Scientific voices and communication platform for researchers and academicians.",
    creator: "@SciVox",
    site: "@SciVox",
    images: ["https://cdn.prod.website-files.com/65f8b5873929b1ebc2ab83b3/65fb5aa370ccd0b5df944219_midjourney-main.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://scivox.dev" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

