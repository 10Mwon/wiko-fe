export interface resumePostType {
  resumeImage: string;
  education: string;
  languageSkill: string;
  careerType: string;
  joinedAtMonth: string;
  careerDetail: CareerDetailType;
  strength: string[];
  jobSkill: string[];
  introduction: string;
}

export interface CareerDetailType {
  company?: string;
  joinedAt?: string;
  leavedAt?: string;
  isWorking?: boolean;
  position?: string;
}

export interface commonResponse<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}
