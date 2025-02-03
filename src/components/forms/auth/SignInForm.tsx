"use client";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="flex flex-col gap-4 tracking-tighter" action="submit">
      <label htmlFor="id" className="flex flex-col  gap-2">
        아이디
        <input
          className="rounded-md p-3 bg-white text-gray-600"
          type="text"
          name="id"
          placeholder="id"
        />
      </label>
      <label htmlFor="password" className="flex flex-col pb-4 gap-2">
        비밀번호
        <div className="relative">
          <input
            className="rounded-md p-3 w-full text-gray-600  bg-white"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="password"
          />
          <button
            className="absolute inset-y-0 right-3 text-gray-500"
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}>
            {showPassword ? <EyeClosed /> : <Eye />}
          </button>
        </div>
      </label>
      <div className="flex justify-between">
        <section className="flex gap-2 items-center">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">로그인 유지</label>
        </section>
        <section className="flex gap-1">
          <Link href={"/findId"}>아이디 찾기</Link>|
          <Link href={"/findPwd"}>비밀번호 찾기</Link>
        </section>
      </div>

      <button
        className="px-3 py-4 rounded-[0.625rem] bg-white text-black"
        type="submit">
        로그인
      </button>
    </form>
  );
}

export default SignInForm;
