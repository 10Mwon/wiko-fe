"use client";
import SignUpForm1 from "@/components/forms/auth/SignUpForm1";
import SignUpForm2 from "@/components/forms/auth/SignUpForm2";
import { SignUpFormValues } from "@/types/FormValues";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<SignUpFormValues>({
    name: "",
    nation: "",
    id: "",
    password: "",
    passwordConfirm: "",
    birth: new Date(),
    phone: "",
    email: "",
    address: "",
    visa: "",
  });

  return (
    <div className="tracking-[0.1125rem] text-black px-4">
      <h1 className="text-4xl pt-[4.56rem] text-wikoBlue text-opacity-50 pb-[4.12rem] text-center font-[900]">
        WIKO
      </h1>
      {step === 1 && (
        <SignUpForm1
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <SignUpForm2 formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
}
