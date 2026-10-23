import Link from "next/link";
import IndustrialApplications from "./industrial-applications";
import { ArrowUpRight, Files } from "lucide-react";
import { outputs, outputContactHref, sampleResultNote } from "../../lib/outputs";

export default function OutputCards() {
  return (
    <>
      <div className="product-grid output-grid laboratory-cards">
        {outputs.map((category) => (
          <article data-reveal="" className="product-card" key={category.id} id={category.id}>
            <Link className="category-document-art" href={`/labtest#${category.id}`} aria-label={`View ${category.label} documents`}>
              <span className="micro">LABORATORY DOCUMENTATION / {category.number}</span>
              <div className="document-stack">
                {category.documents.length > 1 && (
                  <img className="document-behind" src={category.documents[1].pages[0].replace('.webp', '-thumb.webp')} alt="BIOTEK report 003 cover" loading="lazy" width={420} height={594} />
                )}
                <img className="document-front" src={category.documents[0].pages[0].replace('.webp', '-thumb.webp')} alt={`${category.label} certificate of analysis preview`} loading="lazy" width={420} height={594} />
              </div>
              <span className="document-count"><Files size={15} /> {category.documents.length} {category.documents.length === 1 ? "report" : "reports"} <ArrowUpRight size={15} /></span>
            </Link>
            <div className="product-body">
              <span className="eyebrow">{category.subtitle}</span>
              <h3>{category.label}</h3>
              <p>{category.summary}</p>
              <div className="category-report-list">
                {category.documents.map((document) => (
                  <Link key={document.id} href={`/labtest#${document.id}`}>
                    <Files size={16} /><span>{document.reference}</span><ArrowUpRight size={15} />
                  </Link>
                ))}
              </div>
              <Link className="product-link" href={`/labtest#${category.id}`}>
                View Reports & Analysis <ArrowUpRight size={17} />
              </Link>
              <IndustrialApplications categoryId={category.id} />
              <Link className="product-link" href={outputContactHref(category)}>
                Enquire About This Category <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <p className="catalog-note sample-note">{sampleResultNote}</p>
    </>
  );
}
