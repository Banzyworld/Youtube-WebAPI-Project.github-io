import React from 'react';
import SideBarSections from './SideBarSections';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import { AiFillHome } from 'react-icons/fa';


const SideBar = () => {
  return (
      <div className='sidebar'>
          <SideBarSections selected Icon={HomeIcon} title='Home' />
          <SideBarSections Icon={WhatshotIcon} title='Trending' />
          <SideBarSections Icon={SubscriptionsIcon} title='Subscription' />
          <hr />
          <SideBarSections Icon={VideoLibraryIcon} title='Library' />
          <SideBarSections Icon={HistoryIcon} title='History' />
          <SideBarSections Icon={OndemandVideoIcon} title='Your videos' />
          <SideBarSections Icon={WatchLaterIcon} title='Watch later' />
          <SideBarSections Icon={ThumbUpIcon} title='Liked vides' />
          <hr />
      </div>
  )
}

export default SideBar;