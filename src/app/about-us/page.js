// import AboutPage from "@/pages/aboutPage";

// export default function Home() {
//   return (<AboutPage />);
// }


// app/about-us/page.js
import AboutPage from "@/pages/aboutPage";
import Script from "next/script";

const SITE_URL = "https://www.atlantaquantumtech.com";
const PAGE_URL = `${SITE_URL}/about-us`;

export const metadata = {
  title: "About Us | Atlanta Quantum Tech",
  description:
    "Discover the journey, mission, vision, and values behind Atlanta Quantum Tech. Trusted by 500+ global brands delivering AI, cloud, and digital transformation solutions since 2015.",
  keywords: [
    "About Atlanta Quantum Tech",
    "IT company in Atlanta",
    "AI solutions company",
    "Cloud services provider",
    "Digital transformation experts",
    "Enterprise technology partner",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About Us | Atlanta Quantum Tech",
    description:
      "Building tomorrow’s digital solutions with innovation, precision, and trust since 2015.",
    url: PAGE_URL,
    siteName: "Atlanta Quantum Tech",
    images: [
      {
        url: `${SITE_URL}/og/about-og.jpg`,
        width: 1200,
        height: 630,
        alt: "About Atlanta Quantum Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Atlanta Quantum Tech",
    description:
      "Learn how Atlanta Quantum Tech became a trusted global IT partner since 2015.",
    images: [`${SITE_URL}/og/about-og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${PAGE_URL}#aboutpage`,
    url: PAGE_URL,
    name: "About Atlanta Quantum Tech",
    description:
      "Learn about Atlanta Quantum Tech’s mission, vision, values, and journey as a global technology leader.",
    mainEntity: {
      "@type": "Organization",
      name: "Atlanta Quantum Tech Pvt Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      foundingDate: "2015",
      slogan: "Building Intelligent IT Solutions",
      sameAs: [
        "https://www.linkedin.com/company/atlanta-quantum-tech",
        "https://twitter.com/atlquantumtech",
        "https://www.facebook.com/atlantaquantumtech",
      ],
    },
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <Script
        id="about-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Content */}
      <main>
        <AboutPage />
      </main>
    </>
  );
}
