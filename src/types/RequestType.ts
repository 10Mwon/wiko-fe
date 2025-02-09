export interface resumePostType {
  resumeImgUrl: string;
  education: string;
  languageSkill: string;
  careerType: string;
  careerDetail: CareerDetailType;
  strength: string[];
  jobSkill: string[];
  introduction: string;
}

export interface CareerDetailType {
  company: string;
  joinedAt: string;
  leavedAt: string;
  joinedAtMonth: string;
  isWorking: boolean;
  postion: string;
}
