import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
import { companyDescription } from "../../lib/outputs";
export const metadata: Metadata = {
  title: "About Company",
  description: companyDescription,
};
export default function AboutPage() {
  return (
    <main id="top">
      <PageIntro
        eyebrow="ABOUT COMPANY"
        title="PT Phyto Anugrah Biotech"
        description={companyDescription}
      />
      <section className="quality wrap section-pad standalone-section">
        <div className="quality-image">
          <img
            src="/images/company/production.webp"
            alt="General kratom leaf illustration used by the company"
            loading="lazy"
          />
        </div>
        <div className="quality-copy">
          <span className="eyebrow">OUR CURRENT FOCUS</span>
          <h2>
            Extracts with possibilities.
            <br />
            <em>Clear information.</em>
          </h2>
          <p>
            Our documentation is organised into Murray-Brown and BIOTEK categories. The
            analysis summaries identify the laboratory samples and the testing
            described in each report.
          </p>
          <p className="botanical-intro">
            We aim to communicate clearly with business customers and to discuss
            supplied-material specifications separately from sample
            measurements.
          </p>
          <Link className="button" href="/product">
            Explore Our Categories <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
