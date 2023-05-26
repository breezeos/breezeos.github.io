import Laptop from '../galleries/laptop.svg';

export default function Body(){
    return (
        <div className="flex flex-col py-28 px-12 overflow-x-hidden bg-gray-50 dark:bg-[#16181d]">
            <div className='flex flex-col max-w-4xl mx-auto text-center'>
                <p className='font-bold text-4xl sm:text-5xl dark:text-gray-100'>Get your things done.</p>
                <p className='font-light text-sm sm:text-base text-gray-400 dark:text-gray-600 mt-6'>With a fresh new layout, user-friendly and efficient system designed to help everyone have the best possible computing experience.</p>
                <div className='mt-16 relative'>
                    <img className='w-full h-auto' src={Laptop}/>
                    <div className='absolute w-[80%] top-[2%] left-1/2 -translate-x-1/2 -translate-y-[64,5%]'>
                        <img className='rounded-[5px]' src='https://baodaigov.github.io/BreezeOS/gallery/screenshot3.png'/>
                    </div>
                </div>
                <div className='mt-14 flex justify-center flex-col sm:flex-row'>
                    <a href='https://bit.ly/breezeos' target='_blank' className='flex justify-between items-center rounded-full px-7 py-3 bg-sky-700 hover:bg-sky-600 text-[15px] text-gray-100 font-bold w-64 sm:w-auto mb-3 sm:mb-0 mx-auto sm:mx-0 sm:mr-5'>
                        <p className='pr-3'>Try BreezeOS</p>
                        <i className="fa-regular fa-globe"></i>
                    </a>
                    <a className='flex justify-between items-center rounded-full px-7 py-3 bg-inherit hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700 dark:text-gray-100 border-[1px] text-[15px] font-bold w-64 sm:w-auto mx-auto sm:mx-0'>
                        <p className='pr-3'>Documentation</p>
                        <i className="fa-regular fa-book"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}