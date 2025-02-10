import CustomInput from "@/components/ui/input/CustomInput";
import { SignUpFormValues } from "@/types/FormValues";
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

  const onValid = (data: SignUpFormValues) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    console.log("최종 데이터:", updatedData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onValid)}>
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
                  selected={field.value ?? new Date()} // 기본값 설정
                  onChange={(date) => field.onChange(date)}
                  dateFormat="yyyy-MM-dd"
                  className="rounded-xl w-full bg-gray-200 p-3"
                  placeholderText="생년월일을 선택해주세요"
                />
              </label>
            );
          }}
        />
      </label>
      {errors.birth && (
        <p className="text-xs text-red-500">{errors.birth.message}</p>
      )}

      <CustomInput label="휴대폰번호" name="phone" register={register} />
      <CustomInput label="이메일" name="email" register={register} />
      <CustomInput label="한국주소" name="address" register={register} />
      <label className="flex flex-col">
        비자 종류
        <select
          {...register("visa", { required: "비자를 선택해주세요." })}
          className="rounded-xl w-full bg-gray-200 p-3">
          <option value="">비자 종류 선택</option>
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
        다음
      </button>
    </form>
  );
}
