import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'

const Navbar = () => {
  const location = useLocation()

  return (
    <div className='px-2 sm:px-5 md:px-10 lg:px-24 py-1.5 flex items-center justify-between'>
      <div className='flex items-center gap-1'>
        <img src={logo} alt=""  className='size-5'/>
        <h1 className='text-lime-400 text-lg font-semibold'>Music</h1>
      </div>
      <nav>
        <ul className='flex items-center gap-5'>
          <li>
            <Link
              to="/"
              className={`text-sm ${location.pathname === '/' ? 'text-gray-400' : 'text-white'}`}
            >
              All songs
            </Link>
          </li>

          <li>
            <Link
              to="/Playlists"
              className={`text-sm ${location.pathname === '/Playlists' ? 'text-gray-400' : 'text-white'}`}
            >
              Playlists
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

