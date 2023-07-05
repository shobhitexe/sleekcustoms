import {
  navLinksType,
  servicesDataType,
  partnersImagesType,
  reviewsDataType,
  portfolioImagesType,
  FooterDataType,
} from "./homeTypes";

export const navbarLinks: navLinksType[] = [
  { title: "Services", link: "" },
  { title: "About", link: "" },
  { title: "Portfolio", link: "portfolio" },
  { title: "Reviews", link: "customer-reviews" },
  // { title: "Blog", link: "" },
];

const imgBaseServices: string = "/services";

export const servicesData: servicesDataType[] = [
  {
    title: "AUTO DETAILING",
    image: `${imgBaseServices}/detailing.png`,
    link: "premium-detail",
  },
  {
    title: "CERAMIC COATING",
    image: `${imgBaseServices}/ceramic-coating.png`,
    link: "",
  },
  {
    title: "PAINT CORRECTION",
    image: `${imgBaseServices}/paint-correction.png`,
    link: "",
  },
  {
    title: "PAINT PROTECTION FILMs",
    image: `${imgBaseServices}/paint-protection.png`,
    link: "",
  },
];

const imgBasePartners: string = "/partners";

export const partnersImages: partnersImagesType[] = [
  { alt: "Onyx", image: `${imgBasePartners}/Onyx_Logo.png` },
  { alt: "Kamikaze", image: `${imgBasePartners}/Kamikaze.png` },
  { alt: "Avery", image: `${imgBasePartners}/Avery.png` },
];

const imageBaseReviews: string = "/reviews/google.png";

export const reviewsData: reviewsDataType[] = [
  {
    title: "Worth the wait.",
    description: `Sleek Customs has been on my Rolodex for years. I finally pulled the trigger and to my pleasant surprise the ceramic coating was more than I could have ever expected. The team was quick, pleasant, and gone before I could say thank you a second time.`,
    name: "Ray F 22' GT3RS",
    logo: `${imageBaseReviews}`,
  },
  {
    title: "Worth the wait.",
    description: `Sleek Customs has been on my Rolodex for years. I finally pulled the trigger and to my pleasant surprise the ceramic coating was more than I could have ever expected. The team was quick, pleasant, and gone before I could say thank you a second time.`,
    name: "Ray F 22' GT3RS",
    logo: `${imageBaseReviews}`,
  },
  {
    title: "Worth the wait.",
    description: `Sleek Customs has been on my Rolodex for years. I finally pulled the trigger and to my pleasant surprise the ceramic coating was more than I could have ever expected. The team was quick, pleasant, and gone before I could say thank you a second time.`,
    name: "Ray F 22' GT3RS",
    logo: `${imageBaseReviews}`,
  },
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
    { title: "Home", link: "" },
    { title: "About", link: "" },
    { title: "Portfolio", link: "" },
    { title: "Blog", link: "" },
    { title: "Reviews", link: "" },
    { title: "Deals", link: "" },
  ],
  services: [
    { title: "Detailing", link: "" },
    { title: "Ceramic Coating", link: "" },
    { title: "Paint correction", link: "" },
    { title: "Clean Lab Aesthetics", link: "" },
  ],
  misc: [
    { title: "Terms & Conditions", link: "" },
    { title: "FAQ", link: "" },
  ],
  socials: [
    { title: "instagram", link: "", image: `${imageBaseFooter}/insta.png` },
    { title: "facebook", link: "", image: `${imageBaseFooter}/facebook.png` },
  ],
};
