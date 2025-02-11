import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

console.log("API Key:", API_KEY); 

export const fetchTrendingVideos = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 100,
        key: API_KEY.replace(/['";]/g, ""), // ✅ Fixed: No need for `.replace()`
      },
    });

    console.log("Trending Videos:", data.items); // ✅ Proper Logging

    if (!data.items || data.items.length === 0) {
      console.warn("No trending videos found.");
      return [];
    }

    return data.items;
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    return [];
  }
};

export const searchVideos = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 10,
        key: API_KEY,
      },
    });

    console.log("Search Results:", data.items); // ✅ Better Logging

    if (!data.items || data.items.length === 0) {
      console.warn("No search results found.");
      return [];
    }

    return data.items;
  } catch (error) {
    console.error("Error searching videos:", error);
    return [];
  }
};
