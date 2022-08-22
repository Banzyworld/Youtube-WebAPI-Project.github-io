import React from 'react'
import  {AiOutlineMenu,AiOutlineSearch}  from 'react-icons/ai';
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
        <input className='search-bar' type="text" name="" id="" />
        <AiOutlineSearch size={38} className='header__searchbutton'/>
      </div>

      <div className="header__right">
        <MdVideoCall className='header__icon' />
        <IoAppsSharp className='header__icon'/>
        <IoNotifications className='header__icon'/>
        <VscAccount />
      </div>
      
    </div>

  )
}

export default Header