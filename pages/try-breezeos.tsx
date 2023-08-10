import { useState } from "react"
import { SlScreenDesktop } from 'react-icons/sl';
import { PiDeviceMobileCamera } from 'react-icons/pi';
import Link from "next/link";
import ActionButton from "@/components/Button";
import Button from "@/components/Button";
import { BsArrowRightShort } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function Try_BreezeOS(){
    const [platform, setPlatform] = useState<"desktop" | "mobile">("desktop");
    return (
        <div className='pt-40 pb-16 text-center flex flex-col  items-center bg-gradient-to-t from-[#270013] to-zinc-950 text-zinc-900 dark:text-zinc-100'>
            <p className="font-extrabold text-6xl tracking-tight mb-10">Select an option</p>
            <div className="flex justify-center items-center mb-12 h-56">
                <div
                    className={twMerge(
                        'cursor-pointer py-8 w-52 h-48 opacity-20 mr-4 bg-zinc-100/5 border-2 border-solid border-zinc-100/20 rounded-lg flex flex-col text-zinc-100 transition-all duration-300',
                        platform === 'desktop' && 'w-56 h-52 border-pink-700 text-pink-700 opacity-100'
                    )}
                    onClick={() => setPlatform("desktop")}
                >
                    <div className="h-full flex justify-center items-center">
                        <SlScreenDesktop className='text-6xl text-zinc-100/20'/>
                    </div>
                    <p className='font-semibold'>Desktop</p>
                </div>
                <div
                    className={twMerge(
                        'cursor-pointer py-8 w-52 h-48 opacity-20 mr-4 bg-zinc-100/5 border-2 border-solid border-zinc-100/20 rounded-lg flex flex-col text-zinc-100 transition-all duration-300',
                        platform === 'mobile' && 'w-56 h-52 border-pink-700 text-pink-700 opacity-100'
                    )}
                    onClick={() => setPlatform("mobile")}
                >
                    <div className="h-full flex justify-center items-center">
                        <PiDeviceMobileCamera className='text-6xl text-zinc-100/20'/>
                    </div>
                    <p className='font-semibold'>Mobile &#40;dev&#41;</p>
                </div>
            </div>
            {platform === 'desktop' && (
                <Link href='https://baodaigov.github.io/BreezeOS' passHref>
                    <Button className='rounded-lg transition-none bg-sky-600 hover:bg-sky-500 dark:bg-pink-700 dark:hover:bg-pink-600 px-6 py-4 mr-4 text-zinc-100 text-sm font-semibold'>
                        <p className='mr-1'>Continue</p>
                        <BsArrowRightShort className='text-xl'/>
                    </Button>
                </Link>
            )}
            {platform === 'mobile' && (
                <Link href='https://baodaigov.github.io/BreezeOS-Mobile' passHref>
                    <Button className='rounded-lg transition-none bg-sky-600 hover:bg-sky-500 dark:bg-pink-700 dark:hover:bg-pink-600 px-6 py-4 mr-4 text-zinc-100 text-sm font-semibold'>
                        <p className='mr-1'>Continue</p>
                        <BsArrowRightShort className='text-xl'/>
                    </Button>
                </Link>
            )}
        </div>
    )
}