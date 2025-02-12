import { CareerDetailType, resumePostType } from "@/types/RequestType";
import { create } from "zustand";

interface ResumeState {
  resumeData: Partial<resumePostType>;
  setResumeImage: (resumeImage: resumePostType["resumeImage"]) => void;
  setEducation: (education: resumePostType["education"]) => void;
  setLanguageSkill: (languageSkill: resumePostType["languageSkill"]) => void;
  setCareerType: (careerType: resumePostType["careerType"]) => void;
  setCareerDetail: <K extends keyof CareerDetailType>(
    key: K,
    value: CareerDetailType[K]
  ) => void;
  setStrength: (strength: resumePostType["strength"]) => void;
  setJobSkill: (jobSkill: resumePostType["jobSkill"]) => void;
  setIntroduction: (introduction: resumePostType["introduction"]) => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  resumeData: {
    careerDetail: {
      company: "",
      joinedAt: "",
      leavedAt: "",
      isWorking: false,
      position: "",
    },
    resumeImage: "",
  },
  setEducation: (education) =>
    set((state) => ({ resumeData: { ...state.resumeData, education } })),
  setLanguageSkill: (languageSkill) =>
    set((state) => ({ resumeData: { ...state.resumeData, languageSkill } })),
  setCareerType: (careerType) =>
    set((state) => ({ resumeData: { ...state.resumeData, careerType } })),
  setCareerDetail: (key, value) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        careerDetail: {
          ...(state.resumeData.careerDetail || {}), // ✅ undefined 방지
          [key]: value, // ✅ 특정 필드만 업데이트
        },
      },
    })),
  setStrength: (strength) =>
    set((state) => ({ resumeData: { ...state.resumeData, strength } })),
  setJobSkill: (jobSkill) =>
    set((state) => ({ resumeData: { ...state.resumeData, jobSkill } })),
  setIntroduction: (introduction) =>
    set((state) => ({ resumeData: { ...state.resumeData, introduction } })),
  setResumeImage: (resumeImage) =>
    set((state) => ({ resumeData: { ...state.resumeData, resumeImage } })),
}));
