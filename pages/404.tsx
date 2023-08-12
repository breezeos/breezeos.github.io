import Link from "next/link"

export default function Error(){
    return (
        <div className="w-full h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col justify-center items-center">
            <div className="flex max-sm:flex-col items-center mb-10">
                <p className='font-bold text-2xl max-sm:text-4xl max-sm:mb-4'>404</p>
                <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-700 mx-6 max-sm:hidden"></div>
                <p>This page could not be found.</p>
            </div>
            <Link href='/' passHref className="rounded-full transition-all duration-300 bg-zinc-950/5 text-zinc-900 active:bg-zinc-950/10 dark:bg-zinc-100/5 dark:text-zinc-100 dark:active:bg-zinc-100/10 active:transition-none py-3 px-4 flex items-center">
                <p className="font-semibold text-sm">Back to home</p>
            </Link>
        </div>
    )
}