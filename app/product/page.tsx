import type { Metadata } from "next";
import PageIntro from "../components/page-intro";
import OutputCards from "../components/output-cards";
export const metadata: Metadata = {
  title: "Product & Laboratory Documentation",
  description: "Explore two laboratory categories: Murray-Brown Laboratories, INC. Analysis Report and BIOTEK Rekayasa Indonesia, with two BIOTEK certificates grouped together.",
};
export default function ProductPage() {
  return (
    <main id="top">
      <PageIntro eyebrow="PRODUCT & DOCUMENTATION" title="Two laboratory categories. One clear view." description="Explore our kratom extract powder documentation by laboratory. Murray-Brown’s analysis report forms one category; both BIOTEK certificates are grouped together in the other." />
      <section className="ingredients section-pad standalone-section">
        <div className="wrap"><OutputCards /></div>
      </section>
    </main>
  );
}
