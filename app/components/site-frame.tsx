"use client";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, MoveDown, X } from "lucide-react";
import { useReveal } from "../../lib/use-reveal";
import WhatsAppChat from "./whatsapp-chat";

export default function SiteFrame({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const [about, setAbout] = useState(false);
  useReveal(path);
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      window.history.replaceState(window.history.state, "", url);
    }
  }, [path]);
  function close() {
    setMenu(false);
    setAbout(false);
  }
  const navLink = (label: string, href: string) => (
    <Link
      href={href}
      aria-current={path === href ? "page" : undefined}
      onClick={close}
    >
      {label}
    </Link>
  );
  return (
    <>
      <div className="announcement">
        <span>KRATOM EXTRACT POWDER · B2B SUPPLY</span>
        <span>
          PT Phyto Anugrah Biotech <ArrowUpRight size={12} />
        </span>
      </div>
      <div className="reading-progress" aria-hidden="true" />
      <header>
        <Link
          className="brand"
          href="/"
          aria-label="Phyto Biotech home"
          onClick={close}
        >
          <img
            className="company-logo"
            src="/images/phytobiotech-logo-dark.png"
            alt="Phyto Biotech"
            width={1000}
            height={827}
          />
        </Link>
        <nav aria-label="Main navigation" className={menu ? "nav open" : "nav"}>
          {navLink("Home", "/")}
          <div
            className={`about-nav ${about ? "expanded" : ""}`}
            onPointerEnter={(event) => {
              if (
                event.pointerType === "mouse" &&
                window.matchMedia("(min-width: 851px)").matches
              )
                setAbout(true);
            }}
            onPointerLeave={(event) => {
              if (
                event.pointerType === "mouse" &&
                window.matchMedia("(min-width: 851px)").matches
              )
                setAbout(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setAbout(false);
                event.currentTarget.querySelector("button")?.focus();
              }
            }}
          >
            <button
              type="button"
              aria-expanded={about}
              aria-controls="about-submenu"
              onClick={(event) => {
                if (
                  event.detail > 0 &&
                  window.matchMedia("(min-width: 851px) and (hover: hover)")
                    .matches
                )
                  setAbout(true);
                else setAbout(!about);
              }}
            >
              About <ChevronDown size={12} />
            </button>
            <div id="about-submenu" className="about-submenu">
              {navLink("About Company", "/about")}
              {navLink("About Kratom & Mitragynine", "/profile")}
            </div>
          </div>
          {navLink("Product", "/product")}
          {navLink("Lab Test", "/labtest")}
          {navLink("Quality Control", "/qualitycontrol")}
          {navLink("Contact", "/contact")}
          <Link className="nav-mobile-cta" href="/contact" onClick={close}>
            Request Product Information <ArrowUpRight size={15} />
          </Link>
        </nav>
        <Link className="button header-cta" href="/contact" onClick={close}>
          Request Product Information <ArrowUpRight size={15} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          onClick={() => {
            setMenu(!menu);
            setAbout(false);
          }}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      {children}
      <footer className="wrap">
        <div data-reveal="" className="footer-top">
          <Link href="/" className="brand" aria-label="Phyto Biotech home">
            <img
              className="company-logo"
              src="/images/phytobiotech-logo-dark.png"
              alt="Phyto Biotech"
              width={1000}
              height={827}
            />
          </Link>
          <p>
            PT Phyto Anugrah Biotech
            <br />
            Kratom extract powder for B2B supply.
          </p>
          <a className="back-top" href="#top">
            Back to top <MoveDown size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PT Phyto Anugrah Biotech</span>
          <span>INDONESIA · BUSINESS ENQUIRIES</span>
          <span>Two laboratory categories</span>
        </div>
      </footer>
      <WhatsAppChat />
    </>
  );
}
