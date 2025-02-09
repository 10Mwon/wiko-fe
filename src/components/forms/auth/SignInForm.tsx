"use client";
import PasswordInput from "@/components/ui/input/PasswordInput";
import Link from "next/link";
import { useState } from "react";

function SignInForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <form
      className="flex flex-col gap-4 tracking-tighter"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(`아이디: ${id}, 비밀번호: ${password}`);
      }}
    >
      <label htmlFor="id" className="flex flex-col gap-2">
        아이디
        <input
          className="rounded-md p-3 bg-white text-gray-600"
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="id"
        />
      </label>

      <label htmlFor="password" className="flex flex-col pb-4 gap-2">
        비밀번호
        <PasswordInput
          name="password"
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
          <label htmlFor="remember">로그인 유지</label>
        </section>

        <section className="flex gap-1">
          <Link href={"/findId"}>아이디 찾기</Link>|
          <Link href={"/findPwd"}>비밀번호 찾기</Link>
        </section>
      </div>

      <button
        className="px-3 py-4 rounded-[0.625rem] bg-white text-black"
        type="submit"
      >
        로그인
      </button>
    </form>
  );
}

export default SignInForm;
