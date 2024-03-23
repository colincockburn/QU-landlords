import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex justify-between items-center text-sm h-12 md:h-20 font-custom border-b border-black px-5 md:px-10 lg:px-44">
      <div className='flex justify-start w-1/2'>
        {/* <img src="/flag.png" alt="Queens Flag " className='w-20' /> */}
        <div className='flex-col '>
          <Link to="/" className="md:text-2xl font-semibold font-Raleway text-black">QU Landlords</Link>
          <p className="text-gray-700 hidden sm:block">Not associated with Queen's University</p>        </div>
      </div>
      <div className='flex justify-between w-1/2 2xl:pl-40 md:text-2xl font-semibold text-black'>
        <Link to="/reviews" className="">Reviews</Link>
        <Link to="/post" className="">Post</Link>
        <Link to="/contact" className="">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;