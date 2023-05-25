export default function Footer(){
    return (
        <div className="px-16 py-12 flex flex-col dark:bg-[#1a1d23]">
            <div className="flex mb-5 text-xl">
                <a href="https://youtube.com/@breezeos" className="mr-5">
                    <i className="fa-brands fa-youtube symbolic hover:text-gray-500 dark:hover:text-gray-300"></i>
                </a>
                <a href="https://tiktok.com/@breeze.os" className="mr-5">
                    <i className="fa-brands fa-tiktok symbolic hover:text-gray-500 dark:hover:text-gray-300"></i>
                </a>
            </div>
            <p className="text-gray-400 font-light text-xs sm:text-sm">&copy; BreezeOS Community 2023 - 2023</p>
        </div>
    )
}