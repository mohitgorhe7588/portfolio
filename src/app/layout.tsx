import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mohit Gorhe — AI & Data Science Engineer",
    template: "%s | Mohit Gorhe",
  },
  description:
    "AI & Data Science Engineer building intelligent, autonomous and connected systems. Working across AI/ML, autonomous systems, UAS, IoT, computer vision, and agriculture automation.",
  keywords: [
    "Mohit Gorhe",
    "AI Engineer",
    "Data Science",
    "Autonomous Systems",
    "UAS",
    "IoT",
    "Computer Vision",
    "Drone Engineering",
    "Agriculture Automation",
    "Embedded Systems",
    "Robotics",
  ],
  authors: [{ name: "Mohit Gorhe" }],
  creator: "Mohit Gorhe",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohit Gorhe — AI & Data Science Engineer",
    description:
      "Building intelligent, autonomous and connected systems across AI/ML, UAS, IoT, and agriculture automation.",
    siteName: "Mohit Gorhe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Gorhe — AI & Data Science Engineer",
    description:
      "Building intelligent, autonomous and connected systems across AI/ML, UAS, IoT, and agriculture automation.",
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
