import { signUp } from "@/actions/auth/signUp";
import CustomInput from "@/components/ui/input/CustomInput";
import { SignUpFormValues } from "@/types/FormValues";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";

export default function SignUpForm2({
  formData,
  setFormData,
}: {
  formData: SignUpFormValues;
  setFormData: (data: SignUpFormValues) => void;
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: formData,
  });
  const router = useRouter();
  const onValid = async (data: SignUpFormValues) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    console.log("최종 데이터:", data);
    const result = await signUp(data);
    if (result) {
      alert("회원가입 성공");
      router.push("/signin");
    } else {
      alert("회원가입 실패");
    }
  };
  const t = useTranslations("input");
  const v = useTranslations("validation");
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onValid)}>
      <label className="flex flex-col">
        <Controller
          name="birth"
          control={control}
          rules={{ required: v("birth_required") }}
          render={({ field }) => {
            const selectedDate =
              field.value instanceof Date ? field.value : null;
            return (
              <label className="flex flex-col">
                {t("birth")}
                <DatePicker
                  selected={field.value ?? new Date()} // 기본값 설정
                  onChange={(date) => field.onChange(date)}
                  dateFormat="yyyy-MM-dd"
                  className="rounded-xl w-full bg-gray-200 p-3"
                  placeholderText={t("birth")}
                />
              </label>
            );
          }}
        />
      </label>
      {errors.birth && (
        <p className="text-xs text-red-500">{errors.birth.message}</p>
      )}

      <CustomInput label={"phone"} name="phone" register={register} />
      <CustomInput label={"email"} name="email" register={register} />
      <CustomInput label={"address"} name="address" register={register} />
      <label className="flex flex-col">
        {t("visaType")}
        <select
          {...register("visa", { required: v("visaType_required") })}
          className="rounded-xl w-full bg-gray-200 p-3">
          <option value="">{t("visaType")}</option>
          <option value="E-7">E-7</option>
          <option value="E-7-4">E-7-4</option>
          <option value="E-7-S">E-7-S</option>
          <option value="E-8">E-8</option>
          <option value="E-9">E-9</option>
          <option value="E-10-2">E-10-2</option>
        </select>
      </label>
      {errors.visa && (
        <p className="text-xs text-red-500">{errors.visa.message}</p>
      )}

      <button
        type="submit"
        className="absolute bottom-9 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl p-4 text-white bg-wikoBlue">
        {t("submit")}
      </button>
    </form>
  );
}
