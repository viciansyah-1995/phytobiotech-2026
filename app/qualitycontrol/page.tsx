import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
import { outputs, reportScopeNote } from "../../lib/outputs";
export const metadata: Metadata = {
  title: "Laboratory Analysis and Quality Documentation",
  description: "Explore the testing documentation from Murray-Brown Laboratories and BIOTEK Rekayasa Indonesia, with both BIOTEK reports grouped together.",
};
export default function QualityPage() {
  return (
    <main id="top">
      <PageIntro eyebrow="QUALITY CONTROL" title="Clear documentation. Defined testing scope." description="Our documentation is organised by laboratory. Review Murray-Brown’s certificate and the two BIOTEK reports to understand which tests apply to each individual sample." />
      <section className="ingredients section-pad standalone-section">
        <div className="wrap">
          <div className="product-grid output-grid">
            {outputs.map(category => (
              <article className="product-card" key={category.id}><div className="product-body">
                <span className="eyebrow">LABORATORY {category.number}</span><h2>{category.label}</h2><p>{category.summary}</p>
                <dl className="output-metadata">
                  <div><dt>Documentation</dt><dd>{category.documents.length} {category.documents.length === 1 ? "report" : "reports in one category"}</dd></div>
                  {category.documents.map(document => <div key={document.id}><dt>Report reference</dt><dd>{document.reference}</dd></div>)}
                  <div><dt>Results</dt><dd>Sample-specific; reviewed separately for each report</dd></div>
                </dl>
                <Link className="product-link" href={`/labtest#${category.id}`}>Review Documents & Testing Scope <ArrowUpRight size={16} /></Link>
              </div></article>
            ))}
          </div>
          <p className="catalog-note sample-note">{reportScopeNote}</p>
          <p className="botanical-intro">The reports do not establish facility certification, a production audit, consumption safety, or regulatory approval. Testing described for one sample is not assigned to another.</p>
        </div>
      </section>
    </main>
  );
}
