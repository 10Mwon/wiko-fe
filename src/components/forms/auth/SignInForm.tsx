"use client";
import PasswordInput from "@/components/ui/input/PasswordInput";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

function SignInForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const t = useTranslations("input");
  return (
    <form
      className="flex flex-col gap-4 tracking-tighter"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(`아이디: ${id}, 비밀번호: ${password}`);
      }}>
      <label htmlFor="id" className="flex flex-col gap-2">
        {t("id")}
        <input
          className="rounded-md p-3 bg-white text-gray-600"
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
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

      <div className="flex justify-between">
        <section className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)} // 상태 업데이트
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
    </form>
  );
}

export default SignInForm;
