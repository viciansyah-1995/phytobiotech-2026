"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { businessContact, whatsappUrl, outputMessage } from "../../lib/contact";
import { outputs } from "../../lib/outputs";

const topics = [
  { label: "Product information", request: "product information" },
  { label: "Analysis documentation", request: "analysis documentation" },
  {
    label: "Supply requirements",
    request: "a discussion about supply requirements",
  },
];

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [outputId, setOutputId] = useState("assistance");
  const [message, setMessage] = useState(businessContact.defaultMessage);
  const toggle = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
    toggle.current?.focus();
  }
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <>
      <button
        ref={toggle}
        className="assistant-toggle whatsapp-toggle"
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        aria-expanded={open}
        aria-controls="whatsapp-chat"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={19} /> : <MessageCircle size={19} />}
        <span>Chat on WhatsApp</span>
      </button>
      {open && (
        <aside
          id="whatsapp-chat"
          className="assistant-panel whatsapp-panel"
          aria-labelledby="whatsapp-title"
        >
          <div className="whatsapp-header">
            <span className="whatsapp-avatar">
              <img
                src="/images/phytobiotech-logo-dark.png"
                alt=""
                width={45}
                height={38}
              />
            </span>
            <div>
              <strong id="whatsapp-title">Phyto Biotech</strong>
              <span>Business enquiries</span>
            </div>
            <button onClick={close} aria-label="Close WhatsApp chat">
              <X size={18} />
            </button>
          </div>
          <div className="whatsapp-content">
            <div className="whatsapp-greeting">
              <strong>Explore our documentation.</strong>
              <p>
                Request product information or sample analysis documentation for
                either laboratory category.
              </p>
            </div>
            <label className="whatsapp-message">
              Category of interest
              <select
                value={outputId}
                onChange={(event) => {
                  setOutputId(event.target.value);
                  setMessage(outputMessage(event.target.value));
                }}
              >
                {outputs.map((output) => (
                  <option key={output.id} value={output.id}>
                    {output.label}
                  </option>
                ))}
                <option value="assistance">Need assistance</option>
              </select>
            </label>
            <div
              className="whatsapp-topics"
              aria-label="Choose an inquiry topic"
            >
              {topics.map((topic) => (
                <button
                  key={topic.label}
                  type="button"
                  aria-pressed={
                    message === outputMessage(outputId, topic.request)
                  }
                  onClick={() =>
                    setMessage(outputMessage(outputId, topic.request))
                  }
                >
                  {topic.label}
                </button>
              ))}
            </div>
            <div className="whatsapp-message">
              <label htmlFor="whatsapp-message">Your message</label>
              <textarea
                id="whatsapp-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={4}
                maxLength={2000}
              />
            </div>
            <a
              className="button whatsapp-action"
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue to WhatsApp <ArrowUpRight size={17} />
            </a>
            <p className="whatsapp-caption">
              Opens WhatsApp with your message ready to send.
            </p>
            <span className="whatsapp-number">
              {businessContact.whatsappDisplay}
            </span>
          </div>
        </aside>
      )}
    </>
  );
}
