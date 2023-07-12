import { portfolioSelectionIconsType } from "./portfolioTypes";

const basePortfolioImage: string = "/images/portfolio/icons";

export enum carTagType {
  toyota = "toyota",
  tesla = "tesla",
  porsche = "porsche",
  nissan = "nissan",
  mini = "mini",
  mercedes = "mercedes",
  mclaren = "mclaren",
  landRover = "land-rover",
  lamborghini = "lamborghini",
  jeep = "jeep",
  infinity = "infinity",
  honda = "honda",
  gmc = "gmc",
  ford = "ford",
  ferrari = "ferrari",
  dodge = "dodge",
  corvette = "corvette",
  chevrolet = "chevrolet",
  cadillac = "cadillac",
  bmw = "bmw",
  audi = "audi",
  astonmartin = "astonmartin",
  bentley = "bentley",
  genesis = "genesis",
  hyundai = "hyundai",
  jaguar = "jaguar",
  lexus = "lexus",
  MG = "MG",
  mistubishi = "mistubishi",
  skoda = "skoda",
  volkswagen = "volkswagen",
  volvo = "volvo",
  mazda = "mazda",
}

export const portfolioSelectionIcons: portfolioSelectionIconsType[] = [
  { image: `${basePortfolioImage}/toyota.svg`, tag: carTagType.toyota },
  { image: `${basePortfolioImage}/tesla.svg`, tag: carTagType.tesla },
  { image: `${basePortfolioImage}/Porsche.svg`, tag: carTagType.porsche },
  { image: `${basePortfolioImage}/Nissan.svg`, tag: carTagType.nissan },
  { image: `${basePortfolioImage}/Mini.svg`, tag: carTagType.mini },
  { image: `${basePortfolioImage}/Mercedes.svg`, tag: carTagType.mercedes },
  { image: `${basePortfolioImage}/Mclaren.svg`, tag: carTagType.mclaren },
  { image: `${basePortfolioImage}/LR.svg`, tag: carTagType.landRover },
  {
    image: `${basePortfolioImage}/Lamborghini.svg`,
    tag: carTagType.lamborghini,
  },
  { image: `${basePortfolioImage}/Jeep.svg`, tag: carTagType.jeep },
  { image: `${basePortfolioImage}/Infinity.svg`, tag: carTagType.infinity },
  { image: `${basePortfolioImage}/Honda.svg`, tag: carTagType.honda },
  { image: `${basePortfolioImage}/GMC.svg`, tag: carTagType.gmc },
  { image: `${basePortfolioImage}/Ford.svg`, tag: carTagType.ford },
  { image: `${basePortfolioImage}/Ferrari.svg`, tag: carTagType.ferrari },
  { image: `${basePortfolioImage}/Dodge.svg`, tag: carTagType.dodge },
  { image: `${basePortfolioImage}/Corvette.svg`, tag: carTagType.corvette },
  { image: `${basePortfolioImage}/Chevrolet.svg`, tag: carTagType.chevrolet },
  { image: `${basePortfolioImage}/Cadillac.svg`, tag: carTagType.cadillac },
  { image: `${basePortfolioImage}/BMW.svg`, tag: carTagType.bmw },
  { image: `${basePortfolioImage}/Audi.svg`, tag: carTagType.audi },
  {
    image: `${basePortfolioImage}/AstonMartin.svg`,
    tag: carTagType.astonmartin,
  },
  {
    image: `${basePortfolioImage}/bentley.svg`,
    tag: carTagType.bentley,
  },
  {
    image: `${basePortfolioImage}/genesis.svg`,
    tag: carTagType.genesis,
  },
  {
    image: `${basePortfolioImage}/hyundai.svg`,
    tag: carTagType.hyundai,
  },
  {
    image: `${basePortfolioImage}/jaguar.svg`,
    tag: carTagType.jaguar,
  },
  {
    image: `${basePortfolioImage}/lexus.svg`,
    tag: carTagType.lexus,
  },
  {
    image: `${basePortfolioImage}/MG.svg`,
    tag: carTagType.MG,
  },
  {
    image: `${basePortfolioImage}/mitsubishi.svg`,
    tag: carTagType.mistubishi,
  },
  {
    image: `${basePortfolioImage}/skoda.svg`,
    tag: carTagType.skoda,
  },
  {
    image: `${basePortfolioImage}/volkswagen.svg`,
    tag: carTagType.volkswagen,
  },
  {
    image: `${basePortfolioImage}/volvo.svg`,
    tag: carTagType.volvo,
  },
  {
    image: `${basePortfolioImage}/mazda.svg`,
    tag: carTagType.mazda,
  },
];

const basePortfolioDisplay: string = "/images/portfolio/display";

export const PortfolioDisplayData: portfolioSelectionIconsType[] = [
  { image: `${basePortfolioDisplay}/audi-1.webp`, tag: carTagType.audi },
  { image: `${basePortfolioDisplay}/audi-2.webp`, tag: carTagType.audi },
  {
    image: `${basePortfolioDisplay}/bentley-1.webp`,
    tag: carTagType.bentley,
  },
  { image: `${basePortfolioDisplay}/bmw-1.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-2.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-3.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-4.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-5.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-6.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-7.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-8.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-9.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-10.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/bmw-11.webp`, tag: carTagType.bmw },
  { image: `${basePortfolioDisplay}/ford-1.webp`, tag: carTagType.ford },
  { image: `${basePortfolioDisplay}/ford-2.webp`, tag: carTagType.ford },
  { image: `${basePortfolioDisplay}/ford-3.webp`, tag: carTagType.ford },
  { image: `${basePortfolioDisplay}/genesis-1.webp`, tag: carTagType.genesis },
  { image: `${basePortfolioDisplay}/hyundai-1.webp`, tag: carTagType.hyundai },
  { image: `${basePortfolioDisplay}/jaguar-1.webp`, tag: carTagType.jaguar },
  { image: `${basePortfolioDisplay}/jaguar-2.webp`, tag: carTagType.jaguar },
  {
    image: `${basePortfolioDisplay}/land-rover-1.webp`,
    tag: carTagType.landRover,
  },
  {
    image: `${basePortfolioDisplay}/land-rover-2.webp`,
    tag: carTagType.landRover,
  },
  {
    image: `${basePortfolioDisplay}/land-rover-3.webp`,
    tag: carTagType.landRover,
  },
  {
    image: `${basePortfolioDisplay}/land-rover-4.webp`,
    tag: carTagType.landRover,
  },
  { image: `${basePortfolioDisplay}/lexus-1.webp`, tag: carTagType.lexus },
  {
    image: `${basePortfolioDisplay}/mercedes-1.webp`,
    tag: carTagType.mercedes,
  },
  {
    image: `${basePortfolioDisplay}/mercedes-2.webp`,
    tag: carTagType.mercedes,
  },
  {
    image: `${basePortfolioDisplay}/mercedes-3.webp`,
    tag: carTagType.mercedes,
  },
  { image: `${basePortfolioDisplay}/MG-1.webp`, tag: carTagType.MG },
  { image: `${basePortfolioDisplay}/mini-1.webp`, tag: carTagType.mini },
  {
    image: `${basePortfolioDisplay}/mistubishi-1.webp`,
    tag: carTagType.mistubishi,
  },
  { image: `${basePortfolioDisplay}/skoda-1.webp`, tag: carTagType.skoda },
  { image: `${basePortfolioDisplay}/tesla-1.webp`, tag: carTagType.tesla },
  { image: `${basePortfolioDisplay}/toyota-1.webp`, tag: carTagType.toyota },
  {
    image: `${basePortfolioDisplay}/volkswagen-1.webp`,
    tag: carTagType.volkswagen,
  },
  {
    image: `${basePortfolioDisplay}/volkswagen-2.webp`,
    tag: carTagType.volkswagen,
  },
  {
    image: `${basePortfolioDisplay}/volkswagen-3.webp`,
    tag: carTagType.volkswagen,
  },
  {
    image: `${basePortfolioDisplay}/volkswagen-4.webp`,
    tag: carTagType.volkswagen,
  },
  { image: `${basePortfolioDisplay}/volvo-1.webp`, tag: carTagType.volvo },
  { image: `${basePortfolioDisplay}/mazda-1.webp`, tag: carTagType.mazda },
  { image: `${basePortfolioDisplay}/`, tag: "" },
];

export const groupedIcons: Record<string, portfolioSelectionIconsType[]> = {};

PortfolioDisplayData.forEach((image) => {
  const { tag } = image;

  if (groupedIcons[tag]) {
    groupedIcons[tag].push(image);
  } else {
    groupedIcons[tag] = [image];
  }
});
