import { StaticImageData } from "next/image";

export interface LocalJob {
  id: number;
  local: string;
  imgUrl: StaticImageData;
}
