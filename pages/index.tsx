import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { LuChevronRight } from 'react-icons/lu';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
    const [textDisplayed, setTextDisplayed] = useState<boolean>(false);

    return (
        <>
            <Head>
                <title>BreezeOS Community</title>
            </Head>
            <Header/>
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
            <div className="relative bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 py-40 px-8">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-8">
                        <div className="flex max-[520px]:flex-col justify-center items-center font-extrabold text-6xl max-[1364px]:text-5xl tracking-tight mb-6 h-16 max-[520px]:h-28 select-none">
                            <span
                                className={twMerge(
                                    'cursor-pointer text-transparent p-2 hover:bg-zinc-900/5 dark:hover:bg-zinc-100/5 active:text-[56px] max-[1364px]:active:text-[44px] transition-all duration-200 rounded-lg',
                                    textDisplayed && 'text-zinc-900 dark:text-zinc-100 pointer-events-none'
                                )}
                                onClick={() => setTextDisplayed(true)}
                            >
                                Privacy.
                            </span>
                            <span className='ml-1 max-[520px]:ml-0 max-[520px]:mt-1'>Absolutely.</span>
                        </div>
                        <p className="text-zinc-500 text-lg max-md:text-base max-w-3xl mx-auto">All of your information, messages, contacts, photos and videos will not be stored in the server as we don't have a database, so you don't have to be worried.</p>
                    </div>
                    <Link href='/privacy' passHref className="rounded-full transition-all duration-300 bg-zinc-950/5 text-zinc-900 active:bg-zinc-950/10 dark:bg-zinc-100/5 dark:text-zinc-100 dark:active:bg-zinc-100/10 active:transition-none py-3 px-4 flex items-center">
                        <p className="font-semibold mr-1 text-sm">Learn more</p>
                        <LuChevronRight/>
                    </Link>
                    <div className="overflow-hidden rounded-2xl relative w-[800px] h-[465px] mt-20 select-none max-[815px]:hidden">
                        <div
                            className={twMerge(
                                "absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-full backdrop-blur-3xl transition-all duration-300",
                                textDisplayed && "opacity-0 pointer-events-none"
                            )}
                        >
                            <p className='text-2xl font-semibold text-zinc-100/20'>This video is private.</p>
                        </div>
                        <iframe src="https://www.youtube.com/embed/GAhB63bsElA" className='w-full h-full' frameBorder={0}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-950 h-[780px]">
                <div
                    className="w-[75%] h-[80%] max-lg:w-[90%] rounded-3xl hover:rounded-none hover:w-full hover:h-full py-40 px-6 bg-slate-200 text-zinc-900 dark:bg-slate-900 dark:text-zinc-100 flex flex-col justify-center items-center transition-all duration-300"
                >
                    <div className='font-extrabold text-5xl tracking-tight text-center mb-16'>
                        <span>Purpose of creating </span>
                        <span className='text-sky-500'>BreezeOS</span>
                    </div>
                    <div className="w-full flex justify-center items-center space-x-4">
                        <div className="relative w-14 h-14">
                            <Image alt='Cyprus Lucastero' className='rounded-full' src='/cyplucastero.jpeg' fill/>
                        </div>
                        <div>
                            <p className='font-semibold mb-1'>Cyprus Lucastero</p>
                            <div className="text-slate-600 text-sm">Creator of BreezeOS</div>
                        </div>
                    </div>
                    <div className="mt-6 text-lg max-sm:text-base max-w-3xl text-center text-slate-500">
                        <span>Our community is created to </span>
                        <span className='font-semibold text-sky-500'>give a user-friendly and lightweight user interface </span>
                        <span> for everyone's device, make it very easy to use. We are currently working hard on these projects and we do keep in mind that </span>
                        <span className="font-semibold text-sky-500">this will change the way you use computers</span>
                        <span>. It's worth to give yourself a chance.</span>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 py-28">
                <p className='font-extrabold text-5xl px-20 mb-8'>Latest Blog</p>
            </div>
            <Footer/>
        </>
    )
}
