import { useEffect, useState } from 'react';
import Cover from '../galleries/cover.png';
import { useTranslation } from 'react-i18next';

export default function Body(){
    const [sourceImage, setSourceImage] = useState('');
    const {t} = useTranslation();

    return (
        <div className='flex flex-col overflow-x-hidden'>
            <div className='py-28 px-5 min-h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center' style={{ backgroundImage: `url(${Cover})`}}>
                <p className='text-7xl tracking-tighter text-gray-50'>{t('body.title')}</p>
                <p className='font-light text-base text-gray-50 mt-8'>{t('body.description')}</p>
                <div className='flex mt-8 justify-center'>
                    <a href='https://bit.ly/breezeos' className='flex items-center font-bold text-gray-50 rounded-full transition-all duration-200 mr-2 hover:bg-white hover:bg-opacity-10 hover:translate-x-1 [&:hover_i]:translate-x-1'>
                        <div className="text-xs mr-3 rounded-full flex justify-center items-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-50 bg-opacity-10">
                            <i className='fa-regular fa-chevron-right transition-full duration-200'></i>
                        </div>
                        <p className='text-xs sm:text-sm mr-4'>{t('body.try')}</p>
                    </a>
                    <a href='https://breezeos.github.io/docs' className='flex items-center font-bold text-[#0171ff] bg-gray-50 rounded-full transition-all duration-200 hover:bg-[#bbd9ff] hover:translate-x-1'>
                        <div className="text-xs mr-3 rounded-full flex justify-center items-center w-9 h-9 sm:w-10 sm:h-10 bg-[#0171ff] bg-opacity-10">
                            <i className="fa-light fa-file-lines"></i>
                        </div>
                        <p className='text-xs sm:text-sm mr-4'>{t('body.documentation')}</p>
                    </a>
                </div>
            </div>
            <div className='py-28 px-10 md:px-24 bg-gray-50 dark:bg-gray-950' id='about'>
                <div className='flex flex-col text-center items-center'>
                    <div className='flex flex-col lg:flex-row mb-7 text-4xl lg:text-5xl text-[#0171ff]'>
                        <i class="fa-light fa-sparkles"></i>
                        <p className='font-bold ml-0 mt-4 lg:ml-4 lg:mt-0'>{t('body.about.text1')}</p>
                    </div>
                    <p className='text-sm lg:text-lg font-light text-gray-950 dark:text-gray-50'>{t('body.about.text2')}</p>
                </div>
            </div>
        </div>
    )
}