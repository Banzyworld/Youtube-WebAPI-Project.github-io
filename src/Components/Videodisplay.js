import React, {useEffect, useState} from 'react'
import Videocard from './Videocard';
import './Videodisplay.css';


const Videodisplay = () => {
    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
  fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE")
    .then(async (response )=> {
      const response_1 = await (response.json())
        console.log(response_1)
    })
    .catch(error => {
      console.log(error);
    })
  }, [])
  return (
    <div>Videodisplay</div>
  )
}

export default Videodisplay