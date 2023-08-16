import Header from "@/components/Header";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <Header />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="mb-10 flex items-center max-sm:flex-col">
          <p className="text-2xl font-bold max-sm:mb-4 max-sm:text-4xl">404</p>
          <div className="mx-6 h-8 w-px bg-zinc-300 dark:bg-zinc-700 max-sm:hidden"></div>
          <p>This page could not be found.</p>
        </div>
        <Link
          href="/"
          passHref
          className="flex items-center rounded-full bg-zinc-950/5 px-4 py-3 text-zinc-900 transition-all duration-300 active:bg-zinc-950/10 active:transition-none dark:bg-zinc-100/5 dark:text-zinc-100 dark:active:bg-zinc-100/10"
        >
          <p className="text-sm font-semibold">Back to home</p>
        </Link>
      </div>
    </>
  );
}
