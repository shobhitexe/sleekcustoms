import {
  autoDetailingPackagesDataType,
  detailingAddonsDataType,
} from "./autoDetailingTypes";

export const autoDetailingMainImagesData: string[] = [
  "AD-1.png",
  "AD-2.png",
  "AD-3.png",
  "AD-4.png",
  "AD-5.png",
];

export const autoDetailingPackagesData: autoDetailingPackagesDataType[] = [
  {
    heading: "FULL DETAIL",
    sub_heading: "RECOMMENDED",
    pointers: ["EXTERIOR DELIVERABLES", "INTERIOR DELIVERABLES"],
    price: 199.99,
  },
  {
    heading: "INTERIOR DETAILING",
    pointers: [
      "Full vacuum",
      "Bacteria removal",
      "Panels cleaned and protected",
      "Center console and cockpit cleaned and protected",
      "Spot removal",
      "Leather/ fabric seats cleaned or shampoo",
      "Leather conditioning",
      "Floor mats and carpets cleaned and shampooed",
      "Trunk vacuumed",
      "Windows cleaned",
      "UV protectant",
    ],
    other_info: "* Additional charge for pet hair, blood, and vomit.",
    price: 69.99,
  },
  {
    heading: "EXTERIOR DETAILING",
    pointers: [
      "Foam bath",
      "Mechanical decontamination",
      "Chemical decontamination",
      "Wheels treated and cleaned",
      "Undercarriage sprayed",
      "Hand wash",
      "Hand dried",
      "Hand wax",
      "Low shine tire dressing",
      "Trims protected",
    ],
    price: 49.99,
  },
];

export const detailingAddonsData: detailingAddonsDataType[] = [
  { heading: "HAND WASHES", price: "£49.99" },
  { heading: "ALLOY WASH", price: "Starting at £29.99" },
  { heading: "DOG HAIR REMOVAL", price: "Call for pricing" },
];
