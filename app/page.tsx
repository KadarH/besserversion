import type { Metadata } from "next";
import HomeExperience from "./home-experience";

export const metadata: Metadata = {
  title: "Marketing digital & Community Management à Lille",
  description:
    "Donnez à votre marque une présence digitale plus claire, plus visible et plus engageante avec Besser Version, studio marketing à Lille.",
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Besser Version",
    url: "https://besserversion.fr",
    email: "bonjour@besserversion.fr",
    description:
      "Marketing digital, stratégie de communication et community management pour les entreprises.",
    areaServed: { "@type": "City", name: "Lille" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lille",
      addressCountry: "FR",
    },
    serviceType: [
      "Marketing digital",
      "Stratégie de communication",
      "Community Management",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeExperience />
    </>
  );
}
