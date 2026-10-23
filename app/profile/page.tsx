import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/page-intro";
export const metadata: Metadata = {
  title: "About Kratom & Mitragynine",
  description:
    "An introduction to Mitragyna speciosa, mitragynine, and the meaning of sample-specific laboratory measurements.",
};
export default function ProfilePage() {
  return (
    <main id="top">
      <PageIntro
        eyebrow="ABOUT KRATOM & MITRAGYNINE"
        title="The plant and the measurement."
        description="Kratom is a plant known scientifically as Mitragyna speciosa. Mitragynine is one of the alkaloids found in its leaves. Laboratory analysis can measure mitragynine content in a specific sample."
      />
      <section className="quality wrap section-pad standalone-section">
        <div className="quality-image">
          <img
            src="/images/company/production.webp"
            alt="General kratom leaf illustration"
            loading="lazy"
          />
        </div>
        <div className="quality-copy">
          <span className="eyebrow">READING A SAMPLE RESULT</span>
          <h2>
            Concentration.
            <br />
            <em>In context.</em>
          </h2>
          <p>
            A reported mitragynine percentage describes a measured concentration
            in a tested sample. It is not the extraction yield of a production
            process, a specification for every future output, or approval for
            use.
          </p>
          <p className="botanical-intro">
            An identity interpretation and a concentration measurement answer
            different questions. Review the method and scope of the report for
            the output you are considering.
          </p>
          <Link className="button" href="/labtest">
            View Analysis Summaries <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
