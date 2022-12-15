import { IconButton } from '@mui/material';
import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import './Videocard.css';
const Videocard = ({
	image,
	title,
	channel,
	views,
	timestamp,
	channelImage,
	// handleUpdatPlaylist,
}) => {
	return (
		<div className="videocard">
			<img className="videocard__image" src={image} alt="" />
			<div className="videocard__info">
				<VscAccount
					className="videocard__avatar"
					alt={channel}
					src={channelImage}
				/>
				<div className="videocard__text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} views • {timestamp}
					</p>
				</div>
			</div>
			<IconButton
			//  onClick={}
			>
				<PlaylistAddRoundedIcon />
			</IconButton>
		</div>
	);
};

export default Videocard;
