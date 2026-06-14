export const mainNavLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Studio", to: "/studio" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const footerStudioLinks = mainNavLinks.filter((link) => link.label !== "Home");

export const footerServices = [
  "Interior design",
  "Furniture selection",
  "Lighting plans",
  "Renovation styling",
  "Consultations",
];
