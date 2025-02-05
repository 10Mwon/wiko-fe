"use client";
import CustomInput from "@/components/ui/input/CustomInput";
import PasswordInput from "@/components/ui/input/PasswordInput";
import { SignUpFormValues } from "@/types/FormValues";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { signUpSchema } from "./schema";
export default function SignUpForm2() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      birth: undefined,
      phone: "",
      email: "",
      address: "",
      visa: "",
    },
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(console.log)}>
      {/* 생년월일 DatePicker 적용 */}
      <label className="flex flex-col">
        <Controller
          name="birth"
          control={control}
          rules={{ required: "생년월일을 입력해주세요" }}
          render={({ field }) => {
            const selectedDate =
              field.value instanceof Date ? field.value : null; // ✅ Date 타입인지 확인 후 설정
            return (
              <label className="flex flex-col">
                생년월일
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="yyyy-MM-dd"
                  className="rounded-xl w-full bg-gray-200 p-3"
                  placeholderText="생년월일을 선택해주세요"
                />
              </label>
            );
          }}
        />
        {errors.birth && (
          <p className="text-xs text-red-500">{errors.birth.message}</p>
        )}
      </label>

      <CustomInput
        label="국적"
        name="nation"
        register={register}
        rules={{ required: "국적을 입력해주세요" }}
      />

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
