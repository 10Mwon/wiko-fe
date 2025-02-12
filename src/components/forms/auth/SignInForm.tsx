"use client";
import GoogleLoginB from "@/components/icon/GoogleLoginB";
import PasswordInput from "@/components/ui/input/PasswordInput";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
function SignInForm() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(""); // 로그인 에러 상태 추가
  const t = useTranslations("input");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // 기존 에러 초기화

    const result = await signIn("credentials", {
      loginId, // `id` 대신 `loginId` 사용
      password,
      redirect: false, // 자동 리디렉트 방지
    });
    if (result?.error) {
      setError("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
    } else {
      console.log("로그인 성공");
      router.push("/");
    }
  };

  return (
    <form
      className="flex flex-col gap-4 tracking-tighter"
      onSubmit={handleSubmit}>
      <label htmlFor="loginId" className="flex flex-col gap-2">
        {t("id")}
        <input
          className="rounded-md p-3 bg-white text-gray-600"
          type="text"
          name="loginId"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder={t("id")}
        />
      </label>
      <label htmlFor="password" className="flex flex-col pb-4 gap-2">
        {t("password")}
        <PasswordInput
          name="password"
          placeholder={t("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* 에러 메시지 표시 */}
      <div className="flex justify-between">
        <section className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember">{t("remember")}</label>
        </section>

        <section className="flex gap-1">
          <Link href={"/findId"}>{t("findId")}</Link>|
          <Link href={"/findPwd"}>{t("findPassword")}</Link>
        </section>
      </div>
      <button
        className="px-3 py-4 rounded-[0.625rem] bg-white text-black"
        type="submit">
        {t("login")}
      </button>
      <button
      onClick={() => signIn("google")}
      className="px-3 font-semibold flex gap-4 justify-center py-4 rounded-[0.625rem] bg-white text-black">
        <GoogleLoginB /> Log in with Google
      </button>
    </form>
  );
}

export default SignInForm;
