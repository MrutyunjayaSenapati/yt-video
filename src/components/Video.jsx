import React from 'react';
import { Link } from 'react-router-dom';

export default function Video({ video }) {
  if (!video || !video.snippet) {
    return <p>Loading video...</p>; // Handle missing data
  }

  console.log(video);

  return (
    <div className="">
     
      <Link to={`/video/${video?.id?.id || video?.id}`}>

        <div className="flex flex-col">
          <div className="relative h-48 md:h-56 md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="h-full w-full "
            />
          </div>
          <div>
            {/* <img src="" alt="" /> */}
          <h2 className="mt-2 text-lg font-semibold">{video.snippet.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
