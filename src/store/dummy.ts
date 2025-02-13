import { JobItemType } from "@/types/jobFilterDataType";
import { MyKeywordType } from "@/types/myKeywordType";
import { MyProfileType } from "@/types/myPageType";
import boryeong from "../../public/assets/home/boryeong.png";
import miryang from "../../public/assets/home/miryang.png";
import mungyeong from "../../public/assets/home/mungyeong.png";
import sangju from "../../public/assets/home/sangju.png";
import taeback from "../../public/assets/home/taeback.png";

import { LocalJob } from "@/types/homeLocalType";
import { ResumeCategoryType, ResumeDataType } from "@/types/resumeType";

export const dummyJobItems: JobItemType[] = [
  {
    id: 1,
    jobName: "한화 오션",
    title: "한화 오션, 삼성 중공업 현장업무",
    location: "경상남도 거제시",
    pay: "42000000",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 2,
    jobName: "삼성중공업",
    title: "용접 기술자",
    location: "경상남도 거제시",
    pay: "45000000",
    imgUrl: "",
  },
  {
    id: 3,
    jobName: "LG전자",
    title: "가전제품 조립",
    location: "경기도 평택시",
    pay: "40000000",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
];

export const keywordData: MyKeywordType[] = [
  {
    label: "나이",
    value: ["20~30", "31~40", "41~50", "51이상"],
  },
  {
    label: "학력",
    value: ["고졸", "초대졸", "대졸이상"],
  },
  {
    label: "경험",
    value: ["운전", "식당", "공장", "농업", "건설", "통역", "기타"],
  },
  {
    label: "한국어능력",
    value: ["입문", "초급", "중급", "고급"],
  },
];

export const dummyMyProfile: MyProfileType = {
  img: "https://picsum.photos/200/200",
  name: "Dong Thu Thao",
  nation: "Geoje Island, Korea",
  email: "Thao@gmail.com",
  phone: "010-1234-5678",
  visa: "E-9",
};
export const ResumeCategory: ResumeCategoryType = {
  education: "최종학력",
  langSkill: "어학능력",
  career: "경력",
  careerDetail: "경력상세",
  strength: "나의 강점",
  skills: "업무 스킬",
};
export const ResumeData: ResumeDataType = {
  education: ["고등학교졸업", "대학졸업_23", "대학졸업_4"],
  langSkill: ["입문", "초급", "중급", "고급"],
  career: ["신입", "경력"],
  careerDetail: ["회사명", "근무기간", "담당업무"],
  strength: [
    "성실",
    "꼼꼼",
    "조리",
    "끈기",
    "자발적",
    "습득력",
    "체력",
    "근무시간준수",
    "규정",
    "자신감",
    "책임감",
    "자기관리",
    "열정적",
    "소통",
    "적극적",
  ],
  skills: [
    "커튼",
    "안전관리",
    "청소",
    "굴착기",
    "고객응대",
    "지게차",
    "라떼아트",
    "발렛",
    "용접",
    "요리",
    "작물재배",
    "농기계",
    "목공",
  ],
};

export const relatedLocalJobs: LocalJob[] = [
  {
    id: 1,
    local: "문경",
    imgUrl: mungyeong,
  },
  {
    id: 2,
    local: "태백",
    imgUrl: taeback,
  },
  {
    id: 3,
    local: "상주",
    imgUrl: sangju,
  },
  {
    id: 4,
    local: "보령",
    imgUrl: boryeong,
  },
  {
    id: 5,
    local: "미량",
    imgUrl: miryang,
  },
];
