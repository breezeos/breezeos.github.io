import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../reducers/theme';
import { showNav } from '../reducers/nav';
import { useTranslation } from 'react-i18next';

export default function Header(){
    const themeDark = useSelector(state => state.theme.dark);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <>
            <div className="w-full py-5 px-5 md:px-14 sticky top-0 z-10 border-b border-b-slate-200 dark:border-b-slate-900 bg-gray-50 dark:bg-gray-950">
                <div className="ml-auto mr-auto flex justify-between items-center text-gray-950 dark:text-gray-100">
                    {themeDark ? <i className='fa-light fa-bars rounded-full flex justify-center items-center w-8 h-8 hover:bg-gray-950 hover:bg-opacity-10 hover:cursor-pointer dark:hover:bg-gray-100 dark:hover:bg-opacity-10 md:hidden' onClick={() => dispatch(showNav(true))}></i> : <i className='fa-light fa-bars rounded-full flex justify-center items-center w-8 h-8 hover:bg-gray-950 hover:bg-opacity-5 hover:cursor-pointer md:hidden' onClick={() => dispatch(showNav(true))}></i>}
                    <div className='flex items-center'>
                        <a href='/' className='text-xl font-light md:mr-8'>BreezeOS</a>
                        <div className='hidden items-center md:flex'>
                            <a href='/' className='text-sm font-light mr-6 hover:underline hover:underline-offset-4'>{t('header.home')}</a>
                            <a href='#about' className='text-sm font-light mr-6 hover:underline hover:underline-offset-4'>{t('header.aboutUs')}</a>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <a href='https://breezeos.github.io/docs' className='hidden md:block text-sm font-light mr-6 hover:underline hover:underline-offset-4'>{t('header.documentation')}</a>
                        <a href='https://bit.ly/breezeos' className='hidden md:block text-sm text-[#016fff] bg-[#016fff1c] hover:bg-[#016fff2a] rounded-full px-5 py-2 font-bold mr-4'>{t('header.try')}</a>
                        {themeDark ? <i className='fa-light fa-sun-bright rounded-full flex justify-center items-center w-8 h-8 hover:bg-gray-950 hover:bg-opacity-10 hover:cursor-pointer dark:hover:bg-gray-100 dark:hover:bg-opacity-10' onClick={() => dispatch(toggleDarkMode())}></i> : <i className='fa-light fa-moon rounded-full flex justify-center items-center w-8 h-8 hover:bg-gray-950 hover:bg-opacity-5 hover:cursor-pointer' onClick={() => dispatch(toggleDarkMode())}></i>}
                    </div>
                </div>
            </div>
        </>
    )
}