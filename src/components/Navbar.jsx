import React, { useState } from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants';
import './NavToggle.css';

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
        <label className='hamburger'>
          <input
            checked={toggle}
            onChange={() => setToggle((previous) => !previous)}
            type='checkbox'></input>
          <svg viewBox='0 0 32 32'>
            <path
              className='line line-top-bottom'
              d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
            <path className='line' d='M7 16 27 16'></path>
          </svg>
        </label>
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
