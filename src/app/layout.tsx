import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mohit Gorhe — AI & Data Science Engineer',
    template: '%s | Mohit Gorhe',
  },
  description:
    'Portfolio of Mohit Rajendra Gorhe: AI & Data Science Engineer working across computer vision, edge AI, autonomous systems, and UAS flight integration.',
  keywords: [
    'Mohit Gorhe',
    'Mohit Rajendra Gorhe',
    'AI Engineer',
    'Computer Vision',
    'Edge AI',
    'UAS Integration',
    'Eulerian Bots',
    'Raspberry Pi',
    'Robotics',
  ],
  authors: [{ name: 'Mohit Rajendra Gorhe' }],
  creator: 'Mohit Rajendra Gorhe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
