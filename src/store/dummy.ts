import { jobDetailType } from "@/types/jobDetailType";
import { JobItemType } from "@/types/jobFilterDataType";
import { MyKeywordType } from "@/types/myKeywordType";
import { MyProfileType } from "@/types/myPageType";

export const dummyJobItems: JobItemType[] = [
  {
    id: 1,
    jobName: "한화 오션",
    title: "제조 생산직제조생",
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
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
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
  location: "Geoje Island, Korea",
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
