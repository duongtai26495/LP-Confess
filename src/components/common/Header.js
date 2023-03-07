import React from 'react'
import Logo from './Logo'
import AcountNavItem from '../account/AcountNavItem' 
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='w-full shadow '>
        <div className='w-full xl:w-1/2 container m-auto flex flex-row justify-between p-3 items-center'>
            <div className=''>
                <Logo />
            </div>
            <nav className=''>
                <ul className='w-full flex flex-row gap-10'>
                    <li className='relative nav-item-account transition-all cursor-pointer font-semibold'><Link to={"/"}>Home</Link></li>
                    <li className='relative nav-item-account transition-all cursor-pointer font-semibold'><Link to={"/profile"}>Account</Link>
                    <div id='account_submenu' className='w-0 hidden xl:block absolute h-0 transition-all shadow-md right-0 bg-white rounded whitespace-nowrap overflow-hidden'>
                        <AcountNavItem />
                    </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header