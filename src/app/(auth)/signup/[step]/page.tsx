import SignUpForm1 from "@/components/forms/auth/SignUpForm1";
import SignUpForm2 from "@/components/forms/auth/SignUpForm2";

export default async function Page({ params }: { params: { step: string } }) {
  const param = await params;

  return (
    <div className="tracking-[0.1125rem] text-black px-4">
      <h1 className="text-4xl pt-[4.56rem] text-wikoBlue text-opacity-50 pb-[8.37rem] text-center font-[900]">
        WIKO
      </h1>
      {param.step === "1" && <SignUpForm1 />}
      {param.step === "2" && <SignUpForm2 />}
    </div>
  );
}
