import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryForm from "../components/enquiry-form";
export const metadata: Metadata = {
  title: "Contact & Product Information",
  description:
    "Contact PT Phyto Anugrah Biotech about Murray-Brown or BIOTEK documentation, sample analysis documentation, and B2B supply requirements.",
};
export default function ContactPage() {
  return (
    <main id="top">
      <Suspense
        fallback={<div className="wrap section-pad">Loading enquiry form…</div>}
      >
        <EnquiryForm />
      </Suspense>
    </main>
  );
}
