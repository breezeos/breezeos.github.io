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
        <div className='pt-40 pb-16 text-center flex flex-col items-center bg-gradient-to-t from-sky-300 to-zinc-100 text-zinc-900 dark:from-[#270013] dark:to-zinc-950 dark:text-zinc-100'>
            <p className="font-extrabold text-6xl max-[1364px]:text-5xl max-md:text-4xl tracking-tight mb-10">Select an option</p>
            <div className="flex justify-center items-center max-md:flex-col mb-12 h-56 max-md:h-auto">
                <div
                    className={twMerge(
                        'cursor-pointer py-8 w-52 h-48 max-[1364px]:w-48 max-[1364px]:h-44 max-md:w-48 max-md:h-40 opacity-20 mx-2 my-2 bg-zinc-100/5 border-2 border-solid border-zinc-900/20 rounded-lg flex flex-col text-zinc-900 dark:border-zinc-100/20 dark:text-zinc-100 transition-all duration-300',
                        platform === 'desktop' && 'w-56 h-52 max-[1364px]:w-52 max-[1364px]:h-48 max-md:w-48 max-md:h-40 border-sky-700  my-2text-sky-700 dark:border-pink-700 dark:text-pink-700 opacity-100'
                    )}
                    onClick={() => setPlatform("desktop")}
                >
                    <div className="h-full flex justify-center items-center">
                        <SlScreenDesktop className='text-6xl max-[1364px]:text-5xl max-md:text-4xl text-zinc-900/50 dark:text-zinc-100/20'/>
                    </div>
                    <p className='font-semibold max-[1364px]:text-sm'>Desktop</p>
                </div>
                <div
                    className={twMerge(
                        'cursor-pointer py-8 w-52 h-48 max-[1364px]:w-48 max-[1364px]:h-44 max-md:w-48 max-md:h-40 opacity-20 mx-2 my-2 bg-zinc-100/5 border-2 border-solid border-zinc-900/20 rounded-lg flex flex-col text-zinc-900 dark:border-zinc-100/20 dark:text-zinc-100 transition-all duration-300',
                        platform === 'mobile' && 'w-56 h-52 max-[1364px]:w-52 max-[1364px]:h-48 max-md:w-48 max-md:h-40 border-sky-700  my-2text-sky-700 dark:border-pink-700 dark:text-pink-700 opacity-100'
                    )}
                    onClick={() => setPlatform("mobile")}
                >
                    <div className="h-full flex justify-center items-center">
                        <PiDeviceMobileCamera className='text-6xl max-[1364px]:text-5xl max-md:text-4xl text-zinc-900/50 dark:text-zinc-100/20'/>
                    </div>
                    <p className='font-semibold max-[1364px]:text-sm'>Mobile &#40;dev&#41;</p>
                </div>
            </div>
            <Link href={platform === 'desktop' ? 'https://baodaigov.github.io/BreezeOS' : 'https://baodaigov.github.io/BreezeOS-Mobile'} passHref>
                <Button className='rounded-lg transition-none bg-slate-900 hover:bg-slate-800 dark:bg-pink-700 dark:hover:bg-pink-600 px-6 py-4 mr-4 text-zinc-100 text-sm max-sm:text-xs font-semibold'>
                    <p className='mr-1'>Continue</p>
                    <BsArrowRightShort className='text-xl max-sm:text-lg'/>
                </Button>
            </Link>
        </div>
    )
}