import React,{useEffect, useState} from 'react'
import Videocard from './Videocard'
import './Videodisplay.css'


const Videodisplay =  () => {
   // Fetching the data from Youtube console with API KEY Using Fetch
    // useEffect(() => {
    // fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE")
    // .then(response => {
    //     return (response.json())
    // }).then((response)=>{
    //     console.log(response)
    // })
    // .catch(error => {
    //     console.log(error);
    //     // setIsError(true);
    // })
    // }, [])
    
    useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE")
    .then(response => {
        return (response.json())
    }).then((response)=>{
        console.log(response)
    })
    .catch(error => {
        console.log(error);
        // setIsError(true);
    })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Videodisplay