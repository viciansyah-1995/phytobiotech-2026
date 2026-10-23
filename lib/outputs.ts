/** Single public source of truth, transcribed from the two supplied reports.
 * Percentages are sample measurements, never commercial specifications.
 */
export type OutputId = "output-1" | "output-2";
export type AnalysisResult = {
  parameter: string;
  result: string;
  method: string;
  unit?: string;
};
export type PowderOutput = {
  id: OutputId;
  label: string;
  number: string;
  reportNumber: string;
  labSampleId: string;
  sampleName: string;
  matrix: "Powder";
  reported_mitragynine_result: string;
  commercial_specification: null;
  method: string;
  received: string;
  completed: string;
  laboratory: string;
  summary: string;
  identityInterpretation: string | null;
  additionalResults: AnalysisResult[];
};
export const biotekReports: PowderOutput[] = [
  {
    id: "output-1",
    label: "BIOTEK Analysis Report — 002",
    number: "01",
    reportNumber: "002/TRL-BRI/X/2026",
    labSampleId: "BRI-TRL1026-0002",
    sampleName: "E.KRATOM 25 ppm",
    matrix: "Powder",
    reported_mitragynine_result: "82.27%",
    commercial_specification: null,
    method: "BRI-IK-LAB-006V01, UHPLC",
    received: "20 October 2026",
    completed: "23 October 2026",
    laboratory: "PT Biotek Rekayasa Indonesia",
    summary:
      "Powder sample tested by UHPLC. The report also includes an NMR interpretation consistent with mitragynine identity.",
    identityInterpretation:
      "The report’s ¹H-NMR interpretation states that the sample identity is consistent with mitragynine. This is a qualitative identity interpretation, separate from the UHPLC percentage measurement.",
    additionalResults: [],
  },
  {
    id: "output-2",
    label: "BIOTEK Analysis Report — 003",
    number: "02",
    reportNumber: "003/TRL-BRI/X/2026",
    labSampleId: "BRI-TRL1026-0003",
    sampleName: "FRN_171026",
    matrix: "Powder",
    reported_mitragynine_result: "73.44%",
    commercial_specification: null,
    method: "BRI-IK-LAB-006V01, UHPLC",
    received: "20 October 2026",
    completed: "23 October 2026",
    laboratory: "PT Biotek Rekayasa Indonesia",
    summary:
      "Powder sample tested for mitragynine, 7-hydroxymitragynine, and the contaminants listed in the accompanying report.",
    identityInterpretation: null,
    additionalResults: [
      {
        parameter: "7-Hydroxymitragynine",
        result: "<0.05%",
        method: "AOAC 2017.14",
      },
      {
        parameter: "Arsenic / As",
        result: "0.24 mg/kg",
        method: "BRI-IK-LAB-007V01, ICP-OES",
      },
      {
        parameter: "Cadmium / Cd",
        result: "<0.10 mg/kg",
        method: "BRI-IK-LAB-010V01, ICP-OES",
      },
      {
        parameter: "Lead / Pb",
        result: "0.76 mg/kg",
        method: "BRI-IK-LAB-008V01, ICP-OES",
      },
      {
        parameter: "Mercury / Hg",
        result: "<0.10 mg/kg",
        method: "BRI-IK-LAB-009V01, ICP-OES",
      },
      {
        parameter: "Aerobic Plate Count",
        result: "<10 CFU/g",
        method: "AOAC 2015.13",
      },
      {
        parameter: "Total Coliform Bacteria",
        result: "<10 CFU/g",
        method: "AOAC OM 2018.13",
      },
      {
        parameter: "Escherichia coli",
        result: "<10 CFU/g",
        method: "AOAC 2018.13",
      },
      {
        parameter: "Salmonella spp",
        result: "Absent",
        unit: "CFU/g",
        method: "AOAC PTM 092101",
      },
      ...["B1", "B2", "G1", "G2"].map((name) => ({
        parameter: `Aflatoxin ${name}`,
        result: "Not Detected",
        unit: "mg/kg",
        method: "HPLC-FLD",
      })),
      ...[
        "Acenaphthylene",
        "Indeno(1.2.3-cd)pyrene",
        "Benzo(g.h.i)perylene",
        "Dibenzo(a.h)anthracene",
        "Benzo(a)pyrene",
        "Chrysene",
        "Benzo(k)fluoranthene",
        "Benzo(b)fluoranthene",
        "Benzo(a)anthracene",
        "Pyrene",
        "Fluoranthene",
        "Anthracene",
        "Phenanthrene",
        "Fluorene",
        "Acenaphthene",
        "Naphthalene",
      ].map((parameter) => ({
        parameter,
        result: "Not Detected",
        unit: "mg/kg",
        method: "GC-MS",
      })),
    ],
  },
];
export const sampleResultNote =
  "Results apply to the tested samples only. Specifications for supplied material must be agreed separately and supported by the relevant documentation.";
export const reportScopeNote =
  "Each report relates to the sample received and analysed by the laboratory. These results do not establish specifications for all future production or confirm regulatory approval in any market.";
export const companyDescription =
  "PT Phyto Anugrah Biotech is an Indonesian company focused on producing and supplying kratom extract powder for business customers. Explore our documentation in two laboratory categories: Murray-Brown Laboratories, INC. and BIOTEK Rekayasa Indonesia.";

export type ReportDocument = {
  id: string;
  title: string;
  reference: string;
  pages: string[];
};
export type OutputCategory = {
  id: "murray-brown" | "biotek";
  label: string;
  number: string;
  subtitle: string;
  summary: string;
  documents: ReportDocument[];
};
export const outputs: OutputCategory[] = [
  {
    id: "murray-brown",
    label: "Murray-Brown Laboratories, INC.",
    number: "01",
    subtitle: "Analysis Report",
    summary: "Explore the certificate of analysis for the Kratom Mitragynine sample, including alkaloids, microbiology, metals, and residual solvents.",
    documents: [{
      id: "murray-2604935",
      title: "Murray-Brown Analysis Report",
      reference: "2604935",
      pages: ["/images/reports/murray-1.webp", "/images/reports/murray-2.webp"],
    }],
  },
  {
    id: "biotek",
    label: "BIOTEK Rekayasa Indonesia",
    number: "02",
    subtitle: "Two reports. One category.",
    summary: "Review two sample-specific certificates together in one category. Each report retains its own sample identity, results, and scope of testing.",
    documents: biotekReports.map((report) => ({
      id: report.id,
      title: report.label,
      reference: report.reportNumber,
      pages: Array.from({ length: report.id === "output-1" ? 5 : 4 }, (_, i) => `/images/reports/biotek-${report.id === "output-1" ? "002" : "003"}-${i + 1}.webp`),
    })),
  },
];
export function outputContext(output: OutputCategory) {
  return `${output.label} — ${output.subtitle}\nReports: ${output.documents.map((d) => d.reference).join(", ")}`;
}
export function outputContactHref(output: OutputCategory | PowderOutput, documentation = false) {
  const id = output.id === "output-1" || output.id === "output-2" ? "biotek" : output.id;
  return `/contact?output=${id}${documentation ? "&request=documentation" : ""}#enquiry`;
}
