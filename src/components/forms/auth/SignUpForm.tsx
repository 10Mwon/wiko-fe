"use client";
import CustomInput from "@/components/ui/input/CustomInput";
import { useForm } from "react-hook-form";

export type FormValues = {
  name: string;
  nation: string;
  id: string;
  password: string;
  passwordConfirm: string;
  birth: string;
  phone: string;
  email: string;
  address: string;
  visa: string;
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form className="flex flex-col gap-4 " onSubmit={handleSubmit(console.log)}>
      <CustomInput
        label="이름"
        name="name"
        register={register}
        rules={{
          required: "이름을 입력해주세요",
        }}
      />
      {errors.name && (
        <p className="-mt-4 text-xs text-red-500">{errors.name.message}</p>
      )}

      <CustomInput
        label="국적"
        name="nation"
        register={register}
        rules={{
          required: "국적을 입력해주세요",
        }}
      />
      <CustomInput
        label="아이디"
        name="id"
        register={register}
        rules={{
          required: "아이디를 입력해주세요",
          pattern: {
            value: /^[a-z0-9]{6,16}$/,
            message: "아이디는 6-16자의 소문자, 숫자, -,_만 가능합니다",
          },
        }}
      />
      {errors.id && (
        <p className="-mt-4 text-xs text-red-500">{errors.id.message}</p>
      )}

      <CustomInput
        label="비밀번호"
        name="password"
        type="password"
        register={register}
        rules={undefined}
      />
      <CustomInput
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        register={register}
        rules={undefined}
      />
      {errors.password && (
        <p className="-mt-4 text-xs text-red-500">{errors.password.message}</p>
      )}
      <button className="w-full rounded-2xl p-4 text-white bg-wikoBlue">
        다음
      </button>
    </form>
  );
}
