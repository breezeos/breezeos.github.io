import Head from "next/head";
import Image from "next/image";
import Button from "@/components/Button";
import { BsArrowRightShort } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [textDisplayed, setTextDisplayed] = useState<boolean>(false);

  interface BlogContainerProps {
    name: string;
    description: string;
    date: string;
    image: any;
    link: string
  }

  const BlogContainer = ({
    name,
    description,
    date,
    image,
    link
  }: BlogContainerProps) => {
    return (
      <div
        className="mx-auto h-[630px] w-full overflow-hidden rounded-3xl bg-cover bg-repeat bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex h-full w-full flex-col-reverse bg-black/70 p-16 max-md:px-8 text-zinc-100">
          <Link href={link} className="flex">
            <Button className="bg-zinc-100 px-5 py-3 text-sm text-zinc-900 active:bg-zinc-300">
              <p className="mr-1 font-semibold">Read more</p>
              <LuChevronRight className="text-base" />
            </Button>
          </Link>
          <p className="mb-6">{description}</p>
          <p className="mb-6 text-5xl max-md:text-4xl font-extrabold">{name}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>BreezeOS Community</title>
      </Head>
      <Header />
      <div className="flex w-full justify-between bg-gradient-to-t from-sky-300 to-zinc-100 bg-right bg-no-repeat py-20 text-slate-900 dark:from-[#270013] dark:to-zinc-950 dark:text-slate-100 max-[1150px]:justify-center max-[1150px]:py-40 max-md:px-6">
        <div className="ml-16 flex w-[650px] flex-col justify-center max-[1364px]:ml-12 max-[1364px]:w-[550px] max-[1150px]:m-0 max-[1150px]:text-center">
          <p className="mb-6 text-6xl font-extrabold tracking-tight max-[1364px]:text-5xl">
            For a better desktop.
          </p>
          <p className="text-lg font-normal tracking-tight text-slate-600 dark:text-zinc-700 max-[1364px]:text-base">
            With a fresh new layout, user-friendly and efficient system designed
            to help everyone have the best possible experience.
          </p>
          <div className="mt-12 flex max-[1364px]:justify-center">
            <Link href="/try-breezeos">
              <Button className="rounded-lg bg-slate-900 px-6 py-4 text-sm font-semibold text-slate-100 transition-none hover:bg-slate-800 dark:bg-pink-700 dark:hover:bg-pink-600 max-sm:px-14">
                <p className="mr-1">Try BreezeOS</p>
                <BsArrowRightShort className="text-xl max-[1364px]:text-lg" />
              </Button>
            </Link>
            <button className="ml-4 flex w-96 items-center justify-between rounded-lg bg-zinc-900/5 px-5 py-3 text-sm ring-1 ring-zinc-900/10 hover:bg-zinc-900/10 dark:bg-zinc-100/5 dark:ring-zinc-100/10 dark:hover:bg-zinc-100/10 max-sm:hidden">
              <div className="flex items-center">
                <BiSearch className="mr-2 text-base text-slate-900/40 dark:text-slate-100/40 max-[1364px]:text-sm" />
                <p className="text-slate-900/40 dark:text-slate-100/40">
                  Quick search...
                </p>
              </div>
              <p className="tracking-widest text-slate-900/20 dark:text-slate-100/20">
                ⌘K
              </p>
            </button>
          </div>
        </div>
        <div className="block max-[1150px]:hidden">
          <div className="pointer-events-none relative hidden h-[750px] w-[650px] dark:block max-[1364px]:h-[650px] max-[1364px]:w-[550px]">
            <Image src="/phone-laptop.svg" alt="Phone and Laptop (Dark)" fill />
          </div>
          <div className="pointer-events-none relative block h-[750px] w-[650px] dark:hidden max-[1364px]:h-[650px] max-[1364px]:w-[550px]">
            <Image
              src="/phone-laptop2.svg"
              alt="Phone and Laptop (Light)"
              fill
            />
          </div>
        </div>
      </div>
      <div className="relative bg-zinc-50 px-8 py-40 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="mb-8 text-center">
            <div className="mb-6 flex h-16 select-none items-center justify-center text-6xl font-extrabold tracking-tight max-[1364px]:text-5xl max-[520px]:h-28 max-[520px]:flex-col">
              <span
                className={twMerge(
                  "cursor-pointer rounded-lg p-2 text-transparent transition-all duration-200 hover:bg-zinc-900/5 active:text-[56px] dark:hover:bg-zinc-100/5 max-[1364px]:active:text-[44px]",
                  textDisplayed &&
                    "pointer-events-none text-zinc-900 dark:text-zinc-100",
                )}
                onClick={() => setTextDisplayed(true)}
              >
                Privacy.
              </span>
              <span className="ml-1 max-[520px]:ml-0 max-[520px]:mt-1">
                Absolutely.
              </span>
            </div>
            <p className="mx-auto max-w-3xl text-lg text-zinc-500 max-md:text-base">
              All of your information, messages, contacts, photos and videos
              will not be stored in the server as we don't have a database, so
              you don't have to be worried.
            </p>
          </div>
          <Link
            href="/privacy"
            passHref
            className="flex items-center rounded-full bg-zinc-950/5 px-4 py-3 text-zinc-900 transition-all duration-300 active:bg-zinc-950/10 active:transition-none dark:bg-zinc-100/5 dark:text-zinc-100 dark:active:bg-zinc-100/10"
          >
            <p className="mr-1 text-sm font-semibold">Learn more</p>
            <LuChevronRight />
          </Link>
          <div className="relative mt-20 h-[465px] w-[800px] select-none overflow-hidden rounded-2xl max-[815px]:hidden">
            <div
              className={twMerge(
                "absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-3xl transition-all duration-300",
                textDisplayed && "pointer-events-none opacity-0",
              )}
            >
              <p className="text-2xl font-semibold text-zinc-100/20">
                This video is private.
              </p>
            </div>
            <iframe
              src="https://www.youtube.com/embed/GAhB63bsElA"
              className="h-full w-full"
              frameBorder={0}
            />
          </div>
        </div>
      </div>
      <div className="flex h-[780px] items-center justify-center bg-slate-100 dark:bg-slate-950">
        <div className="flex h-[80%] w-[75%] flex-col items-center justify-center rounded-3xl max-sm:rounded-none max-sm:w-full max-sm:h-full bg-slate-200 px-6 py-40 text-zinc-900 transition-all duration-300 hover:h-full hover:w-full hover:rounded-none dark:bg-slate-900 dark:text-zinc-100 max-lg:w-[90%]">
          <div className="mb-16 text-center text-5xl font-extrabold tracking-tight">
            <span>Purpose of creating </span>
            <span className="text-sky-500">BreezeOS</span>
          </div>
          <div className="flex w-full items-center justify-center space-x-4">
            <div className="relative h-14 w-14">
              <Image
                alt="Cyprus Lucastero"
                className="rounded-full"
                src="/cyplucastero.jpeg"
                fill
              />
            </div>
            <div>
              <p className="mb-1 font-semibold">Cyprus Lucastero</p>
              <div className="text-sm text-slate-600">Creator of BreezeOS</div>
            </div>
          </div>
          <div className="mt-6 max-w-3xl text-center text-lg text-slate-500 max-sm:text-base">
            <span>Our community is created to </span>
            <span className="font-semibold text-sky-500">
              give a user-friendly and lightweight user interface{" "}
            </span>
            <span>
              {" "}
              for everyone's device, make it very easy to use. We are currently
              working hard on these projects and we do keep in mind that{" "}
            </span>
            <span className="font-semibold text-sky-500">
              this will change the way you use computers
            </span>
            <span>. It's worth to give yourself a chance.</span>
          </div>
        </div>
      </div>
      <div className="space-y-6 bg-zinc-100 py-28 px-4 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="max-w-7xl mx-auto">
          <p className="mb-10 max-xl:px-4 text-5xl font-extrabold">Latest Blog</p>
          <BlogContainer
            name="Welcome to BreezeOS"
            date="1/1/1970"
            description="lorem ipsum dolor sit amet blablabla..."
            image="/breezeos-community.png"
            link="/blabla"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
