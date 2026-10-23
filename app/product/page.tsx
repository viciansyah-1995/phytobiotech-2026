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
      <PageIntro eyebrow="PRODUCT & DOCUMENTATION" title="Kratom extracts. More possibilities." description="Find the starting point for your next formulation. Explore our product categories, review the supporting laboratory reports, and discover a shared range of industrial applications." />
      <section className="ingredients section-pad standalone-section">
        <div className="wrap"><OutputCards headingLevel="h2" /></div>
      </section>
    </main>
  );
}
