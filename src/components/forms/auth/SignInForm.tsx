"use client";
import PasswordInput from "@/components/ui/input/PasswordInput";
import Link from "next/link";

function SignInForm() {
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
        <PasswordInput name={"password"} value="password" />
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
