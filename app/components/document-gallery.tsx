"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import type { ReportDocument } from "../../lib/outputs";

export default function DocumentGallery({ document }: { document: ReportDocument }) {
  const [page, setPage] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const previous = () => setPage((current) => Math.max(0, current - 1));
  const next = () => setPage((current) => Math.min(document.pages.length - 1, current + 1));
  const controls = (
    <div className="document-controls">
      <button type="button" onClick={previous} disabled={page === 0} aria-label="Previous document page"><ArrowLeft size={18} /></button>
      <span aria-live="polite">Page {page + 1} of {document.pages.length}</span>
      <button type="button" onClick={next} disabled={page === document.pages.length - 1} aria-label="Next document page"><ArrowRight size={18} /></button>
    </div>
  );
  return (
    <div className="document-gallery" aria-label={`${document.title} document viewer`}>
      <button className="document-preview" type="button" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge ${document.reference}, page ${page + 1}`}>
        <img src={document.pages[page]} alt={`${document.title}, report ${document.reference}, page ${page + 1}`} width={991} height={1400} loading="lazy" />
        <span><Expand size={16} /> Enlarge document</span>
      </button>
      {controls}
      <div className="document-thumbnails" aria-label="Select document page">
        {document.pages.map((src, index) => (
          <button type="button" key={src} aria-label={`View page ${index + 1}`} aria-pressed={page === index} onClick={() => setPage(index)}>
            <img src={src.replace('.webp', '-thumb.webp')} alt="" width={70} height={99} loading="lazy" />
            <span>{index + 1}</span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} className="document-dialog" aria-label={`${document.title} enlarged document`}>
        <div className="document-dialog-bar">
          <strong>{document.reference}</strong>
          {controls}
          <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close document"><X size={22} /></button>
        </div>
        <div className="document-dialog-page"><img src={document.pages[page]} alt={`${document.title}, page ${page + 1}`} width={991} height={1400} /></div>
      </dialog>
    </div>
  );
}
