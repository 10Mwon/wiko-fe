import { StaticImageData } from "next/image";

export interface LocalJob {
  imgUrl: StaticImageData;
  startAddress: string; // 도(道) 이름
  endAddress: string; // 도시 이름 (줄임)
  id: number; // 고유 ID
  location: string; // 전체 도시 이름
}
