import React, { useState, useEffect } from 'react';

// import logo
import LogoDark from '../img/logo-dark.svg';
import LogoWhite from '../img/logo-white.svg';


// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';

const Darkmode = () => {


    const [theme, setTheme] = useState('dark');


    
    // ThemeState

    
    useEffect(() => {
        // select html elem
        const html = document.querySelector('html');
        if (localStorage.getItem('theme') === 'dark') {
          html.classList.add('dark');
          setTheme('dark');
        } else {
          html.classList.remove('dark');
          setTheme('light');
        }
      }, [theme]);

      // handle switch theme

      const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
          setTheme('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          setTheme('light');
          localStorage.setItem('theme', 'light');
        }
      };

  return (
    <div className="border-3 p-1 border-orange-500">


         

          {/* button */}
          <button
          onClick={handleThemeSwitch}
          className='  bg-orange-500   dark:bg-blue-400 border-blue-600
            shadow-l border-3 bg-accent
           border-5 p-1  shadow-inner shadow-orange-900 dark:shadow-blue-900
           text-white
            dark:text-dark
           rounded-full w-[2.2rem] h-[2.2rem]
           flex justify-center items-center'
        >
          {theme === 'dark' ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
    </div>
  )
}

export default Darkmode
