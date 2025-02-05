"use client";
import CustomInput from "@/components/ui/input/CustomInput";
import PasswordInput from "@/components/ui/input/PasswordInput";
import { SignUpFormValues } from "@/types/FormValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "./schema";

export default function SignUpForm1() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      nation: "",
      id: "",
      password: "",
      passwordConfirm: "",
    },
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(console.log)}>
      {/* 이름 입력 */}
      <CustomInput
        label="이름"
        name="name"
        register={register}
        rules={{ required: "이름을 입력해주세요" }}
      />
      {errors.name && (
        <p className="-mt-4 text-xs text-red-500">{errors.name.message}</p>
      )}

      {/* 국적 입력 */}
      <CustomInput
        label="국적"
        name="nation"
        register={register}
        rules={{ required: "국적을 입력해주세요" }}
      />

      {/* 아이디 입력 */}
      <CustomInput
        label="아이디"
        name="id"
        register={register}
        rules={{
          required: "아이디를 입력해주세요",
          pattern: {
            value: /^[a-z0-9_-]{6,16}$/,
            message: "아이디는 6-16자의 소문자, 숫자, '-', '_'만 가능합니다",
          },
        }}
      />
      {errors.id && (
        <p className="-mt-4 text-xs text-red-500">{errors.id.message}</p>
      )}

      {/* 비밀번호 입력 */}
      <label className="flex flex-col">
        비밀번호
        <PasswordInput
          name="password"
          isSignUp={true}
          value={watch("password")}
          onChange={(e) => setValue("password", e.target.value)}
          error={errors.password?.message}
        />
      </label>

      <PasswordInput
        name="passwordConfirm"
        value={watch("passwordConfirm")}
        placeholder="비밀번호 확인"
        isSignUp={true}
        onChange={(e) => setValue("passwordConfirm", e.target.value)}
        error={errors.passwordConfirm?.message}
      />

      {/* 회원가입 버튼 */}
      <button className="w-full rounded-2xl p-4 text-white bg-wikoBlue">
        다음
      </button>
    </form>
  );
}
