export interface industryDataType {
  id: number;
  code: string;
  industryName: string;
}

export interface JobItemType {
  id: string;
  company: string;
  title: string;
  location: string;
  pay?: string;
  imgUrl: string;
}
