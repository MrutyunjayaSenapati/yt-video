import React, { useState } from "react";

export default function SearchBar ({ onSearch }) 
 {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Search videos..."
        className="w-full p-2 border rounded-md shadow-sm focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}


