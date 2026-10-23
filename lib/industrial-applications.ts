/** Shared application formats from https://phytobiotech.id/product.html.
 * These are application examples, not extra product categories or sample specifications.
 */
export const industrialApplications = [
  {
    id: "raw-leaf-powder",
    title: "Raw Leaf Powder",
    format: "RAW MATERIAL",
    image: "/images/applications/powder.webp",
    description: "Leaf powder as a raw material for further processing.",
  },
  {
    id: "extract",
    title: "Extract",
    format: "CONCENTRATED FORMAT",
    image: "/images/applications/ekstrak.webp",
    description: "Concentrated kratom extract for formulation development.",
  },
  {
    id: "gummies",
    title: "Gummies",
    format: "FORMULATED PRODUCT",
    image: "/images/applications/gum.webp",
    description: "Extract-infused formulations in a flavoured gummy format.",
  },
  {
    id: "tablets-capsules-gelcaps",
    title: "Tablets, Capsules & Gelcaps",
    format: "FORMULATED PRODUCT",
    image: "/images/applications/tablet.webp",
    description: "Powder or extract in encapsulated or compressed formats.",
  },
  {
    id: "soft-drinks",
    title: "Soft Drinks",
    format: "FORMULATED PRODUCT",
    image: "/images/applications/softdrink.webp",
    description: "Extract-infused beverage formulations and flavour development.",
  },
  {
    id: "vape",
    title: "Vape",
    format: "FORMULATED PRODUCT",
    image: "/images/applications/vape.webp",
    description: "Extract-based formulations for vaporization systems.",
  },
] as const;
