import React from 'react'
import { AiFillHome,AiFillLike } from "react-icons/ai";
import { MdWhatshot,MdSubscriptions,MdVideoLibrary,MdHistory,MdOutlineOndemandVideo } from "react-icons/md";
import SidebarSection from './sidebarSection'
import './Sidebar.css'


const SideBar = () => {
  return (
      <div className='sidebar'>
        <SidebarSection selected Icon={AiFillHome} title='Home' />
        <SidebarSection  Icon={MdWhatshot} title='Trending' />
        <SidebarSection  Icon={MdSubscriptions} title='Subscription' />
        <hr />
        <SidebarSection  Icon={MdVideoLibrary} title='Library' />
        <SidebarSection  Icon={MdHistory} title='Your Videos' />
        <SidebarSection  Icon={MdOutlineOndemandVideo} title='Watch later' />
        <SidebarSection  Icon={AiFillLike} title='Liked videos' />
        <hr />
      </div>
  )
}

export default SideBar;