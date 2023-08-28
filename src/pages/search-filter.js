// SearchFilter.js
import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Búsqueda"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchFilter;
