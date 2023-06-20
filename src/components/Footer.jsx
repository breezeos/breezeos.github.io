import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

export default function Footer(){
    const [showLanguages, setShowLanguages] = useState(false);
    const [t, i18n] = useTranslation();

    function useOutside(ref) {
      useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setShowLanguages(false);
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
    }

    const languagesRef = useRef(null);
    useOutside(languagesRef);
    
    return (
        <div className="flex flex-col">
            <div className="px-12 md:px-16 py-12 flex bg-gray-50 border-t border-t-slate-200 text-gray-700 dark:border-t-slate-900 dark:bg-gray-950 dark:text-gray-50">
                <div className="flex flex-col font-light">
                    <p className="text-2xl mb-8">BreezeOS</p>
                    <div className="flex text-gray-400">
                        <a className="block hover:text-gray-500" href="https://tiktok.com/@breeze.os">
                            <i class="fa-brands fa-youtube text-xl mr-4"></i>
                        </a>
                        <a className="block hover:text-gray-500" href="https://youtube.com/@breezeos">
                            <i class="fa-brands fa-tiktok text-xl mr-4"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-12 md:px-16 py-5 flex flex-col lg:flex-row justify-between bg-gray-50 border-t border-t-slate-300 text-gray-700 dark:border-t-slate-900 dark:bg-gray-950 dark:text-gray-50 font-light text-xs">
                <div className="flex flex-col lg:flex-row">
                    <p className="mr-12">&copy; {new Date().getFullYear()} {t('footer.name')}</p>
                    <div className="flex flex-col my-8 lg:my-0 lg:flex-row">
                        <a href="#" className="mr-5 mb-4 lg:mb-0 hover:underline hover:underline-offset-4">{t('footer.pp')}</a>
                        <a href="#" className="mr-5 mb-4 lg:mb-0 hover:underline hover:underline-offset-4">{t('footer.terms')}</a>
                        <a href="#" className="hover:underline hover:underline-offset-4">{t('footer.cp')}</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    {showLanguages ? (
                        <div className="absolute -translate-y-20 rounded-md py-1 bg-gray-50 border border-slate-200 dark:border-slate-900 dark:bg-gray-950">
                            <a className="block py-2 px-3 w-36 hover:bg-[#0171ff] hover:text-gray-50" href="javascript:void(0)" onMouseDown={() => i18n.changeLanguage('enUS')}>English &#40;US&#41;</a>
                            <a className="block py-2 px-3 w-36 hover:bg-[#0171ff] hover:text-gray-50" href="javascript:void(0)" onMouseDown={() => i18n.changeLanguage('vi')}>Tiếng Việt</a>
                        </div>
                    ) : ''}
                    <a href="javascript:void(0)" onClick={() => showLanguages ? setShowLanguages(false) : setShowLanguages(true)} className="hover:underline hover:underline-offset-4" ref={languagesRef}>
                        {t('footer.language')}
                        <i className="fa-light fa-chevron-up text-xs ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}