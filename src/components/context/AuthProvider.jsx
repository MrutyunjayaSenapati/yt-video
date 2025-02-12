import React, { useEffect, useContext, createContext, useState } from "react";
import { fetchTrendingVideos } from "../../api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  
  const fetchAllData = async (query) => {
    try {
      setLoading(true);
      const response = await fetchTrendingVideos(); // ✅ Fixed function call
      setData(response);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch data when 'value' changes
  useEffect(() => {
    fetchAllData(value);
  }, [value]); 

  return (
    <AuthContext.Provider value={{ data, loading, fetchAllData, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
