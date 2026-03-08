import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const appUrl = process.env.NEXT_PUBLIC_URL || 'https://your-app.vercel.app';
  
  return {
    title: "Nuwa Scanner - Real World Social Search",
    description: "Upload a face pic and discover digital identities across 500+ platforms",
    openGraph: {
      title: "Nuwa Scanner - Real World Social Search",
      description: "Upload a face pic and discover digital identities across 500+ platforms",
      images: [`${appUrl}/og-image.png`],
    },
    other: {
      'fc:miniapp': JSON.stringify({
        version: 'next',
        imageUrl: `${appUrl}/embed-image.png`,
        button: {
          title: 'Launch Nuwa Scanner',
          action: {
            type: 'launch_miniapp',
            name: 'Nuwa Scanner',
            url: appUrl,
            splashImageUrl: `${appUrl}/splash.png`,
            splashBackgroundColor: '#1E1B4B',
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
