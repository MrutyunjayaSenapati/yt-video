import React from "react";

export default function VideoList  ({ videos, onSelect })  {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <div
          key={video.id.videoId || video.id}
          onClick={() => onSelect(video.id.videoId || video.id)}
          className="cursor-pointer hover:opacity-75"
        >
          <img className="rounded-lg shadow-md" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <h3 className="mt-2 text-sm font-semibold">{video.snippet.title}</h3>
        </div>
      ))}
    </div>
  );
};


