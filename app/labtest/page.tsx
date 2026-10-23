import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
import ReportSummary from "../components/report-summary";
import DocumentGallery from "../components/document-gallery";
import { outputs, biotekReports, outputContactHref, reportScopeNote } from "../../lib/outputs";
export const metadata: Metadata = {
  title: "Laboratory Reports & Document Gallery",
  description: "View Murray-Brown’s analysis report and two BIOTEK certificates, grouped by laboratory with original document previews and sample-specific results.",
};
export default function LabPage() {
  return (
    <main id="top">
      <PageIntro eyebrow="LAB TEST / DOCUMENT LIBRARY" title="The reports behind the results." description="Browse original document pages by laboratory. Two BIOTEK certificates sit together in one category, with separate results for each tested sample." />
      <nav className="wrap laboratory-jump" aria-label="Laboratory categories">
        {outputs.map(category => <a key={category.id} href={`#${category.id}`}><span>{category.number}</span>{category.label}<ArrowUpRight size={16} /></a>)}
      </nav>
      <div className="wrap">
        {outputs.map(category => (
          <section className="laboratory-section" id={category.id} key={category.id}>
            <div className="section-top"><span className="eyebrow">LABORATORY {category.number}</span><span className="micro">{category.documents.length} {category.documents.length === 1 ? "REPORT" : "REPORTS IN ONE CATEGORY"}</span></div>
            <h2>{category.label}</h2><p className="laboratory-description">{category.summary}</p>
            {category.documents.map(document => {
              const report = biotekReports.find(r => r.id === document.id);
              return (
              <article className="laboratory-document" key={document.id} id={document.id}>
                <DocumentGallery document={document} />
                <div className="laboratory-document-copy">
                  <span className="eyebrow">CERTIFICATE OF ANALYSIS</span>
                  <h3>{document.title}</h3>
                  <p className="report-reference">Report {document.reference}</p>
                  {report ? (
                    <>
                      <div className="document-result"><strong>{report.reported_mitragynine_result}</strong><span>Reported mitragynine result<br />Tested sample only · UHPLC</span></div>
                      <p>{report.summary}</p>
                      <details className="report-details"><summary>View sample results & testing scope</summary><ReportSummary output={report} /></details>
                    </>
                  ) : (
                    <>
                      <div className="document-result"><strong>70.0%</strong><span>Reported mitragynine result<br />Tested sample only · HPLC-UV</span></div>
                      <dl className="output-metadata"><div><dt>Sample ID</dt><dd>2604935-001</dd></div><div><dt>Sample name</dt><dd>Kratom Mitragynine</dd></div><div><dt>Reported</dt><dd>24 April 2026</dd></div><div><dt>Testing scope</dt><dd>Alkaloids, microbiology, metals, residual solvents</dd></div><div><dt>7-Hydroxymitragynine</dt><dd>&lt;1.88% · as reported in the original document</dd></div></dl>
                      <p className="catalog-note">This report identifies PT Phyto Labs Indonesia as the customer. Results relate only to the submitted sample.</p>
                    </>
                  )}
                  <Link className="button" href={outputContactHref(category, true)}>Request Analysis Documentation <ArrowUpRight size={16} /></Link>
                </div>
              </article>
            );})}
          </section>
        ))}
        <p className="catalog-note sample-note">{reportScopeNote}</p>
      </div>
    </main>
  );
}
