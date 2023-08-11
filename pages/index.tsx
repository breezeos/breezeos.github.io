import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { TbShieldBolt } from 'react-icons/tb';
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
            <div className="bg-white text-slate-900 dark:bg-zinc-950 dark:text-slate-100 py-28 px-6">
                <div className="max-w-4xl max-md:max-w-lg mx-auto flex flex-col">
                    <div className='font-extrabold text-5xl max-md:text-4xl tracking-tight leading-tight mb-6 text-center'>
                        <span>Why you should choose </span>
                        <span className='text-sky-500 dark:text-pink-600'>BreezeOS</span>
                        <span> as your new operating system.</span>
                    </div>
                    {/* <div className="flex justify-around my-10">
                        <ul className="flex flex-col">
                            <li className="text-sm my-4">
                                <div className="relative rounded-lg bg-indigo-600 w-80 p-6 flex flex-col text-slate-100">
                                    <div className='w-14 h-14 bg-slate-50 rounded-full flex justify-center items-center text-2xl text-indigo-600 mb-6'>
                                        <HiOutlineDesktopComputer/>
                                    </div>
                                    <p className='font-semibold text-base mb-2'>User-friendly UI</p>
                                    <p className='text-slate-100/40'>Give your device a fresh new layout. Simple and very easy to use.</p>
                                </div>
                            </li>
                            <li className="text-sm my-4">
                                <div className="relative rounded-lg bg-red-400 w-80 p-6 flex flex-col text-slate-100">
                                    <div className='w-14 h-14 bg-slate-50 rounded-full flex justify-center items-center text-2xl text-red-400 mb-6'>
                                        <TbShieldBolt/>
                                    </div>
                                    <p className='font-semibold text-base mb-2'>Privacy</p>
                                    <p className='text-slate-100/40'>All of your information, messages, contacts, photos and videos will not be stored in the server as we don't have a database, so you don't have to be worried.</p>
                                </div>
                            </li>
                        </ul>
                        <ul className='h-full'>
                            <li className="text-sm my-4 h-full">
                                <div className="relative rounded-lg bg-emerald-500 w-80 p-6 flex flex-col text-slate-100">
                                    <div className='w-14 h-14 bg-slate-50 rounded-full flex justify-center items-center text-2xl text-emerald-500 mb-6'>
                                        <TbShieldBolt/>
                                    </div>
                                    <p className='font-semibold text-base mb-2'>Privacy</p>
                                    <p className='text-slate-100/40'>Give your device a fresh new layout. Simple and very easy to use.</p>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    )
}
