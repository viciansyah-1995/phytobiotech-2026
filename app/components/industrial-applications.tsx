import { Layers3 } from "lucide-react";
import { industrialApplications } from "../../lib/industrial-applications";

export default function IndustrialApplications({ categoryId, headingLevel = "h4" }: { categoryId: string; headingLevel?: "h3" | "h4" }) {
  const Heading = headingLevel;
  const ItemHeading = headingLevel === "h3" ? "h4" : "h5";
  const headingId = `industrial-applications-${categoryId}`;
  return (
    <section className="category-applications" aria-labelledby={headingId}>
      <div className="applications-heading">
        <div>
          <span className="eyebrow">FROM INGREDIENT TO APPLICATION</span>
          <Heading id={headingId}>Industrial <em>Applications.</em></Heading>
        </div>
        <div className="applications-intro">
          <span className="applications-count"><Layers3 size={15} /> Six application formats</span>
          <p>Explore the same application possibilities across both laboratory categories.</p>
        </div>
      </div>
      <ul className="applications-grid">
        {industrialApplications.map((application, index) => (
          <li className="application-item" key={application.id}>
            <div className="application-image">
              <img src={application.image} alt={`${application.title} application illustration`} width={440} height={440} loading="lazy" decoding="async" />
              <span className="application-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="application-copy">
              <span>{application.format}</span>
              <ItemHeading>{application.title}</ItemHeading>
              <p>{application.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="applications-footer"><span className="applications-footer-mark" aria-hidden="true" /><p>Illustrative application formats. Finished-product specifications and availability are discussed separately.</p></div>
    </section>
  );
}
