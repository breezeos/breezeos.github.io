import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNav } from '../reducers/nav';

export default function Navigation(){
    const nav = useSelector(state => state.nav.active);
    const dispatch = useDispatch();

    function useOutside(ref) {
      useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            dispatch(showNav(false));
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

    const navRef = useRef(null);
    useOutside(navRef);

    return (
        <div className={`bg-black fixed top-0 right-0 bottom-0 left-0 z-10 h-full transition-all duration-300 ${nav ? 'bg-opacity-60 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'}`}>
            <nav role="navigation" className={`bg-gray-200 dark:bg-gray-800 transition-all duration-300 w-fit h-full absolute ${nav ? 'right-0' : '-right-72'}`} ref={navRef}>
                <ul className="px-5 py-14 pl-0" role="list">
                    <li className="px-7 py-3 w-60 mt-2 text-sm sm:text-base cursor-pointer rounded-r-full rounded-br-full bg-sky-700 bg-opacity-40 font-bold text-sky-600">Home</li>
                    <li className="px-7 py-3 w-56 mt-2 text-sm sm:text-base cursor-pointer font-light dark:text-gray-100" onClick={() => dispatch(showNav(false))}>
                      <a href="#about">About</a>
                    </li>
                    <li className="px-7 py-3 w-56 mt-2 text-sm sm:text-base cursor-pointer font-light dark:text-gray-100" onClick={() => dispatch(showNav(false))}>
                      <a href="https://breezeos.github.io/docs" target="_blank">Documentation</a>
                    </li>
                    <li className="px-7 py-3 w-56 mt-2 text-sm sm:text-base cursor-pointer font-light dark:text-gray-100" onClick={() => dispatch(showNav(false))}>
                      <a href="https://bit.ly/breezeos" target="_blank">Try BreezeOS</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}