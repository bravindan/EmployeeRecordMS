
import { useState } from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between fixed top-0 left-0 right-0 z-50 '>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white mr-4 cursor-pointer'/>
        <span className='text-white font-semibold'>Employee Records MS</span>
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-65'>
          <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
            <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button>
          </span>
          <input type="text" name="" id="" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block'/>
        </div>
        <div className='text-white'>
          <FaBell className='w-6 h-6'/>
        </div>
        <div className='relative z-50'>
          <button type="button" className='text-white group' onClick={toggleDropdown}>
            <FaUserCircle className='w-6 h-6 mt-1'/>
            {isDropdownOpen && (
              <div className='bg-white absolute rounded-lg shadow-lg w-32 top-full right-0 z-50'>
                <ul className='py-2 text-sm text-gray-950'>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><Link to="/logout">Log Out</Link></li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

