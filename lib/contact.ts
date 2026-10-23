import { outputs, outputContext } from "./outputs";
/** Retain the website's existing contact until BoD confirms .com versus .id. */
export const businessContact = {
  whatsappNumber: "6285117567871",
  whatsappDisplay: "+62 851-1756-7871",
  email: "sales@phytobiotech.com",
  defaultMessage: `Hello Phyto Biotech, I would like product information about your Murray-Brown and BIOTEK laboratory categories.\n\n${outputs.map(outputContext).join("\n\n")}\n\nPlease help me discuss the relevant documentation and supply requirements.`,
};
export function whatsappUrl(message = businessContact.defaultMessage) {
  return `https://wa.me/${businessContact.whatsappNumber}?text=${encodeURIComponent(message.trim() || businessContact.defaultMessage)}`;
}
export type EnquiryFields = {
  name: string;
  company: string;
  country: string;
  email: string;
  output: string;
  message: string;
};
export function buildEnquiryMessage(fields: EnquiryFields) {
  const output = outputs.find((item) => item.id === fields.output);
  const context = output
    ? outputContext(output)
    : `Need assistance with the two laboratory categories.\n\n${outputs.map(outputContext).join("\n\n")}`;
  return `Hello Phyto Biotech, I would like to request product information.\n\n${context}\n\nName: ${fields.name}\nCompany: ${fields.company}\nCountry: ${fields.country}\nBusiness email: ${fields.email}\n\nMessage: ${fields.message}`;
}
export function outputMessage(
  outputId: string,
  request = "product information",
) {
  const output = outputs.find((item) => item.id === outputId);
  const context = output
    ? outputContext(output)
    : outputs.map(outputContext).join("\n\n");
  return `Hello Phyto Biotech, I would like to request ${request}.\n\n${context}\n\nPlease help me discuss the relevant documentation and supply requirements.`;
}
