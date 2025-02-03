import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "이름을 입력해주세요."),
    nation: z.string().min(1, "국적을 입력해주세요."),
    id: z
      .string()
      .min(6, "아이디는 최소 6자 이상이어야 합니다.")
      .max(16, "아이디는 최대 16자까지 가능합니다.")
      .regex(
        /^[a-z0-9_-]+$/,
        "아이디는 소문자, 숫자, '-', '_'만 사용할 수 있습니다."
      ),
    password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
    passwordConfirm: z.string().min(6, "비밀번호를 다시 입력해주세요."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });