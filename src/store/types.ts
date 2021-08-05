import { ImageSourcePropType } from "react-native";

export enum ConservationStatus {
  ne = "NE",
  dd = "DD",
  lc = "LC",
  nt = "NT",
  vu = "VU",
  en = "EN",
  cr = "CR",
  ew = "EW",
  ex = "EX",
}

export interface FishData {
  name: string;
  imageSrc: ImageSourcePropType;
  scientificName: string;
  diet: string;
  maxSize: string;
  funFacts: string[];

  conservationStatus: ConservationStatus;
  geolocation?: {
    image: ImageSourcePropType;
    type: string;
    sea: string;
  }
}