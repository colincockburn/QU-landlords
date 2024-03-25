import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex w-full justify-between items-center text-sm h-12 md:h-20 font-custom border-b border-black px-5 md:px-10 lg:px-44">
      <div className='flex justify-start w-1/2'>
        {/* <img src="/flag.png" alt="Queens Flag " className='w-20' /> */}
        <div className='flex-col '>
          <NavLink exact to="/" className="md:text-2xl font-semibold font-Raleway text-black hover:text-gray-500 transform transition duration-500 ease-in-out hover:scale-110" activeClassName="text-red-500">QU Landlords</NavLink>
          <p className="text-gray-700 hidden sm:block">Not associated with Queen's University</p>        
        </div>
      </div>
      <div className='flex justify-between w-1/2 2xl:pl-40 md:text-2xl font-semibold text-black'>
        <NavLink to="/reviews" className="hover:text-gray-700 transform transition duration-500 ease-in-out hover:scale-110" activeClassName="text-red-500">Reviews</NavLink>
        <NavLink to="/post" className="hover:text-gray-700 transform transition duration-500 ease-in-out hover:scale-110" activeClassName="text-red-500">Post</NavLink>
        <NavLink to="/contact" className="hover:text-gray-700 transform transition duration-500 ease-in-out hover:scale-110" activeClassName="text-red-500">Contact</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;