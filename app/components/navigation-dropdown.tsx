"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export default function NavigationDropdown({
  label, id, open, active = false, onOpenChange, children,
}: {
  label: string;
  id: string;
  open: boolean;
  active?: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) onOpenChange(false);
    }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open, onOpenChange]);

  return (
    <div
      ref={root}
      className={`about-nav nav-dropdown ${id === "product-submenu" ? "product-nav" : ""} ${open ? "expanded" : ""}`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && window.matchMedia("(min-width: 851px)").matches) onOpenChange(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" && window.matchMedia("(min-width: 851px)").matches) onOpenChange(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) onOpenChange(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onOpenChange(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        data-active={active || undefined}
        onClick={(event) => {
          if (event.detail > 0 && window.matchMedia("(min-width: 851px) and (hover: hover)").matches) onOpenChange(true);
          else onOpenChange(!open);
        }}
      >
        {label}<ChevronDown size={13} aria-hidden="true" />
      </button>
      <div id={id} className="about-submenu nav-submenu">{children}</div>
    </div>
  );
}
