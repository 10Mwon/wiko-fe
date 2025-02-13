import SignInForm from "@/components/forms/auth/SignInForm";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const t = useTranslations("input");
  const autoLogin = searchParams.autoLogin === "true";
  return (
    <div className="tracking-[0.1125rem] text-white px-4">
      <h1 className="text-4xl pt-[4.56rem] pb-[8.37rem] text-center font-[900]">
        WIKO
      </h1>
      <SignInForm autoLogin={autoLogin} />
      <hr className="mt-16" />
      <Link className="flex justify-center pt-4" href={"/signup"}>
        {t("join")}
      </Link>
    </div>
  );
}

export default Page;
