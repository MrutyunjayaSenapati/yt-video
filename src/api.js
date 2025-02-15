import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const Base_URL2="https://youtube138.p.rapidapi.com";

const API_KEY2=import.meta.env.VITE_YOUTUBE_API_KEY2;

console.log("API Key:", API_KEY); 
console.log("API Key2:", API_KEY2); 

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

    console.log("Trending Videos:", data.items); 

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

const options={
  headers:{
    'x-rapidapi-key': API_KEY2,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
}

export const showVideoData = async (url, params = {}) => {
  try {
    const { data } = await axios.get(`${Base_URL2}/${url}`, {
      params, // Add dynamic query params if needed
      headers: {
        'x-rapidapi-key': API_KEY2.replace(/['";]/g, ""),
        'x-rapidapi-host': 'youtube138.p.rapidapi.com',
      },
    });

    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching rapid API data:", error);
    throw error;
  }
};


export const searchVideos = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 50,
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
