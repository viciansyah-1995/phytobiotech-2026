import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type PowderOutput, outputContactHref } from "../../lib/outputs";
export default function ReportSummary({ output }: { output: PowderOutput }) {
  const rows = [
    ["Report number", output.reportNumber],
    ["Lab sample ID", output.labSampleId],
    ["Material form", output.matrix],
    ["Parameter", "Mitragynine"],
    ["Method", output.method],
    ["Reported sample result", output.reported_mitragynine_result],
    ["Analysis completed", output.completed],
    ["Laboratory", output.laboratory],
  ];
  return (
    <section className="report-summary" id={`${output.id}-details`}>
      <div className="section-top">
        <span className="eyebrow">REPORT {output.number}</span>
        <span className="micro">SAMPLE-SPECIFIC ANALYSIS</span>
      </div>
      <h2>{output.label}</h2>
      <p>{output.summary}</p>
      <div
        className="table-scroll"
        tabIndex={0}
        role="region"
        aria-label={`${output.label} analysis details`}
      >
        <table className="analysis-table">
          <caption>Mitragynine measurement</caption>
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {output.identityInterpretation ? (
        <div className="report-interpretation">
          <h3>NMR identity interpretation</h3>
          <p>{output.identityInterpretation}</p>
          <p>
            7-Hydroxymitragynine: <strong>Not reported in this document</strong>
            .
          </p>
        </div>
      ) : (
        <>
          <div
            className="table-scroll"
            tabIndex={0}
            role="region"
            aria-label={`Report ${output.reportNumber} additional test results`}
          >
            <table className="analysis-table">
              <caption>
                Additional results for report {output.reportNumber} only
              </caption>
              <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Reported result</th>
                  <th scope="col">Method</th>
                </tr>
              </thead>
              <tbody>
                {output.additionalResults.map((row) => (
                  <tr key={row.parameter}>
                    <th scope="row">{row.parameter}</th>
                    <td>
                      {row.result}
                      {row.unit && (
                        <small className="result-unit">Unit: {row.unit}</small>
                      )}
                    </td>
                    <td>{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="catalog-note">
            Not Detected is the laboratory’s reported wording and does not mean
            absolute zero. These results apply to this tested sample only; no
            acceptance criteria or pass/fail judgement is assigned here.
          </p>
        </>
      )}
      <p className="catalog-note">
        Source: {output.laboratory}, report {output.reportNumber}. Summary of
        the sample analysis; no production batch number is assigned here.
      </p>
      <Link className="button" href={outputContactHref(output, true)}>
        Request Analysis Documentation <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
