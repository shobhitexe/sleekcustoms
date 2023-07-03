import {
  navLinksType,
  servicesDataType,
  partnersImagesType,
  reviewsDataTypes,
} from "./types";

export const navbarLinks: navLinksType[] = [
  { title: "Services", link: "" },
  { title: "About", link: "" },
  { title: "Portfolio", link: "" },
  { title: "Reviews", link: "" },
  { title: "Blog", link: "" },
];

const imgBaseServices: string = "/src/assets/services";

export const servicesData: servicesDataType[] = [
  { title: "DETAILING", image: `${imgBaseServices}/detailing.png` },
  { title: "CERAMIC COATING", image: `${imgBaseServices}/ceramic-coating.png` },
  {
    title: "PAINT CORRECTION",
    image: `${imgBaseServices}/paint-correction.png`,
  },
  {
    title: "PAINT PROTECTION FILMs",
    image: `${imgBaseServices}/paint-protection.png`,
  },
];

const imgBasePartners: string = "/src/assets/partners";

export const partnersImages: partnersImagesType[] = [
  { alt: "Onyx", image: `${imgBasePartners}/Onyx_Logo.png` },
  { alt: "Kamikaze", image: `${imgBasePartners}/Kamikaze.png` },
  { alt: "Avery", image: `${imgBasePartners}/Avery.png` },
];

const imageBaseReviews: string = "/src/assets/reviews/google.png";

export const reviewsData: reviewsDataTypes[] = [
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
