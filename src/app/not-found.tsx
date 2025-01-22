import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-white">
      <h1 className="text-center text-8xl text-white">404</h1>
      <h2 className="text-center text-white/80">Page not found</h2>

      <div className="my-12 flex flex-row gap-10 duration-300 hover:scale-110">
        <Link
          className="transition-all hover:text-white/70"
          href={"/dashboard"}
        >
          Go to dashboard
        </Link>
        <Link className="transition-all hover:text-white/70" href={"/"}>
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
