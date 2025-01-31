import { communityDataType, exchangeRateDataType } from "@/types/communityType";
import kazakhstan from "../../public/assets/dummy/kazakhstan.png";
import vnIcon from "../../public/assets/dummy/VN.png";

export const communityData: communityDataType[] = [
  {
    image: kazakhstan,
    countryName: "china",
  },
  {
    image: kazakhstan,
    countryName: "kazakhstan",
  },
  {
    image: kazakhstan,
    countryName: "philippines",
  },
  {
    image: kazakhstan,
    countryName: "vietnam",
  },
];

export const exchangeRateData: exchangeRateDataType[] = [
  {
    icon: vnIcon,
    Currencies: "베트남 동",
    exchangeRate: "5.87",
  },
  {
    icon: vnIcon,
    Currencies: "중국 위안",
    exchangeRate: "198.96",
  },
  {
    icon: vnIcon,
    Currencies: "필리핀 페소",
    exchangeRate: "24.78",
  },
  {
    icon: vnIcon,
    Currencies: "태국 바트",
    exchangeRate: "37.86",
  },
];
