import React from 'react';
import './ChannelSection.css';
import { VscAccount } from "react-icons/vsc"

const ChannelSection = ({image, channel, subs, noOfVideos, description}) => {
  return (
    <div className='channelsection'>
        <VscAccount size={32}
         className='channelsection__logo'
         alt={channel}
         src={image}
         />

        <div className="channelsection__text">
            <h4>{channel}</h4>
            <p>{subs} subscribers • {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelSection