import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>BreezeOS Community</title>
            </Head>
            <div className='pt-40 pb-16 text-center bg-gradient-to-t from-[#270013] to-zinc-950 text-zinc-900 dark:text-zinc-100'>
                <div className="max-w-7xl mx-auto">
                    <p className='font-extrabold text-6xl tracking-tight mb-6'>For a better desktop.</p>
                    <p className='text-lg text-zinc-700 font-normal tracking-tight'>With a fresh new layout, user-friendly and efficient system designed to help everyone have the best possible experience.</p>
                    <div className="flex justify-center my-12">
                        <Link href='/try-breezeos'>
                            <Button className='rounded-lg transition-none bg-sky-600 hover:bg-sky-500 dark:bg-pink-700 dark:hover:bg-pink-600 px-6 py-4 mr-4 text-zinc-100 text-sm font-semibold'>
                                <p className='mr-1'>Try BreezeOS</p>
                                <BsArrowRightShort className='text-xl'/>
                            </Button>
                        </Link>
                        <button className="rounded-lg flex justify-between items-center bg-zinc-100/10 hover:bg-zinc-100/20 py-3 px-5 w-80 text-sm">
                            <div className="flex items-center">
                                <AiOutlineSearch className='mr-2 text-base text-zinc-100/40'/>
                                <p className='text-zinc-100/40'>Quick search...</p>
                            </div>
                            <p className='tracking-widest text-zinc-100/20'>⌘K</p>
                        </button>
                    </div>
                    <div className="relative w-full h-[500px] mt-10">
                        <Image src='/phone-laptop.svg' alt='Phone and Laptop' fill/>
                    </div>
                </div>
            </div>
        </>
    )
}
