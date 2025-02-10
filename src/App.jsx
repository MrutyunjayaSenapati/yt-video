import React, { useEffect, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";
import { fetchTrendingVideos, searchVideos } from "./api";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    loadTrendingVideos();
  }, []);

  const loadTrendingVideos = async () => {
    const videos = await fetchTrendingVideos();
    setVideos(videos);
    setSelectedVideo(videos[0].id);
  };

  const handleSearch = async (query) => {
    const results = await searchVideos(query);
    setVideos(results);
    setSelectedVideo(results[0]?.id?.videoId);
  };

  return (
    <div>
      <h1>YouTube Clone</h1>
      <SearchBar onSearch={handleSearch} />
      <VideoPlayer videoId={selectedVideo} />
      <VideoList videos={videos} onSelect={setSelectedVideo} />
    </div>
  );
};

export default App;
