"use client";
import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { outputs } from "../../lib/outputs";
import {
  type EnquiryFields,
  buildEnquiryMessage,
  businessContact,
  whatsappUrl,
} from "../../lib/contact";
export default function EnquiryForm({
  headingLevel = "h1",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const search = useSearchParams();
  const queryOutput = search.get("output");
  const requested = queryOutput === "output-1" || queryOutput === "output-2" ? "biotek" : queryOutput;
  const documentation = search.get("request") === "documentation";
  const [fields, setFields] = useState<EnquiryFields>({
    name: "",
    company: "",
    country: "",
    email: "",
    output: "assistance",
    message: "",
  });
  const [prepared, setPrepared] = useState(false);
  useEffect(() => {
    setFields((before) => ({
      ...before,
      output: outputs.some((o) => o.id === requested)
        ? requested!
        : "assistance",
      message: documentation
        ? "I would like to request the analysis documentation for the selected output."
        : before.message,
    }));
    setPrepared(false);
  }, [requested, documentation]);
  function change(field: keyof EnquiryFields, value: string) {
    setFields((before) => ({ ...before, [field]: value }));
    setPrepared(false);
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(true);
  }
  return (
    <section id="enquiry" className="inquiry section-pad">
      <div className="wrap inquiry-grid">
        <div>
          <span className="eyebrow">BUSINESS ENQUIRIES</span>
          <Heading>
            Request product
            <br />
            <em>information.</em>
          </Heading>
          <p>
            Tell us which category you are interested in and the information you
            need. Contact our team to discuss product specifications and supply
            requirements.
          </p>
          <div className="inquiry-note">
            <MessageCircle size={21} />
            <div>
              <strong>PT Phyto Anugrah Biotech</strong>
              <p>
                Two laboratory categories.
                <br />
                Sample-specific analysis documentation.
              </p>
            </div>
          </div>
          <div className="business-contact">
            <span className="micro">DIRECT BUSINESS CONTACT</span>
            <a href={`mailto:${businessContact.email}`}>
              {businessContact.email}
              <ArrowUpRight size={14} />
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp · {businessContact.whatsappDisplay}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="form-card">
          <form onSubmit={submit}>
            <div className="form-heading">
              <h3>Tell us your requirements.</h3>
              <span>* Required</span>
            </div>
            <div className="form-row">
              <label>
                Your name *
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  value={fields.name}
                  onChange={(e) => change("name", e.target.value)}
                />
              </label>
              <label>
                Company *
                <input
                  name="company"
                  autoComplete="organization"
                  required
                  maxLength={150}
                  value={fields.company}
                  onChange={(e) => change("company", e.target.value)}
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Country *
                <input
                  name="country"
                  autoComplete="country-name"
                  required
                  maxLength={100}
                  value={fields.country}
                  onChange={(e) => change("country", e.target.value)}
                />
              </label>
              <label>
                Business email *
                <input
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  maxLength={254}
                  value={fields.email}
                  onChange={(e) => change("email", e.target.value)}
                />
              </label>
            </div>
            <label>
              Category of interest *
              <select
                name="output"
                value={fields.output}
                onChange={(e) => change("output", e.target.value)}
              >
                {outputs.map((output) => (
                  <option key={output.id} value={output.id}>
                    {output.label}
                  </option>
                ))}
                <option value="assistance">Need assistance</option>
              </select>
            </label>
            <label>
              Message *
              <textarea
                name="message"
                rows={4}
                required
                maxLength={2000}
                placeholder="Your specification, documentation request, or supply requirements…"
                value={fields.message}
                onChange={(e) => change("message", e.target.value)}
              />
            </label>
            <button className="button submit-button" type="submit">
              Prepare WhatsApp Enquiry <ArrowUpRight size={17} />
            </button>
            <p className="form-disclaimer">
              Your details are included in a WhatsApp message only when you
              choose to continue. Send the enquiry in WhatsApp to contact our
              team.
            </p>
            {prepared && (
              <div className="prepared-enquiry" role="status">
                <Check size={19} />
                <p>Continue in WhatsApp to send your enquiry.</p>
                <a
                  className="button"
                  href={whatsappUrl(buildEnquiryMessage(fields))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continue to WhatsApp <ArrowUpRight size={16} />
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
