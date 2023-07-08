import {
  navLinksType,
  servicesDataType,
  partnersImagesType,
  portfolioImagesType,
  FooterDataType,
} from "./homeTypes";

export const navbarLinks: navLinksType[] = [
  { title: "Services", link: "more-services" },
  { title: "About", link: "/about" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Reviews", link: "/customer-reviews" },
  // { title: "Blog", link: "" },
];

const imgBaseServices: string = "/services";

export const servicesData: servicesDataType[] = [
  {
    title: "AUTO DETAILING",
    image: `${imgBaseServices}/detailing.png`,
    link: "/premium-detail",
  },
  {
    title: "CERAMIC COATING",
    image: `${imgBaseServices}/ceramic-coating.png`,
    link: "/ceramic-coating",
  },
  {
    title: "PAINT CORRECTION",
    image: `${imgBaseServices}/paint-correction.png`,
    link: "/paint-correction",
  },
  {
    title: "PAINT PROTECTION FILMs",
    image: `${imgBaseServices}/paint-protection.png`,
    link: "/paint-protection",
  },
];

const imgBasePartners: string = "/partners";

export const partnersImages: partnersImagesType[] = [
  { alt: "Onyx", image: `${imgBasePartners}/Onyx_Logo.png` },
  { alt: "Kamikaze", image: `${imgBasePartners}/Kamikaze.png` },
  { alt: "Avery", image: `${imgBasePartners}/Avery.png` },
];

const imageBasePortfolio: string = "/portfolio";

export const portfolioImages: portfolioImagesType[] = [
  { title: "", image: `${imageBasePortfolio}/bmw.png` },
  { title: "ducati", image: `${imageBasePortfolio}/ducati.png` },
  { title: "porshe", image: `${imageBasePortfolio}/porshe-3.png` },
  { title: "porshe", image: `${imageBasePortfolio}/porshe-red.png` },
  { title: "porshe", image: `${imageBasePortfolio}/porshe.png` },
  { title: "porshe", image: `${imageBasePortfolio}/porshe-2.png` },
];

const imageBaseFooter: string = "/footer";

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
      image: `${imageBaseFooter}/insta.png`,
    },
    {
      title: "facebook",
      link: "https://www.facebook.com/SleekCustomsGarage",
      image: `${imageBaseFooter}/facebook.png`,
    },
  ],
};
