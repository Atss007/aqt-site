"use client";
import ContactUs from "@/component/contacFormSection/contactFormSection";
import ContactFaqSection from "@/component/faq/contactFaqSection";
import OfferingsSection from "@/component/Offerings/offerings";

export default function ContactPage() {
  return (
    <div>
      <main>
        <ContactUs />
        <OfferingsSection />
        <ContactFaqSection />
      </main>
    </div>
  );
}