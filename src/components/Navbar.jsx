import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchContext from '../context/SearchContext';
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  let searchRef = useRef();

  let ctx = useContext(SearchContext)
  console.log(ctx)

  const handleSearch = () => {
    let value =  searchRef.current.value;
    console.log(value)
    ctx.setSearch(value)
  };


  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-red-800 shadow-lg fixed left-0 top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-2 2h4m8 8h-4l-8-3.21L4 18V5a2 2 0 012-2h10a2 2 0 012 2v13l6 3z" />
            </svg>
            <span className="ml-2 text-white text-xl font-bold">Bharat News</span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            {/* <Link to="/finance" onClick={()=>ctx.setSearch('finance')}  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Finance</Link> */}
            <Link to="/finance" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Finance</Link>
            <Link to="/sports" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Sports</Link>
            <Link to="/entertainment" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Entertainment</Link>
            <Link to="/politics" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Politics</Link>
            <Link to="/crime" className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Crime</Link>
            <input
              type="text"
              ref={searchRef}
              // onClick={handleSearch}
              className="ml-3 px-3 py-1.5 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
            <button onClick={handleSearch} className='bg-green-800 h-9 w-10 text-white hover:text-black px-3 py-1.5 rounded-md hover:bg-green-500 ml-3'><IoMdSearch /></button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label="Open main menu"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={dropdownOpen ? "md:hidden block" : "hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/finance" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Finance</a>
          <a href="/sports" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sports</a>
          <a href="/entertainment" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Entertainment</a>
          <a href="/politics" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Politics</a>
          <a href="/crime" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Crime</a>
          <input
            type="text"
            className="w-full px-3 py-1.5 mt-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;