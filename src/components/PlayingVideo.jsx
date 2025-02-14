import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { showVideoData } from '../api';
import ReactPlayer from 'react-player';

export default function PlayingVideo() {
    const [video,setVideo] = useState();
    const {id}=useParams();

    useEffect(()=>{
      fetchVideoDetails();
    },[id])

    const fetchVideoDetails = async () => {
      try {
          const videoDetails = await showVideoData(`video/details/?id=${id}`);
          console.log("Video Details:", videoDetails);
          if (videoDetails) {
              setVideo(videoDetails);
          } else {
              console.warn("Video not found");
          }
      } catch (error) {
          console.error("Error fetching video details:", error);
      }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            height="100%"
            width="100%"
            controls
            style={{backgroundColor:"#000000"}}
            playing={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
