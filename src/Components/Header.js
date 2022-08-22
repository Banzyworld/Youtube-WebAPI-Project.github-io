import React from 'react'
import  {AiOutlineMenu}  from 'react-icons/ai';
import {IoIosSearch} from 'react-icons/io'
import { IoAppsSharp,IoNotifications } from "react-icons/io5"
import  {MdVideoCall}  from 'react-icons/md';
import { VscAccount } from "react-icons/vsc"
import './Header.css'




const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <AiOutlineMenu />
        <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
      </div>

      <div className="header__center">
        <input className='search-bar' type="text" name="" id="" placeholder='search' />
        <IoIosSearch size={38} className='header__searchbutton'/>
      </div>

      <div className="header__right">
        <MdVideoCall size={32} className='header__icon' />
        <IoAppsSharp size={32} className='header__icon'/>
        <IoNotifications size={32} className='header__icon'/>
        <VscAccount size={32} />
      </div>
      
    </div>

  )
}

export default Header