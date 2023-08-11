import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { TbShieldBolt } from 'react-icons/tb';
import { LuChevronRight } from 'react-icons/lu';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>BreezeOS Community</title>
            </Head>
            <div className='bg-no-repeat bg-right w-full flex justify-between max-[1150px]:justify-center py-20 max-md:px-6 max-[1150px]:py-40 bg-gradient-to-t from-sky-300 to-zinc-100 dark:from-[#270013] dark:to-zinc-950 text-slate-900 dark:text-slate-100'>
                <div className="w-[650px] max-[1364px]:w-[550px] flex flex-col justify-center ml-16 max-[1364px]:ml-12 max-[1150px]:text-center max-[1150px]:m-0">
                    <p className='font-extrabold text-6xl max-[1364px]:text-5xl tracking-tight mb-6'>For a better desktop.</p>
                    <p className='text-lg max-[1364px]:text-base text-slate-600 dark:text-zinc-700 font-normal tracking-tight'>With a fresh new layout, user-friendly and efficient system designed to help everyone have the best possible experience.</p>
                    <div className="flex max-[1364px]:justify-center mt-12">
                        <Link href='/try-breezeos'>
                            <Button className='rounded-lg transition-none bg-slate-900 hover:bg-slate-800 dark:bg-pink-700 dark:hover:bg-pink-600 px-6 max-sm:px-14 py-4 text-slate-100 text-sm font-semibold'>
                                <p className='mr-1'>Try BreezeOS</p>
                                <BsArrowRightShort className='text-xl max-[1364px]:text-lg'/>
                            </Button>
                        </Link>
                        <button className="rounded-lg flex justify-between items-center ring-1 bg-zinc-900/5 hover:bg-zinc-900/10 ring-zinc-900/10 dark:bg-zinc-100/5 dark:hover:bg-zinc-100/10 dark:ring-zinc-100/10 py-3 px-5 ml-4 w-96 max-sm:hidden text-sm">
                            <div className="flex items-center">
                                <BiSearch className='mr-2 text-base max-[1364px]:text-sm text-slate-900/40 dark:text-slate-100/40'/>
                                <p className='text-slate-900/40 dark:text-slate-100/40'>Quick search...</p>
                            </div>
                            <p className='tracking-widest text-slate-900/20 dark:text-slate-100/20'>⌘K</p>
                        </button>
                    </div>
                </div>
                <div className="block max-[1150px]:hidden">
                    <div className="hidden dark:block relative w-[650px] h-[750px] max-[1364px]:w-[550px] max-[1364px]:h-[650px] pointer-events-none">
                        <Image src='/phone-laptop.svg' alt='Phone and Laptop (Dark)' fill/>
                    </div>
                    <div className="block dark:hidden relative w-[650px] h-[750px] max-[1364px]:w-[550px] max-[1364px]:h-[650px] pointer-events-none">
                        <Image src='/phone-laptop2.svg' alt='Phone and Laptop (Light)' fill/>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 py-40 px-8">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-16">
                        <p className="font-extrabold text-6xl max-[1364px]:text-5xl tracking-tight mb-7">Privacy. Absolutely.</p>
                        <p className="text-zinc-500 text-lg max-w-3xl mx-auto">
                            All of your information, messages, contacts, photos and videos will not be stored in the server as we don't have a database, so you don't have to be worried.
                        </p>
                    </div>
                    <Link href='/privacy' passHref className="rounded-full transition-all duration-300 bg-zinc-950/5 text-zinc-900 active:bg-zinc-950/10 dark:bg-zinc-100/5 dark:text-zinc-100 dark:active:bg-zinc-100/10 active:transition-none py-3 px-4 flex items-center">
                        <p className="font-semibold mr-1 text-sm">Learn more</p>
                        <LuChevronRight/>
                    </Link>
                </div>
            </div>
        </>
    )
}
