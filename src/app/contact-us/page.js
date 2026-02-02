// import ContactUsPage from "@/pages/contactPage"

// export default function Home() {
//   return (<ContactUsPage />);
// }

import ContactUsPage from "@/pages/contactPage";
import Script from "next/script";

const SITE_URL = "https://www.atlantaquantumtech.com";
const PAGE_URL = `${SITE_URL}/contact-us`;

export const metadata = {
  title: "Contact Us | Atlanta Quantum Tech",
  description:
    "Contact Atlanta Quantum Tech for AI solutions, cloud infrastructure, and digital transformation services. Let’s build intelligent IT solutions together.",
  keywords: [
    "Atlanta Quantum Tech",
    "Contact Atlanta Quantum Tech",
    "IT consulting company",
    "AI development company",
    "Cloud infrastructure services",
    "Digital transformation company",
    "Enterprise software development",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact Atlanta Quantum Tech",
    description:
      "Get in touch with Atlanta Quantum Tech for AI, cloud, and enterprise IT solutions.",
    url: PAGE_URL,
    siteName: "Atlanta Quantum Tech",
    images: [
      {
        url: `${SITE_URL}/og/contact-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Atlanta Quantum Tech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Atlanta Quantum Tech",
    description:
      "Reach out to Atlanta Quantum Tech to discuss AI, cloud, and digital transformation solutions.",
    images: [`${SITE_URL}/og/contact-og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${PAGE_URL}#contactpage`,
    url: PAGE_URL,
    name: "Contact Atlanta Quantum Tech",
    description:
      "Contact Atlanta Quantum Tech for AI development, cloud services, and digital transformation solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "Atlanta Quantum Tech Pvt Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
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
        id="contact-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Content */}
      <ContactUsPage />
    </>
  );
}
