import axios from "axios";


const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY =import.meta.env.VITE_YOUTUBE_API_KEY;
console.log("api key "+API_KEY); 

export const fetchTrendingVideos = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 100,
        key: API_KEY.replace(/['";]/g, ""),
      },
    });
    console.log("data "+data);

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
