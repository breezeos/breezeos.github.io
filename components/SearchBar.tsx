import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

export default function SearchBar() {
  return (
    <button className="flex w-64 items-center justify-between rounded-lg bg-zinc-900/5 px-5 py-3 text-sm ring-1 ring-zinc-900/10 hover:bg-zinc-900/10 dark:bg-zinc-100/5 dark:ring-zinc-100/10 dark:hover:bg-zinc-100/10">
      <div className="flex items-center">
        <BiSearch className="mr-2 text-base text-slate-900/40 dark:text-slate-100/40" />
        <p className="text-slate-900/40 dark:text-slate-100/40">Search...</p>
      </div>
      <p className="tracking-widest text-slate-900/20 dark:text-slate-100/20">
        ⌘K
      </p>
    </button>
  );
}
