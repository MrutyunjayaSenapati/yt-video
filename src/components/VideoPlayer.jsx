import React from "react";

export  default function VideoPlayer  ({ videoId }) {
  if (!videoId) return <h2 className="text-center text-gray-500">Loading video...</h2>

  return (
    <div className="w-full max-w-4xl mx-auto">
      <iframe
        className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1`}
       
        allowFullScreen
      ></iframe>
    </div>
  );
}

