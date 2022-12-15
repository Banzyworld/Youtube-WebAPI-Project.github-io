import { Badge, IconButton } from '@mui/material';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';
import { IoAppsSharp, IoNotifications } from 'react-icons/io5';
import { MdVideoCall } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import './Header.css';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<AiOutlineMenu />
				<img
					className="header__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
					alt=""
				/>
			</div>

			<div className="header__center">
				<input
					className="search-bar"
					type="text"
					name=""
					id=""
					placeholder="search"
				/>
				<IoIosSearch size={38} className="header__searchbutton" />
			</div>

			<div className="header__right">
				<IconButton
					size="large"
					edge="start"
					aria-label="Watch Later"
					sx={{ mr: 2 }}
					// component={Link}
					// to="/"
				>
					<Badge badgeContent={5} color="secondary">
						<PlaylistPlayRoundedIcon sx={{ color: 'black' }} />
					</Badge>
				</IconButton>

				<MdVideoCall size={32} className="header__icon" />

				<IoNotifications size={32} className="header__icon" />
				<VscAccount size={32} />
			</div>
		</div>
	);
};

export default Header;
