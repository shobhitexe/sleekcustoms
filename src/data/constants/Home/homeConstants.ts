import {
  navLinksType,
  servicesDataType,
  partnersImagesType,
  portfolioImagesType,
  FooterDataType,
} from "./homeTypes";

export const navbarLinks: navLinksType[] = [
  { title: "Services", link: "/#services" },
  { title: "About", link: "/about" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Reviews", link: "/customer-reviews" },
  // { title: "Blog", link: "" },
];

const imgBaseServices: string = "/images/services";

export const servicesData: servicesDataType[] = [
  {
    title: "AUTO DETAILING",
    image: `${imgBaseServices}/detailing.webp`,
    link: "/premium-detail",
  },
  {
    title: "CERAMIC COATING",
    image: `${imgBaseServices}/ceramic-coating.webp`,
    link: "/ceramic-coating",
  },
  {
    title: "PAINT CORRECTION",
    image: `${imgBaseServices}/paint-correction.webp`,
    link: "/paint-correction",
  },
  {
    title: "PAINT PROTECTION FILMs",
    image: `${imgBaseServices}/paint-protection.webp`,
    link: "/paint-protection",
  },
];

const imgBasePartners: string = "/images/partners";

export const partnersImages: partnersImagesType[] = [
  { alt: "Wax is dead", image: `${imgBasePartners}/wax-is-dead-logo.webp` },
  { alt: "Kamikaze", image: `${imgBasePartners}/Kamikaze.webp` },
  { alt: "Avery", image: `${imgBasePartners}/Avery.webp` },
];

const imageBasePortfolio: string = "/images/portfolio";

export const portfolioImages: portfolioImagesType[] = [
  { title: "Tesla", image: `${imageBasePortfolio}/pf-1.webp` },
  { title: "BMW", image: `${imageBasePortfolio}/pf-2.webp` },
  { title: "Genesis", image: `${imageBasePortfolio}/pf-3.webp` },
  { title: "Ford", image: `${imageBasePortfolio}/pf-4.webp` },
  { title: "Toyota", image: `${imageBasePortfolio}/pf-5.webp` },
  { title: "Lexus", image: `${imageBasePortfolio}/pf-6.webp` },
];

const imageBaseFooter: string = "/images/footer";

export const footerData: FooterDataType = {
  pages: [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },

    { title: "Reviews", link: "/customer-reviews" },
  ],
  services: [
    { title: "Detailing", link: "/premium-detail" },
    { title: "Ceramic Coating", link: "/ceramic-coating" },
    { title: "Paint correction", link: "/paint-correction" },
    { title: "Paint Protection Film", link: "/paint-protection" },
  ],
  misc: [
    { title: "Terms & Conditions", link: "" },
    { title: "FAQ", link: "" },
  ],
  socials: [
    {
      title: "instagram",
      link: "https://www.instagram.com/sleekcustomsgarage/",
      image: `${imageBaseFooter}/insta.webp`,
    },
    {
      title: "facebook",
      link: "https://www.facebook.com/SleekCustomsGarage",
      image: `${imageBaseFooter}/facebook.webp`,
    },
  ],
};
