import Link from "next/link";
import IndustrialApplications from "./industrial-applications";
import { ArrowUpRight, Files } from "lucide-react";
import { outputs, outputContactHref, sampleResultNote } from "../../lib/outputs";

export default function OutputCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <>
      <div className="laboratory-cards">
        {outputs.map((category) => (
          <article className="product-category" key={category.id} id={category.id} tabIndex={-1} aria-labelledby={`category-title-${category.id}`}>
            <div className="category-overview">
              <Link className="category-document-art" href={`/labtest#${category.id}`} aria-label={`View ${category.label} documents`}>
                <span className="micro">DOCUMENT LIBRARY / {category.number}</span>
                <div className="document-stack">
                  {category.documents.length > 1 && (
                    <img className="document-behind" src={category.documents[1].pages[0].replace(".webp", "-thumb.webp")} alt="BIOTEK report 003 cover" loading="lazy" width={420} height={594} />
                  )}
                  <img className="document-front" src={category.documents[0].pages[0].replace(".webp", "-thumb.webp")} alt={`${category.label} certificate of analysis preview`} loading="lazy" width={420} height={594} />
                </div>
                <span className="document-count"><Files size={16} /> {category.documents.length} {category.documents.length === 1 ? "report" : "reports"}<ArrowUpRight size={16} /></span>
              </Link>
              <div className="category-copy">
                <span className="eyebrow"><span className="category-index">{category.number}</span> {category.subtitle}</span>
                <Heading id={`category-title-${category.id}`}>{category.label}</Heading>
                <p>{category.summary}</p>
                <div className="category-report-list" aria-label={`${category.label} reports`}>
                  {category.documents.map((document) => (
                    <Link key={document.id} href={`/labtest#${document.id}`}><Files size={16} /><span>{document.reference}</span><ArrowUpRight size={15} /></Link>
                  ))}
                </div>
                <div className="category-actions">
                  <Link className="button" href={`/labtest#${category.id}`}>View Reports & Analysis <ArrowUpRight size={17} /></Link>
                  <Link className="text-link" href={outputContactHref(category)}>Enquire About This Category <ArrowUpRight size={17} /></Link>
                </div>
              </div>
            </div>
            <IndustrialApplications categoryId={category.id} headingLevel={headingLevel === "h2" ? "h3" : "h4"} />
          </article>
        ))}
      </div>
      <p className="catalog-note sample-note">{sampleResultNote}</p>
    </>
  );
}
