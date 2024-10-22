import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React from 'react' 
import { useState } from 'react';


const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    
  return (
    
    <nav className = ' flex flex-wrap justify-between md:items-center text-white px-10 pt-5 md:px-20'>
         <span className = 'text-xl font-bold tracking-wide'>Portfolio</span>
            <ul className = {`${menu? 'block' : 'hidden'} mx-24 px-2 py-2 md:mt-5 mt-4 font-semibold bg-black rounded-xl bg-opacity-0 md:border-none  text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
                <a href='#About'>
                  <li className = "text-md transition-all duraion-300 p-1 md:p-0 shadow-2xl">About</li>
                </a>
                <a href='#Skills'>
                  <li className = "text-md transition-all duraion-300 p-1 md:p-0">Skills</li>
                </a>
                <a href='#Projects'>
                  <li className = "text-md transition-all duraion-300 p-1 md:p-0">Projects</li>
                </a>
                <a href='#Footer'>
                  <li className = "text-md transition-all duraion-300 p-1 md:p-0">Contact</li>
                </a>
            </ul> 
                {
                 showMenu ? (
                   <RiMenu2Line
                     size={30}
                     className='md:hidden absolute right-10 top-6 translate-all duration-300'
                     onClick={()=>{
                       openMenu(!menu);
                       setShowMenu(!showMenu);
                     }}
                   />
                ) : (
                   <RiCloseLine
                   size={30}
                     className='md:hidden absolute right-10 top-6 translate-all duration-300'
                     onClick={()=>{
                      openMenu(!menu); 
                      setShowMenu(!showMenu);
                    }}
                  />
                ) 
              }
     </nav>
  )
}

export default Navbar