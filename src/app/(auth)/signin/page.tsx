import SignInForm from "@/components/forms/auth/SignInForm";
import Link from "next/link";

function page() {
  return (
    <div className="tracking-[0.1125rem] text-white px-4">
      <h1 className="text-4xl pt-[4.56rem] pb-[8.37rem] text-center font-[900]">
        WIKO
      </h1>
      <SignInForm />
      <hr className="mt-16" />
      <Link className="flex justify-center pt-4" href={"/signup"}>
        회원가입
      </Link>
    </div>
  );
}

export default page;
