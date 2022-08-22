import React,{useEffect, useState} from 'react'
import Videocard from './Videocard'
import './Videodisplay.css'


const Videodisplay =  () => {
    useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE")
    .then(response => {
        return (response.json())
    }).then((response)=>{
        console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Videodisplay