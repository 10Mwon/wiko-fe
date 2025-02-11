"use client";
import CustomInput from "@/components/ui/input/CustomInput";
import PasswordInput from "@/components/ui/input/PasswordInput";
import { SignUpFormValues } from "@/types/FormValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useSignUpSchema } from "./schema";

export default function SignUpForm1({
  setStep,
  formData,
  setFormData,
}: {
  setStep: (step: number) => void;
  formData: SignUpFormValues;
  setFormData: (data: SignUpFormValues) => void;
}) {
  const schema = useSignUpSchema();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      nation: "",
      id: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onValid = (data: SignUpFormValues) => {
    console.log(data);
    setFormData({ ...formData, ...data });
    setStep(2);
  };
  const t = useTranslations("input");
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onValid)}>
      {/* 이름 입력 */}
      <CustomInput
        label="name"
        name="name"
        register={register}
        rules={{ required: "이름을 입력해주세요" }}
      />
      {errors.name && (
        <p className="-mt-4 text-xs text-red-500">{errors.name.message}</p>
      )}

      {/* 국적 입력 */}
      <CustomInput
        label="nation"
        name="nation"
        register={register}
        rules={{ required: "국적을 입력해주세요" }}
      />
      {errors.nation && (
        <p className="-mt-4 text-xs text-red-500">{errors.nation.message}</p>
      )}
      {/* 아이디 입력 */}
      <CustomInput label="id" name="id" register={register} />
      {errors.id && (
        <p className="-mt-4 text-xs text-red-500">{errors.id.message}</p>
      )}

      {/* 비밀번호 입력 */}
      <label className="flex flex-col">
        {t("password")}
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
        placeholder={t("passwordConfirm")}
        isSignUp={true}
        onChange={(e) => setValue("passwordConfirm", e.target.value)}
      />

      {/* 회원가입 버튼 */}
      <button className="absolute bottom-9 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl p-4 text-white bg-wikoBlue">
        {t("next")}
      </button>
    </form>
  );
}
