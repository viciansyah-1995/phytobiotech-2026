import type { Metadata } from "next";
import "./globals.css";
import SiteFrame from "./components/site-frame";
export const metadata: Metadata = {
  title: {
    default: "Kratom Extract Powder for B2B Supply | Phyto Biotech",
    template: "%s | Phyto Biotech",
  },
  description:
    "PT Phyto Anugrah Biotech supplies kratom extract powder for business customers, with sample-specific laboratory analysis documentation.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
