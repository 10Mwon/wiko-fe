export interface industryDataType {
  id: number;
  code: string;
  industryName: string;
}

export interface JobItemType {
  id: number;
  jobName: string;
  title: string;
  location: string;
  pay?: string;
  imgUrl: string;
}
