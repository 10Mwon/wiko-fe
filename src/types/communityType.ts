import { StaticImageData } from "next/image";

export interface communityDataType {
  image: string | StaticImageData;
  countryName: string;
}

export interface exchangeRateDataType {
  icon: string | StaticImageData;
  Currencies: string;
  exchangeRate: string;
}
