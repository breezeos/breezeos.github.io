import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNav } from '../reducers/nav';
import { useTranslation } from "react-i18next";

export default function Navigation(){
    const nav = useSelector(state => state.nav.active);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <div className={`bg-black fixed top-0 right-0 bottom-0 left-0 z-10 h-full transition-all duration-300 ${nav ? 'bg-opacity-60 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'}`}>
            <nav role="navigation" className={`bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-50 transition-all duration-300 w-full h-full ${nav ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-full py-5 px-5 md:px-14 sticky top-0 z-10 border-b border-b-slate-300 dark:border-b-slate-900 bg-gray-50 dark:bg-gray-950">
                <div className="ml-auto mr-auto flex justify-between items-center text-gray-950 dark:text-gray-100">
                    <div className='w-8 h-8'></div>
                    <p className='text-xl font-light md:mr-8'>BreezeOS</p>
                    <i className='fa-light fa-xmark rounded-full flex justify-center items-center w-8 h-8 hover:bg-gray-950 hover:bg-opacity-10 hover:cursor-pointer dark:hover:bg-gray-100 dark:hover:bg-opacity-10' onClick={() => dispatch(showNav(false))}></i>
                </div>
              </div>
              <div className="py-14 px-10">
                <ul role="list">
                  <li className="text-3xl font-bold mb-4 transition-all duration-200 hover:text-[#016fff] active:text-[#016fff]">
                    <a href="/" onClick={() => dispatch(showNav(false))}>{t('header.home')}</a>
                  </li>
                  <li className="text-3xl font-bold mb-4 transition-all duration-200 hover:text-[#016fff] active:text-[#016fff]">
                    <a href="#about" onClick={() => dispatch(showNav(false))}>{t('header.aboutUs')}</a>
                  </li>
                  <li className="text-3xl font-bold mb-4 transition-all duration-200 hover:text-[#016fff] active:text-[#016fff]">
                    <a href="https://breezeos.github.io/docs" onClick={() => dispatch(showNav(false))}>{t('header.documentation')}</a>
                  </li>
                  <li className="text-3xl font-bold mb-4 transition-all duration-200 hover:text-[#016fff] active:text-[#016fff]">
                    <a href="https://bit.ly/breezeos" onClick={() => dispatch(showNav(false))}>{t('header.try')}</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
    )
}