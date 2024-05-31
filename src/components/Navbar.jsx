import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins hover:text-secondary duration-200 ease-linear transition-all font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white mr-10`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-[80px] right-0 z-[10] min-w-[140px] w-full h-[100dvh] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col-reverse mt-[-20px] gap-8 justify-center items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li
                onClick={() => setToggle(false)}
                key={nav.id}
                className={`font-poppins text-center font-normal cursor-pointer text-[5vw] text-white`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
