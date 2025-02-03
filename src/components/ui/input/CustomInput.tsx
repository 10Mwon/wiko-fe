"use client";
import { FormValues } from "@/components/forms/auth/SignUpForm";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  name: keyof FormValues;
  register?: UseFormRegister<FormValues>;
  type?: string;
  rules?: RegisterOptions<FormValues>;
};

export default function CustomInput({
  label,
  name,
  register,
  type = "text",
  rules,
}: InputProps) {
  return (
    <label className="flex flex-col">
      {label}
      <input
        className="border 1px solid"
        {...(register && register(name, rules))}
        type={type}
      />
    </label>
  );
}
