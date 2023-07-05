export type navLinksType = {
  title: string;
  link: string;
};

export type servicesDataType = {
  title: string;
  image: string;
  link: string;
};

export type partnersImagesType = {
  alt: string;
  image: string;
};

export type reviewsDataType = {
  title: string;
  description: string;
  name: string;
  logo: string;
};

export type portfolioImagesType = {
  title: string;
  image: string;
};

export type linkType = {
  title: string;
  link: string;
};

type socialsType = {
  title: string;
  link: string;
  image: string;
};

export type FooterDataType = {
  pages: linkType[];
  services: linkType[];
  misc: linkType[];
  socials: socialsType[];
};
