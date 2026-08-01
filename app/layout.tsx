import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://besserversion.fr"),
  title: {
    default: "Besser Version — Studio marketing digital à Lille",
    template: "%s | Besser Version",
  },
  description:
    "Besser Version accompagne les entreprises à Lille en stratégie de communication, marketing digital et community management.",
  keywords: [
    "marketing digital Lille",
    "community manager Lille",
    "stratégie de communication Lille",
    "réseaux sociaux entreprise",
    "Besser Version",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Besser Version",
    title: "Besser Version — Votre marque, en mieux.",
    description:
      "Stratégie, contenu et community management pour faire rayonner votre entreprise depuis Lille.",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Besser Version — Votre marque, en mieux.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Besser Version — Votre marque, en mieux.",
    description:
      "Studio de marketing digital, stratégie et community management à Lille.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
