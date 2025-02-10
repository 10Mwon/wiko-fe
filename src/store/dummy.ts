import { jobDetailType } from "@/types/jobDetailType";
import { JobItemType } from "@/types/jobFilterDataType";
import { MyKeywordType } from "@/types/myKeywordType";
import { MyProfileType } from "@/types/myPageType";

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
  {
    id: 4,
    jobName: "현대자동차",
    title: "차량 조립공",
    location: "울산광역시 북구",
    pay: "46000000",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 5,
    jobName: "포스코",
    title: "제철소 생산직",
    location: "경상북도 포항시",
    pay: "43000000",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 6,
    jobName: "SK하이닉스",
    title: "반도체 공정",
    location: "경기도 이천시",
    pay: "48000000",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 7,
    jobName: "롯데케미칼",
    title: "화학 공장 오퍼레이터",
    location: "충청남도 대산",
    pay: "47000000",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 8,
    jobName: "두산인프라코어",
    title: "중장비 조립",
    location: "인천광역시 동구",
    pay: "44000000",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 9,
    jobName: "한온시스템",
    title: "자동차 부품 생산",
    location: "대전광역시 유성구",
    pay: "41000000",
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 10,
    jobName: "GS건설",
    title: "건설 현장 관리",
    location: "서울특별시 강남구",
    pay: "50000000",
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
  education: ["고등학교 졸업", "대학졸업 (2,3년)", "대학졸업(4년)"],
  langSkill: [
    "입문 (간단한 대화가능)",
    "초급 (일상 대화 원활)",
    "중급 (특정 주제 대화 가능)",
    "고급 (업무 대화 가능)",
  ],
  career: ["신입", "경력", "경력무관"],
  careerDetail: ["회사명", "근무기간", "담당업무"],
  strength: [
    "성실해요",
    "일처리 꼼꼼해요",
    "말을 조리 있게 해요",
    "끈기있어요",
    "자발적이에요",
    "습득이 빨라요",
    "강철체력이에요",
    "근무시간을 잘지켜요",
    "규정을 잘 지켜요",
    "자신감 있게 말해요",
    "책임감이 강해요",
    "자기관리를 잘해요",
    "열정적이에요",
    "커뮤니케이션을 잘해요",
    "적극적이에요",
  ],
  skills: [
    "커튼 및 블라인드 시공",
    "안전 관리",
    "청소 및 오픈/마감",
    "굴착기 조작 가능",
    "고객 응대 및 협업",
    "지게차 운전",
    "라떼 아트",
    "발렛",
    "용접",
    "요리",
    "작물 재배 및 관리",
    "농기계 사용",
    "목공 및 철근 조립",
  ],
};

export const dummyDetail: jobDetailType = {
  imgUrl: "https://picsum.photos/200/200",
  company: "한화오션 거제/옥포/통영",
  location: "경상남도 거제시 아주동",
  companyInfo: "조선소와 차별화된 근무환경 단열박스 가공조립",
  responsibilities: "LNG선 단열박스(목재상자) 가공/조립",
  qualifications: "만 20세 이상/초보자 가능",
  pay: "협의 후 결정",
  employmentType: "정규직",
  workPeriod: "6개월 이상",
  workHours: "주 40시간 (월~금, 09:00~18:00)",
  preferredQualifications: "거제 지역 거주자",
};
