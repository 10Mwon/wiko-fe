"use client";
import { SignUpFormValues } from "@/types/FormValues";
import { useTranslations } from "next-intl";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  name: keyof SignUpFormValues;
  register?: UseFormRegister<SignUpFormValues>;
  type?: string;
  rules?: RegisterOptions<SignUpFormValues>;
};

export default function CustomInput({
  label,
  name,
  register,
  type = "text",
  rules,
}: InputProps) {
  const t = useTranslations("input");
  return (
    <label className="flex flex-col">
      {t(label)}
      <input
        className="rounded-xl  bg-gray-200 p-3"
        {...(register && register(name, rules))}
        type={type}
      />
    </label>
  );
}
