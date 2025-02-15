import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTrendingVideos } from "../api";
import ReactPlayer from "react-player";

export default function PlayingVideo() {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    document.body.classList.add("overflow-hidden"); // Hide navbar
    return () => document.body.classList.remove("overflow-hidden"); // Restore navbar
  }, [id]);

  const fetchVideoDetails = async () => {
    try {
      const trendingVideo = await fetchTrendingVideos();
      const videoDetails = trendingVideo.find((video) => video.id === id);
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
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-white">
      {/* Video Player */}
      <div className="w-full h-[80vh]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width="100%"
          height="100%"
          controls
          playing
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Video Details */}
      {video ? (
        <div className="mt-4 text-center px-4">
          <h1 className="text-2xl font-bold">{video.snippet.title}</h1>
          <p className="text-gray-400 text-sm mt-2">{video.snippet.description}</p>
        </div>
      ) : (
        <p className="mt-4 text-gray-400">Loading video details...</p>
      )}
    </div>
  );
}
