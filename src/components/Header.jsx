import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../reducers/theme';
import { showNav } from '../reducers/nav';

export default function Header(){
    const themeDark = useSelector(state => state.theme.dark);
    const dispatch = useDispatch();

    return (
        <>
            <div className="w-full py-5 px-8 sm:py-7 sm:px-14 bg-gray-50 dark:bg-[#16181d]">
                <div className="max-w-5xl ml-auto mr-auto flex justify-between items-center">
                    <p className='text-2xl sm:text-3xl font-bold dark:text-gray-50'>BreezeOS</p>
                    <div className='flex text-2xl sm:text-3xl'>
                        {themeDark ? <i className="fa-solid fa-sun-bright symbolic" onClick={() => dispatch(toggleDarkMode())}></i> : <i className="fa-solid fa-moon symbolic" onClick={() => dispatch(toggleDarkMode())}></i>}
                        <i className="fa-solid fa-bars ml-9 symbolic" onClick={() => dispatch(showNav(true))}></i>
                    </div>
                </div>
            </div>
        </>
    )
}