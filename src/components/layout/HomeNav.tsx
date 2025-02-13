import Link from "next/link";

export default async function HomeNav({ isAuth }: { isAuth: boolean }) {
  return (
    <nav className="font-lexend text-sm  border-b-[1px] w-full py-1 flex justify-between px-6 mt-2 gap-20">
      <Link href="/job" className="nav-link">
        job
      </Link>
      <Link href="resume/create" className="nav-link">
        resume
      </Link>
      {isAuth ? (
        <Link href="/mypage" className="nav-link">
          My page
        </Link>
      ) : (
        <Link href="/signin" className="nav-link">
          Login
        </Link>
      )}
    </nav>
  );
}
