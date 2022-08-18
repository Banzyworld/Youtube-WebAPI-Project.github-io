import React from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';



const Header = () => {
  return (
        <div className='header'>
          <div className="headerLeft">
            <MenuIcon />
            <Link to='/'>
              <img 
                className='headerLogo'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt=''
              />
            </Link>
          </div>
          
          <div className="headerCenter">
            <input type='text'/>
            <SearchIcon className='headerSearchbutton'/>
          </div>

          <div className="headerRight">
            <VideoCallIcon className='headerIcon'/>
            <AppsIcon className='headerIcon'/>
            <NotificationsIcon className='headerIcon'/>
            <AccountCircleIcon
              alt='Nouman Ahmed'
              stc='https://avatars1.githubusercontent.com/u/35970677?s=60&v=4'
            />
          </div>
        </div>

  )
}

export default Header