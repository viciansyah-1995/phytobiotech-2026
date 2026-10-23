"use client";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, MoveDown, X } from "lucide-react";
import { useReveal } from "../../lib/use-reveal";
import WhatsAppChat from "./whatsapp-chat";
import NavigationDropdown from "./navigation-dropdown";
import { outputs } from "../../lib/outputs";

function revealCategory(id: string) {
  requestAnimationFrame(() => {
    const category = document.getElementById(id);
    if (!category) return;
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 108;
    const top = category.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
    category.focus({ preventScroll: true });
    window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
}

export default function SiteFrame({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState<"about" | "product" | null>(null);
  const pendingCategory = useRef<string | null>(null);
  useReveal(path);
  useEffect(() => {
    if (path === "/product" && pendingCategory.current) {
      revealCategory(pendingCategory.current);
      pendingCategory.current = null;
    }
  }, [path]);
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      window.history.replaceState(window.history.state, "", url);
    }
  }, [path]);
  function close() {
    setMenu(false);
    setDropdown(null);
  }
  function selectCategory(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    close();
    if (path === "/product") {
      event.preventDefault();
      window.history.pushState(null, "", `/product#${id}`);
      revealCategory(id);
    } else pendingCategory.current = id;
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
          <NavigationDropdown label="About" id="about-submenu" open={dropdown === "about"} active={path === "/about" || path === "/profile"} onOpenChange={(open) => setDropdown(current => open ? "about" : current === "about" ? null : current)}>
            {navLink("About Company", "/about")}
            {navLink("About Kratom & Mitragynine", "/profile")}
          </NavigationDropdown>
          <NavigationDropdown label="Product" id="product-submenu" open={dropdown === "product"} active={path === "/product"} onOpenChange={(open) => setDropdown(current => open ? "product" : current === "product" ? null : current)}>
            <Link href="/product" className="product-menu-all" onClick={close}>Explore All Products <ArrowUpRight size={15} /></Link>
            <span className="micro product-menu-label">CHOOSE A PRODUCT CATEGORY</span>
            {outputs.map((category) => (
              <Link key={category.id} href={`/product#${category.id}`} scroll={false} className="product-menu-category" onClick={(event) => selectCategory(event, category.id)}>
                <span className="product-menu-index">{category.number}</span>
                <span><strong>{category.label}</strong><small>{category.id === "biotek" ? "Two analysis reports · Industrial applications" : "Analysis report · Industrial applications"}</small></span>
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </NavigationDropdown>
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
            setDropdown(null);
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
          <span>Ingredients for your next formulation</span>
        </div>
      </footer>
      <WhatsAppChat />
    </>
  );
}
