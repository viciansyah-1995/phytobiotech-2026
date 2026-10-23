import Link from "next/link";
import { Suspense } from "react";
import EnquiryForm from "./components/enquiry-form";
import {
  ArrowUpRight,
  ArrowRight,
  Leaf,
  FlaskConical,
  Microscope,
  Fingerprint,
  MessageCircle,
  Sprout,
} from "lucide-react";
import OutputCards from "./components/output-cards";
import { companyDescription, outputs, reportScopeNote } from "../lib/outputs";

export default function Home() {
  return (
    <main id="top" className="min-w-0">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            PT Phyto Anugrah Biotech
          </div>
          <h1 className="hero-title-source">
            Indonesian Kratom
            <br />
            <em>Extract Powder</em>
            <br />
            for B2B Supply<span className="period">.</span>
          </h1>
          <p>
            Bring your next formulation forward with Indonesian kratom extract
            powder. Explore our product categories, review the laboratory reports,
            and discuss the right specifications for your business.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/product">
              Explore Our Categories <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link" href="#enquiry">
              Discuss Your Requirements <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="small-leaf">
              <Sprout size={21} />
            </span>
            <span>
              Powder format.
              <br />
              <strong>Extracts for your next formulation.</strong>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/company/hero.webp"
            alt="General kratom powder and leaf illustration used on the company website; not output-specific packaging"
            fetchPriority="high"
          />
          <div className="image-topline">
            <span>KRATOM EXTRACT POWDER</span>
            <span>ILLUSTRATIVE IMAGE</span>
          </div>
          <div className="image-caption">
            <span>
              Two laboratories.
              <br />
              <em>Sample-specific results.</em>
            </span>
            <span className="round-arrow">
              <ArrowUpRight size={23} />
            </span>
          </div>
          <div className="science-card">
            <div className="science-icon">
              <FlaskConical size={23} strokeWidth={1.3} />
            </div>
            <div>
              <span>LABORATORY DOCUMENTATION</span>
              <strong>
                Murray-Brown · BIOTEK
              </strong>
            </div>
            <span className="card-dot" />
          </div>
          <div className="visual-index">
            GENERAL COMPANY ILLUSTRATION
            <span>RESULTS APPLY TO TESTED SAMPLES ONLY</span>
          </div>
        </div>
      </section>
      <div data-reveal="" className="principles wrap">
        <span className="principles-label">
          OUR CURRENT
          <br />
          OFFERING
        </span>
        <div>
          <Leaf />
          Powder format
        </div>
        <div>
          <FlaskConical />
          Versatile formulation possibilities
        </div>
        <div>
          <Microscope />
          Sample analysis documentation
        </div>
        <div>
          <MessageCircle />
          Direct business enquiries
        </div>
      </div>
      <section id="products" className="ingredients section-pad">
        <div className="wrap">
          <div className="section-top">
            <span className="eyebrow">01 / PRODUCT DOCUMENTATION</span>
            <span className="micro">
              POWDER FORMAT · SAMPLE-SPECIFIC RESULTS
            </span>
          </div>
          <div data-reveal="" className="section-heading">
            <h2>
              Your next formulation.
              <br />
              <em>Starts with the right extract.</em>
            </h2>
            <p>
              Explore Murray-Brown’s analysis report and both BIOTEK certificates,
              grouped by laboratory with original document previews.
            </p>
          </div>
          <OutputCards />
        </div>
      </section>
      <section id="quality" className="quality wrap section-pad">
        <div data-reveal="" className="quality-image">
          <img
            src="/images/company/origin.webp"
            alt="General powder and botanical illustration from the company website"
            loading="lazy"
          />
          <div className="image-label">
            <Microscope size={20} />
            <span>
              POWDER FORMAT.
              <br />
              <strong>SAMPLE-SPECIFIC DOCUMENTATION.</strong>
            </span>
          </div>
        </div>
        <div data-reveal="" className="quality-copy">
          <span className="eyebrow">02 / LABORATORY ANALYSIS</span>
          <h2>
            Read the result.
            <br />
            <em>Understand the scope.</em>
          </h2>
          <p>
            Browse the original report pages and review the relevant sample results.
            The two BIOTEK certificates are presented together, with their
            individual test details preserved.
          </p>
          <div className="test-list">
            {outputs.map((output) => (
              <div className="test-item" key={output.id}>
                <Link className="analysis-row" href={`/labtest#${output.id}`}>
                  <span className="test-number">{output.number}</span>
                  <span>
                    {output.label}
                    <small>{output.documents.length} {output.documents.length === 1 ? "report" : "reports"}</small>
                  </span>
                  <ArrowUpRight size={16} />
                </Link>
                <p>
                  {output.summary}
                </p>
              </div>
            ))}
          </div>
          <p className="catalog-note">{reportScopeNote}</p>
          <Link className="text-link" href="/labtest">
            View Analysis Summaries <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section id="sourcing" className="origin">
        <img
          src="/images/company/production.webp"
          alt="General kratom leaf illustration from the company website, not a verified photograph of a company farm"
          loading="lazy"
        />
        <div className="origin-shade" />
        <div data-reveal="" className="origin-content wrap">
          <span className="eyebrow">03 / ABOUT PHYTO BIOTECH</span>
          <h2>
            Indonesian company.
            <br />
            <em>Business customers.</em>
          </h2>
          <p>{companyDescription}</p>
          <Link className="button light-button" href="/about">
            About Company <ArrowUpRight size={17} />
          </Link>
          <div className="origin-values">
            <span>
              <Leaf size={20} />
              Powder format
            </span>
            <span>
              <Fingerprint size={20} />
              Identified laboratory samples
            </span>
            <span>
              <MessageCircle size={20} />
              Direct business enquiries
            </span>
          </div>
        </div>
        <span className="origin-credit">PT PHYTO ANUGRAH BIOTECH</span>
      </section>
      <section className="export wrap section-pad">
        <div data-reveal="" className="export-copy">
          <span className="eyebrow">04 / BUSINESS INFORMATION</span>
          <h2>
            Your requirements.
            <br />
            <em>A focused discussion.</em>
          </h2>
          <p>
            Contact our team about the category you are interested in, the relevant
            analysis documentation, and the specifications for supplied
            material.
          </p>
          <div className="freight">
            <div>
              <FlaskConical size={23} />
              <h3>Product documentation</h3>
              <p>Explore kratom extract powder for your next formulation.</p>
            </div>
            <div>
              <MessageCircle size={23} />
              <h3>Business enquiries</h3>
              <p>Discuss your company’s requirements directly.</p>
            </div>
          </div>
        </div>
        <div data-reveal="" className="destination">
          <div className="destination-head">
            <Microscope size={20} />
            <span>DOCUMENTATION BY LABORATORY</span>
            <ArrowUpRight size={17} />
          </div>
          <div className="destination-text">
            <span className="micro">REVIEW THE RELEVANT REPORT</span>
            <h3>Sample analysis.</h3>
            <p>
              Laboratory results describe the tested samples. Commercial
              specifications for supplied material are agreed separately.
            </p>
            <Link className="text-link" href="#enquiry">
              Request Product Information <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <Suspense fallback={<div className="wrap section-pad">Loading enquiry form…</div>}>
        <EnquiryForm headingLevel="h2" />
      </Suspense>
    </main>
  );
}
