import { useEffect, useState } from "react";
import { SlScreenDesktop } from "react-icons/sl";
import { PiDeviceMobileCamera } from "react-icons/pi";
import Link from "next/link";
import Button from "@/components/Button";
import { BsArrowRightShort } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function Try_BreezeOS() {
  const [platform, setPlatform] = useState<"desktop" | "mobile">("desktop");
  const [loading, setLoading] = useState<boolean>(false);
  const [textShown, setTextShown] = useState<boolean>(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => setTextShown(true), 4000);
    }
  }, [loading]);

  return (
    <>
      <div className="flex h-screen flex-auto flex-col items-center justify-center bg-gradient-to-t from-sky-300 to-zinc-100 text-center text-slate-900 dark:from-[#270013] dark:to-zinc-950 dark:text-slate-100">
        <p className="mb-10 text-6xl font-extrabold tracking-tight max-[1364px]:text-5xl max-md:text-4xl">
          Select an option
        </p>
        <div className="mb-12 flex h-56 items-center justify-center max-md:h-auto max-md:flex-col">
          <div
            className={twMerge(
              "mx-2 my-2 flex h-48 w-52 cursor-pointer flex-col rounded-lg border-2 border-solid border-zinc-900/20 bg-zinc-100/5 py-8 text-slate-900 opacity-20 transition-all duration-300 dark:border-zinc-100/20 dark:text-slate-100 max-[1364px]:h-44 max-[1364px]:w-48 max-md:h-40 max-md:w-48",
              platform === "desktop" &&
                "my-2text-sky-700 h-52 w-56 border-sky-700 opacity-100 dark:border-pink-700 dark:text-pink-700  max-[1364px]:h-48 max-[1364px]:w-52 max-md:h-40 max-md:w-48",
            )}
            onClick={() => setPlatform("desktop")}
          >
            <div className="flex h-full items-center justify-center">
              <SlScreenDesktop className="text-6xl text-slate-900/50 dark:text-slate-100/20 max-[1364px]:text-5xl max-md:text-4xl" />
            </div>
            <p className="font-semibold max-[1364px]:text-sm">Desktop</p>
          </div>
          <div
            className={twMerge(
              "mx-2 my-2 flex h-48 w-52 cursor-pointer flex-col rounded-lg border-2 border-solid border-zinc-900/20 bg-zinc-100/5 py-8 text-slate-900 opacity-20 transition-all duration-300 dark:border-zinc-100/20 dark:text-slate-100 max-[1364px]:h-44 max-[1364px]:w-48 max-md:h-40 max-md:w-48",
              platform === "mobile" &&
                "my-2text-sky-700 h-52 w-56 border-sky-700 opacity-100 dark:border-pink-700 dark:text-pink-700  max-[1364px]:h-48 max-[1364px]:w-52 max-md:h-40 max-md:w-48",
            )}
            onClick={() => setPlatform("mobile")}
          >
            <div className="flex h-full items-center justify-center">
              <PiDeviceMobileCamera className="text-6xl text-slate-900/50 dark:text-slate-100/20 max-[1364px]:text-5xl max-md:text-4xl" />
            </div>
            <p className="font-semibold max-[1364px]:text-sm">
              Mobile &#40;dev&#41;
            </p>
          </div>
        </div>
        <Link
          href={
            platform === "desktop"
              ? "https://baodaigov.github.io/BreezeOS"
              : "https://baodaigov.github.io/BreezeOS-Mobile"
          }
          passHref
          onClick={() => setLoading(true)}
        >
          <Button className="mr-4 rounded-lg bg-slate-900 px-6 py-4 text-sm font-semibold text-slate-100 transition-none hover:bg-slate-800 dark:bg-pink-700 dark:hover:bg-pink-600">
            <p className="mr-1">Continue</p>
            <BsArrowRightShort className="text-xl max-sm:text-lg" />
          </Button>
        </Link>
      </div>
      <div
        className={twMerge(
          `absolute bottom-0 left-0 right-0 top-0 ${
            platform === "desktop" ? "bg-[#2b2b2b]" : "bg-black"
          } pointer-events-none z-10 m-auto flex h-[90%] w-[90%] items-center justify-center text-center opacity-0 transition-all duration-300`,
          loading && "pointer-events-auto h-full w-full opacity-100",
        )}
      >
        <p
          className={twMerge(
            "pointer-events-none leading-loose opacity-0 transition-all duration-500",
            textShown && "opacity-100",
          )}
        >
          Please be patient while we're trying to redirect you.
          <br />
          You may need to check your Internet connection.
        </p>
      </div>
    </>
  );
}
