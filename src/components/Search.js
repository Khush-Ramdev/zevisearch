import React, { useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search">
      <div>
        <input
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default Search;
