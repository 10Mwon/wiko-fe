import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "이름을 입력해주세요."),
    nation: z.string().min(1, "국적을 입력해주세요."),
    id: z
      .string()
      .min(
        6,
        "영문 소문자와 숫자만을 사용하여 6자리 이상 아이디를 입력해 주세요."
      )
      .max(
        16,
        "영문 소문자와 숫자만을 사용하여 6자리 이상 아이디를 입력해 주세요."
      )
      .regex(
        /^[a-z0-9]+$/,
        "영문 소문자와 숫자만을 사용하여 6자리 이상 아이디를 입력해 주세요."
      ),
    password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });
