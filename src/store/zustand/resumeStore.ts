import { resumePostType } from "@/types/RequestType";
import { create } from "zustand";

interface ResumeState {
  resumeData: Partial<resumePostType>;
  setEducation: (education: resumePostType["education"]) => void;
  setLanguageSkill: (languageSkill: resumePostType["languageSkill"]) => void;
  setCareerType: (careerType: resumePostType["careerType"]) => void;
  setCareerDetail: (careerDetail: resumePostType["careerDetail"]) => void;
  setStrength: (strength: resumePostType["strength"]) => void;
  setJobSkill: (jobSkill: resumePostType["jobSkill"]) => void;
  setIntroduction: (introduction: resumePostType["introduction"]) => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  resumeData: {},
  setEducation: (education) =>
    set((state) => ({ resumeData: { ...state.resumeData, education } })),
  setLanguageSkill: (languageSkill) =>
    set((state) => ({ resumeData: { ...state.resumeData, languageSkill } })),
  setCareerType: (careerType) =>
    set((state) => ({ resumeData: { ...state.resumeData, careerType } })),
  setCareerDetail: (careerDetail) =>
    set((state) => ({ resumeData: { ...state.resumeData, careerDetail } })),
  setStrength: (strength) =>
    set((state) => ({ resumeData: { ...state.resumeData, strength } })),
  setJobSkill: (jobSkill) =>
    set((state) => ({ resumeData: { ...state.resumeData, jobSkill } })),
  setIntroduction: (introduction) =>
    set((state) => ({ resumeData: { ...state.resumeData, introduction } })),
}));
