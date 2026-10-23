import { industrialApplications } from "../../lib/industrial-applications";

export default function IndustrialApplications({ categoryId }: { categoryId: string }) {
  const headingId = `industrial-applications-${categoryId}`;
  return (
    <section className="category-applications" aria-labelledby={headingId}>
      <div className="applications-heading">
        <span className="eyebrow">APPLICATION POSSIBILITIES</span>
        <h4 id={headingId}>Industrial Applications</h4>
        <p>A shared range of application formats across both laboratory categories.</p>
      </div>
      <ul className="applications-grid">
        {industrialApplications.map((application) => (
          <li className="application-item" key={application.id}>
            <div className="application-image">
              <img src={application.image} alt={`${application.title} application illustration`} width={220} height={220} loading="lazy" decoding="async" />
            </div>
            <div className="application-copy">
              <span>{application.format}</span>
              <h5>{application.title}</h5>
              <p>{application.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="applications-note">Illustrative application formats. Finished-product specifications and availability are discussed separately.</p>
    </section>
  );
}
