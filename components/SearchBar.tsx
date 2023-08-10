import { AiOutlineSearch } from "react-icons/ai"
import { twMerge } from "tailwind-merge"

interface SearchBarProps {
    className?: string
}

export default function SearchBar({
    className
}: SearchBarProps){
    return (
        <button className="rounded-lg flex justify-between items-center ring-1 ring-zinc-900/10 bg-zinc-900/5 hover:bg-zinc-900/10 dark:bg-zinc-100/5 dark:hover:bg-zinc-100/10 dark:ring-zinc-100/10 py-3 px-5 w-64 text-sm">
            <div className="flex items-center">
                <AiOutlineSearch className='mr-2 text-base text-zinc-900/40 dark:text-zinc-100/40'/>
                <p className='text-zinc-900/40 dark:text-zinc-100/40'>Search...</p>
            </div>
            <p className='tracking-widest text-zinc-900/20 dark:text-zinc-100/20'>⌘K</p>
        </button>
    )
}