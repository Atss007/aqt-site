// import HomePage from "@/pages/homePage"

// export default function Home() {
//   return (<HomePage />);
// }



// app/page.js
import HomePage from "@/pages/homePage";
import Script from "next/script";

const SITE_URL = "https://www.atlantaquantumtech.com";
const PAGE_URL = SITE_URL;

export const metadata = {
  title: "Atlanta Quantum Tech | AI, Cloud & Digital Transformation Company",
  description:
    "Atlanta Quantum Tech is a global IT solutions company delivering AI-powered solutions, cloud infrastructure, and digital transformation for enterprises worldwide.",
  keywords: [
    "Atlanta Quantum Tech",
    "AI development company",
    "Cloud services provider",
    "Digital transformation company",
    "Enterprise IT solutions",
    "Custom software development",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Atlanta Quantum Tech",
    description:
      "Building intelligent IT solutions with AI, cloud, and innovation.",
    url: PAGE_URL,
    siteName: "Atlanta Quantum Tech",
    images: [
      {
        url: `${SITE_URL}/og/home-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Atlanta Quantum Tech – Intelligent IT Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta Quantum Tech",
    description:
      "AI, cloud, and digital transformation solutions for modern enterprises.",
    images: [`${SITE_URL}/og/home-og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Atlanta Quantum Tech Pvt Ltd",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        slogan: "Building Intelligent IT Solutions",
        sameAs: [
          "https://www.linkedin.com/company/atlanta-quantum-tech",
          "https://twitter.com/atlquantumtech",
          "https://www.facebook.com/atlantaquantumtech",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Atlanta Quantum Tech",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <Script
        id="home-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Content */}
      <HomePage />
    </>
  );
}
