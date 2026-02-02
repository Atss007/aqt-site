// import TermsAndConditionsPage from "@/pages/termsAndConditionsPage";

// export default function TermsAndConditions() {
//   return (<TermsAndConditionsPage />);
// }



// app/terms-and-conditions/page.js
import TermsAndConditionsPage from "@/pages/termsAndConditionsPage";
import Script from "next/script";

const SITE_URL = "https://www.atlantaquantumtech.com";
const PAGE_URL = `${SITE_URL}/terms-and-conditions`;

export const metadata = {
  title: "Terms & Conditions | Atlanta Quantum Tech",
  description:
    "Read the terms and conditions governing the use of Atlanta Quantum Tech’s website, services, and digital solutions.",
  keywords: [
    "Atlanta Quantum Tech terms",
    "Terms and Conditions",
    "Website terms of use",
    "IT services terms",
    "Legal terms Atlanta Quantum Tech",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Terms & Conditions | Atlanta Quantum Tech",
    description:
      "Review the terms and conditions for using Atlanta Quantum Tech’s website and services.",
    url: PAGE_URL,
    siteName: "Atlanta Quantum Tech",
    images: [
      {
        url: `${SITE_URL}/og/terms-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Atlanta Quantum Tech Terms and Conditions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Atlanta Quantum Tech",
    description:
      "Understand the legal terms for using Atlanta Quantum Tech’s services and platform.",
    images: [`${SITE_URL}/og/terms-og.jpg`],
  },
  robots: {
    index: true,   // keep indexable (recommended)
    follow: true,
  },
};

export default function TermsAndConditions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#terms`,
    url: PAGE_URL,
    name: "Terms and Conditions",
    description:
      "Terms and conditions governing the use of Atlanta Quantum Tech’s website and services.",
    isPartOf: {
      "@type": "WebSite",
      name: "Atlanta Quantum Tech",
      url: SITE_URL,
    },
    about: {
      "@type": "Organization",
      name: "Atlanta Quantum Tech Pvt Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    dateModified: "2025-01-01",
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <Script
        id="terms-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Content */}
      <TermsAndConditionsPage />
    </>
  );
}
