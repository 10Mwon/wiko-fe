import SignUpForm from "@/components/forms/auth/SignUpForm";

export default function Page() {
  return (
    <div className="tracking-[0.1125rem] text-black px-4">
      <h1 className="text-4xl pt-[4.56rem] text-wikoBlue text-opacity-50 pb-[8.37rem] text-center font-[900]">
        WIKO
      </h1>
      <SignUpForm></SignUpForm>
    </div>
  );
}
