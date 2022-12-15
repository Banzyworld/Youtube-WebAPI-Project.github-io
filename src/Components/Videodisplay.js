import React, { useEffect, useState } from 'react';
import Videocard from './Videocard';
import './Videodisplay.css';
import { CircularProgress } from '@mui/material';
import { DateTime } from 'luxon';
import { Alert } from '@mui/material';
import axios from 'axios';

const Videodisplay = () => {
	const [videoCards, setVideoCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	// const [playlist, setPlaylist] = useState([]);
	/*Results of fetched data from the youtube console*/
	useEffect(() => {
		fetch(
			'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE'
		)
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.log(error);
				setIsError(true);
			});
	}, []);

	useEffect(() => {
		fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE`
		)
			.then(response => {
				return response.json();
			})
			.then(response => {
				console.log(response);
				createVideoCards(response.items);
			})
			.catch(error => {
				console.log(error);
				setIsError(true);
			});
	}, []);

	async function createVideoCards(videoItems) {
		let newVideoCards = [];
		for (const video of videoItems) {
			const videoId = video.id;
			const snippet = video.snippet;
			const channelId = snippet.channelId;
			const response = await axios.get(
				`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE`
			);
			const channelImage = response.data.items[0].snippet.thumbnails.high.url;
			const title = snippet.title;
			const image = snippet.thumbnails.high.url;
			const views = video.statistics.viewCount;
			const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
			const channel = snippet.channelTitle;

			newVideoCards.push({
				videoId,
				image,
				title,
				channel,
				views,
				timestamp,
				channelImage,
			});
		}
		setVideoCards(newVideoCards);
		setIsLoading(false);
	}

	if (isError) {
		return (
			<Alert severity="warning">This is a warning alert — check it out!</Alert>
		);
	}
	// const handleAddToPlaylist = (videoId, quantity) => {
	// 	commerce.cart
	// 		.add(videoId, quantity)
	// 		.then(item => {
	// 			setCart(item.cart);
	// 		})
	// 		.catch(error => {
	// 			console.error('There was an error adding the item to the cart', error);
	// 		});
	return (
		<div className="recommendedvideos">
			{isLoading ? (
				<CircularProgress className="loading" color="inherit" />
			) : null}
			<div className="recommendedvideos__videos">
				{videoCards.map(item => {
					return (
						<Videocard
							// handleAddTPlaylist={}
							key={item.videoId}
							title={item.title}
							image={item.image}
							views={item.views}
							timestamp={item.timestamp}
							channel={item.channel}
							channelImage={item.channelImage}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Videodisplay;
